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

import Matrix3 from '../../math/Matrix3'
import Uniform from './Uniform'

export default class Camera2D extends Uniform
{
    constructor()
    {
        super('uPMatrix', 35675, new Matrix3())
       
        this._matrix = new Matrix3()
        
        this.updated = true
        this.updateNum = 0

        this._minX = -1
        this._maxX = 1
        this._minY = -1
        this._maxY = 1


        // Add functions
        this.clear = () =>
        {
            matrix.identity()
            this.updated = true
        }
        this.translate = vec2 =>
        {
            matrix.translate(vec2)
            this.updated = true
        }
        this.scale = vec2 =>
        {
            matrix.scale(vec2)
            this.updated = true
        }
        this.rotate = rad =>
        {
            matrix.rotate(rad)
            this.updated = true
        }
    }

    get data()
    {
        if (this.updated)
            this.update()

        return this._data
    }

    setArea(minX, minY, maxX, maxY)
    {
        this._minX = minX
        this._minY = minY
        this._maxX = maxX
        this._maxY = maxY

        this.updated = true
    }
    
    update()
    {
        this._data.identity()

        const width = this._maxX - this._minX
        const height = this._maxY - this._minY

        this._data.scale([
            1 / width,
            1 / height
        ])

        /*this._data.translate([
            this._minX - width * 0.5,
            this._minY - height * 0.5
        ])*/

        this._data.multiply(this._matrix)


        this.updated = false
        this.updateNum++
    }
}