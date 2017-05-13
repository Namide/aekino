/* 
 * The MIT License
 *
 * Copyright 2017 Damien Doussaud (namide.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import Pass from './Pass'
import Program from '../material/Program'
import Uniform from '../../data/uniform/Uniform'

const VERTEX_SHADER = `
    attribute vec3 aVertexPosition;
    varying vec2 vTextureCoord;

    void main(void)
    {
        vTextureCoord = vec2(aVertexPosition.x * 0.5 + 0.5, aVertexPosition.y * 0.5 + 0.5);
        gl_Position = vec4(aVertexPosition, 1.0);
    }`

const FRAGMENT_SHADER = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uColor;
    uniform sampler2D uDepth;
    uniform int uDepthEnable;

    void main(void)
    {
        vec4 color = texture2D(uColor, SineWave(vTextureCoord.xy));

        float depthValue = 0.0;
        if (uDepthEnable >= 0)
        {
            vec4 depth = texture2D(uDepth, SineWave(vTextureCoord.xy));
            depthValue = pow(depth.x, 100.0);//  * 100.0 - 98.7;
        }

        gl_FragColor = vec4(mix(color.rgb, vec3(1.0, 1.0, 1.0), depthValue), 1.0); // vec4(mix(color.xyz, bg, depthValue), 1.0);
    }`

const program = new Program(VERTEX_SHADER, FRAGMENT_SHADER)


// https://www.wanadev.fr/34-trucs-et-astuces-webgl/
export default class GaussianBlurPass extends Pass
{
    constructor(depthFocal = 0.1, maxDepth = 0.2, maxBlurLevel = 5)
    {
        super(program, 'aVertexPosition', 'uColor')
        
        this.useColorTexture('uColor')
        this.useDepthTexture('uDepth', 'uDepthEnable')
        
        for (let i = 2; i < maxBlurLevel + 1; i++)
        {
            const kernel = this._getKernels(i)
            const uKernel = new Uniform('uKernel' + (i - 1), )
        }
        
    }
    
    _getKernels(max)
    {
        const list = []
        let sum = 0
        for (let i = 1; i < max; i++)
        {
            // y = exp(-(x/3)^2)
            const val = Math.exp(-Math.pow((i - 1) * 3 / (max - 2), 2))
            sum += (i < 2) ? val : (val + val)
            list.push(val)
        }
        
        
        for (let i = 0; i < list.length; i++)
            list[i] /= sum
            
        let test = list[0]
        for (let i = 1; i < list.length; i++)
            test += list[i] * 2
            
        return list
    }
    
}