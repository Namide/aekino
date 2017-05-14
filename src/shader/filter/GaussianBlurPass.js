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
    uniform int uSize;
    uniform int uDepthEnable;

    $chunkfct

    void main(void)
    {
        $chunkcall
        gl_FragColor = color;
    }`

function f(num)
{
    return Number.isInteger(num) ? num.toFixed(1) : num
}

// https://www.wanadev.fr/34-trucs-et-astuces-webgl/
export default class GaussianBlurPass extends Pass
{
    constructor({
        minDepth = 0.1,
        maxDepth = 0.2,
        samples = 5,
        xBlur = true,
        power = 1,
        depthCurve = 100 })
    {
        
        
        super(null, 'aVertexPosition', 'uColor')
        
        this.power = power
        this.xBlur = xBlur
        this.depthCurve = depthCurve
        this.useColorTexture('uColor')
        this.useDepthTexture('uDepth', 'uDepthEnable')
        
        const fragmentShader = this._initFragmentShader(minDepth, maxDepth, samples)
        this.program = new Program(VERTEX_SHADER, fragmentShader)
        
        if (xBlur)
            this.useUWidth('uSize', 1)
        else
            this.useUHeight('uSize', 1)
    }
    
    
    
    _initFragmentShader(minDepth = 0.1, maxDepth = 0.3, samples = 5)
    {
        const xBlur = this.xBlur
        const powerStr = f(this.power)
        const kernels = []
        for (let i = 0; i < samples; i++)
        {
            const kernel = this._getKernels(i + 1)
            // const uKernel = new Uniform('uKernel' + (i - 1), )
            kernels.push(kernel)
        }
        
        let chunkFct = ''
        for (let i = 0; i < kernels.length; i++)
        {
            const kernel = kernels[i]
            chunkFct += `
            vec4 blur${i + 1}(sampler2D image, vec2 uv) {
                vec2 move;
                vec4 colorCurrent = texture2D(image, uv);
                vec4 color = colorCurrent * ${f(kernel[0])};`

            for (let j = 1; j < kernel.length; j++)
            {
                chunkFct += `
                move = ${xBlur ? 'vec2(' + j + '.0 * ' + powerStr + ' / float(uSize), 0.0)' : ('vec2(0.0, ' + j + '.0 * ' + powerStr + ' / float(uSize))')};
                color += texture2D(image, uv + move) * ${ f(kernel[j]) };
                color += texture2D(image, uv - move) * ${ f(kernel[j]) };`
            }
            
            chunkFct += 'return color; }'
            
        }
        
        
        let chunkCall = `
            float depthValue = 0.0;
            vec4 color;
            if (uDepthEnable >= 0) {
                vec4 depth = texture2D(uDepth, vTextureCoord.xy);
                depthValue = pow(depth.x, ${f(this.depthCurve)});
                
                int blurPower = int(floor(0.5 + (depthValue - ${f(minDepth)}) * ${f(samples)} / ${f(maxDepth - minDepth)}));   
        `

        for (let i = 0; i < samples; i++)
        {
            const condition = 'blurPower' + ((i > samples - 2 ) ? (' >= ' + i ) : (i < 1) ? (' < 1') : (' == ' + i) );
            
            chunkCall += `${i > 0 ? ' else if' : 'if'} ( ${condition}) {
                color = blur${i + 1}(uColor, vTextureCoord.xy);
            }`
        }
        chunkCall += `
        } else {
            color = texture2D(uColor, vTextureCoord.xy);
        }
        `
        
        
        const fs = FRAGMENT_SHADER.replace('$chunkfct', chunkFct).replace('$chunkcall', chunkCall)
        
        return fs
    }
    
    _getKernels(max)
    {
        const list = []
        let sum = 0
        for (let i = 1; i < max + 2; i++)
        {
            // y = exp(-(x*6)^2)
            // x -> [0, 1]
            // y -> [0, 1]
            const a = (i - 1) * 3 / max            
            const val = Math.exp(-a * a)
            sum += (i < 2) ? val : (val + val)
            list.push(val)
        }
        
        
        
        for (let i = 0; i < list.length; i++)
            list[i] /= sum
            
        /* let test = list[0]
        for (let i = 1; i < list.length; i++)
            test += list[i] * 2
        console.log(test)*/
        
        return list
    }
    
}