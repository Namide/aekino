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
import Uniform from '../uniform/Uniform'


export default class Transform3D extends Uniform
{
    constructor(label)
    {
        super(label, 35676 /* gl.FLOAT_MAT4 */, Matrix4.create())

        this.updateNum = 0
        this.updated = true
        this.local = Matrix4.create()

        this.parent = null
    }

    get global()
    {
        this.update()
        return this._data
    }

    update()
    {
        const parent = this.parent
        const hasParent = this.parent !== null

        if (this.updated || (hasParent && this._parentUpdateNum !== parent.updateNum))
        {
            const data = this._data

            if (hasParent)
            {
                Matrix4.copy(parent.global, data)

                Matrix4.multiply(data, this.local)
                this._parentUpdateNum = parent.updateNum
            }
            else
            {
                Matrix4.copy(this.local, data)
            }

            this.updateNum++
            this.updated = true
        }
    }

    clear()
    {
        Matrix4.identity(this.local)
        this.updateNum++
        this.updated = true
    }

    scale(vec3)
    {
        Matrix4.scale(this.local, vec3)
        this.updateNum++
        this.updated = true
    }

    translate(vec3)
    {
        Matrix4.translate(this.local, vec3)
        this.updateNum++
        this.updated = true
    }

    rotate(rad, vec3)
    {
        Matrix4.rotate(this.local, rad, vec3)
        this.updateNum++
        this.updated = true
    }

    rotateX(rad)
    {
        Matrix4.rotateX(this.local, rad)
        this.updateNum++
        this.updated = true
    }

    rotateY(rad)
    {
        Matrix4.rotateY(this.local, rad)
        this.updateNum++
        this.updated = true
    }

    rotateZ(rad)
    {
        Matrix4.rotateZ(this.local, rad)
        this.updateNum++
        this.updated = true
    }

    attach(parent)
    {
        this.parent = parent
        this._parentUpdateNum = parent.updateNum
        this.updateNum++
        this.updated = true
    }

    detach()
    {
        this.parent = null
        this.updateNum++
        this.updated = true
    }
}
