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

const vec3 = new Float32Array(3)


export default class BackgroundTransform3D extends Uniform
{
    constructor(label, camera3D, distance = 1)
    {
        super(label, 35676, Matrix4.create())

        this.camera3D = camera3D
        this.updateNum = -1

        // 1 is infinity distance
        // 0 is same distance of the geometry
        this.distance = distance // 0 --> 1
    }

    get data()
    {
        if (this.updateNum !== this.camera3D.updateNum)
            this.update()

        return this._data
    }
    
    update()
    {
        // To construct the matrix, extract data of camera 3D without translation
        const cam = this.camera3D
        const transform3D = cam._matrix

        // Get translation of camera and invert it
        Matrix4.getTranslation(transform3D, vec3)
        vec3[0] = -vec3[0] * this.distance
        vec3[1] = -vec3[1] * this.distance
        vec3[2] = -vec3[2] * this.distance

        // Apply perspective, substract translation and apply all transformations
        Matrix4.perspective(this._data, cam.fovy * Math.PI / 180, cam.ratio, cam.near, cam.far)
        Matrix4.translate(this._data, vec3)
        Matrix4.multiply(this._data, transform3D)

        this.updateNum = this.camera3D.updateNum
    }
}