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

import Matrix4 from '../../math/Matrix4'
import Uniform from './Uniform'

export default class Camera3D extends Uniform
{
    constructor(label)
    {
        super(label, 35676, new Matrix4())
       
        this.fovy = 45
        this.near = 0.1
        this.far = 100

        const matrix = new Matrix4()
        this._matrix = matrix
        
        this.updated = true
        this.updateNum = 0

        this._ratio = 0


        // Add functions
        this.clear = () =>
        {
            matrix.identity()
            this.updated = true
        }
        this.translate = vec3 =>
        {
            matrix.translate(vec3)
            this.updated = true
        }
        this.scale = vec3 =>
        {
            matrix.scale(vec3)
            this.updated = true
        }
        this.rotate = (rad, vec3) =>
        {
            matrix.rotate(rad, vec3)
            this.updated = true
        }
        this.rotateX = rad =>
        {
            matrix.rotateX(rad)
            this.updated = true
        }
        this.rotateY = rad =>
        {
            matrix.rotateY(rad)
            this.updated = true
        }
        this.rotateZ = rad =>
        {
            matrix.rotateZ(rad)
            this.updated = true
        }
        this.lookAt = (eye, center, up) =>
        {
            matrix.lookAt(eye, center, up)
            this.updated = true
        }
    }

    get data()
    {
        if (this.updated)
            this.update()

        return this._data
    }

    get ratio()
    {
        return this._ratio
    }

    set ratio(ratio)
    {
        this._ratio = ratio
        this.updated = true
    }

    resize(width, height)
    {
        this._ratio = width / height
        this.updated = true
    }
    
    update()
    {
        this._data.perspective(this.fovy * Math.PI / 180, this._ratio, this.near, this.far)
        this._data.multiply(this._matrix)
        this.updated = false
        this.updateNum++
    }
}