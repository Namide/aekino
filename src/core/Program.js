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

const vs = `      
    attribute vec3 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec4 vColor;

    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vColor = aVertexColor;
    }
`

const fs = `
    precision mediump float;

    varying vec4 vColor;

    void main(void) {
        gl_FragColor = vColor;
    }
`

export default class Program
{
    constructor()
    {
        this.attributes = {}
        this.uniforms = {}
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    getUniformLocation(label)
    {        
        if (this.uniforms.hasOwnProperty(label))
            return this.uniforms[label]
        else
            console.error('The uniform location ' + label + ' don\'nt exist on this program')
            
        return null
    }
    
    getAttributeLocation(label)
    {
        if (this.attributes.hasOwnProperty(label))
            return this.attributes[label]
        else
            console.error('The attribute location ' + label + ' don\'nt exist on this program')
            
        return null
    }
    
    init(gl, attributes, uniforms)
    {

        this.vertexShader = this._createShader(gl, 35633 /* gl.VERTEX_SHADER */, vs)
        this.fragmentShader = this._createShader(gl, 35632 /* gl.FRAGMENT_SHADER */, fs)
        
        const program = gl.createProgram()
        gl.attachShader(program, this.vertexShader)
        gl.attachShader(program, this.fragmentShader)
        gl.linkProgram(program)
        
        if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        {
            console.error('Impossible d\'initialiser le shader.')
        }
        
        gl.useProgram(program)
        
            
        
        // Link buffer / program
        for (const attribute of attributes)
        {
            const attributePointer = gl.getAttribLocation(program, attribute.label)
            gl.enableVertexAttribArray(attributePointer)
            // this.vertexAttribute = vertexAttribute
            this.attributes[attribute.label] = attributePointer
        }
        
        
        // Link uniform / program
        for (const uniform of uniforms)
        {
            const uniformPointer = gl.getUniformLocation(program, uniform.label)
            // uniform.pointer = uniformPointer
            this.uniforms[uniform.label] = uniformPointer
        }
        
        
        
        
        this.pointer = program
    }
    
    _createShader(gl, type, src)
    {
        const shader = gl.createShader(type)
        gl.shaderSource(shader, src)
        gl.compileShader(shader)
    
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        {  
            return console.error('Une erreur est survenue au cours de la compilation du shader: ' + gl.getShaderInfoLog(shader))
        }

        return shader
    }
}