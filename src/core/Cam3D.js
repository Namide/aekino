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
import Attribute from './Attribute'

export default class Cam3D extends Attribute
{
    constructor()
    {
        super('uPMatrix')
       
        this.fovv = 45
        this.near = 0.1
        this.far = 100
        this.matrix = mat4.create()
    }
    
    translate(...pos)
    {
        mat4.translate(this.matrix, this.matrix, pos)
    }
    
    init(gl, program)
    {
        mat4.perspective(this.fovv, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, this.matrix)
        
        this.pointer = gl.getUniformLocation(program, super.label);
    }
}