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

import mat4 from 'gl-matrix/src/gl-matrix/mat4.js'
import Uniform from './Uniform'

export default class Mesh3D
{
    constructor(geom, program)
    {
        this.geom = geom
        this.program = program
        
        // position, rotation, scale -> uniform
        const matrix = mat4.create()
        mat4.identity(matrix)
        const matrixU = new Uniform('uMVMatrix', 35676, matrix)
        
        this.uniforms = [matrixU]
        
        this.matrixU = matrixU
    }
    
    translate(...pos)
    {
        const matrix = this.matrixU.data
        mat4.translate(matrix, matrix, pos)
    }
    
    addUniform(uniform)
    {
        this.uniforms.push(uniform)
    }
    
    isInitialized()
    {
        if (!this.program.isInitialized())
            return false
        
        if (!this.geom.isInitialized())
            return false
        
        for (const uniform of this.uniforms)
            if (!uniform.isInitialized())
                return false
        
        return true
    }
    
    init(gl, globalUniforms)
    {
        const program = this.program
        const allUniforms = [...this.uniforms, ...globalUniforms]

        if (!this.program.isInitialized())
            this.program.init(gl, this.geom.buffers, allUniforms)
            
        if (!this.geom.isInitialized())
            this.geom.init(gl, program)
        
        
        for (const uniform of allUniforms)
            if (!uniform.isInitialized())
                uniform.init(gl, program)
    }
    
    draw(gl, globalUniforms)
    {
        const allUniforms = [...this.uniforms, ...globalUniforms]
        
        this.geom.draw(gl)
            
        for(const uniform of allUniforms)
            uniform.draw(gl)
        
        this.geom.display(gl)
        // gl.drawArrays(gl.TRIANGLES, 0, pyramidVertexPositionBuffer.numItems)
    }
}
