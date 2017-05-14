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

    uniform vec3 uColorFog;
    
    uniform int uDepthEnable;

    void main(void)
    {
        $chunkcall
        gl_FragColor = color;
    }`

function f(num)
{
    return Number.isInteger(num) ? num.toFixed(1) : num
}

export default class FogPass extends Pass
{
    constructor({
        minDepth = 0.1,
        maxDepth = 0.2,
        minPower = 0.2,
        maxPower = 1,
        depthCurve = 100,
        color = [1.0, 1.0, 1.0]})
    {
        super(null, 'aVertexPosition', 'uColor')
        
        
        this.useColorTexture('uColor')
        this.useDepthTexture('uDepth', 'uDepthEnable')
        
        const uColor = new Uniform('uColorFog', 35665 /* gl.FLOAT_VEC3 */, color )
        this.addUniform(uColor)
        
        const fragmentShader = this._initFragmentShader(minDepth, maxDepth, minPower, maxPower, depthCurve)
        
        this.program = new Program(VERTEX_SHADER, fragmentShader)
    }
    
    
    
    _initFragmentShader(minDepth, maxDepth, minPower, maxPower, depthCurve)
    {
        let chunkCall = `
            float depthValue = 0.0;
            if (uDepthEnable >= 0) {
                vec4 depth = texture2D(uDepth, vTextureCoord.xy);
                depthValue = pow(depth.x, ${f(depthCurve)});
                depthValue = (depthValue - ${f(minDepth)}) / ${f(maxDepth - minDepth)};
                depthValue = clamp(depthValue, ${f(minPower)}, ${f(maxPower)});
            }
            vec4 originalColor = texture2D(uColor, vTextureCoord.xy); 
            vec4 color = vec4(mix(originalColor.xyz, uColorFog, depthValue), originalColor.w);
        `
         // vec4(mix(color.xyz, bg, depthValue), 1.0);
        
        const fs = FRAGMENT_SHADER.replace('$chunkcall', chunkCall)
        
        return fs
    }
}