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
        this.attributes = [geom]
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
    
    addAttribute(attribute)
    {
        this.attributes.push(attribute)
    }
    
    addUniform(uniform)
    {
        this.uniforms.push(uniform)
    }
    
    isInitialized()
    {
        if (!this.program.isInitialized())
            return false
        
        for (const attribute of this.attributes)
            if (!attribute.isInitialized())
                return false
        
        for (const uniform of this.uniforms)
            if (!uniform.isInitialized())
                return false
        
        return true
    }
    
    init(gl)
    {
        const program = this.program
        if (!this.program.isInitialized())
            this.program.init(gl, this.attributes, this.uniforms)
        
            
        for (const attribute of this.attributes)
            if (!attribute.isInitialized())
                attribute.init(gl, program)
        
        /*for (const uniform of this.uniforms)
            if (!uniform.isInitialized())
                uniform.init(gl, program)*/
        
        
    }
    
    draw(gl)
    {
        for(const attribute of this.attributes)
        {
            attribute.draw(gl)
        }
    }
}
