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

import Mesh from './Mesh'
import Transform2D from '../uniform/Transform2D'


export default class Mesh2D extends Mesh
{
    constructor(geom, program)
    {
        super(geom, program)
        this.depthTest = false
        this._initTransform2D()
    }

    _initTransform2D()
    {
        const transform2D = new Transform2D('uMVMatrix')
        const matrix3 = transform2D.data

        this.transform2D = transform2D
        this.matrix3 = matrix3

        // Add functions
        this.translate = matrix3.translate.bind(matrix3)
        this.scale = matrix3.scale.bind(matrix3)
        this.rotate = matrix3.rotate.bind(matrix3)

        // Add to uniforms
        this.addUniform(transform2D)
    }

    get position()
    {
        return this.transform2D.getTranslation()
    }

    get rotation()
    {
        return this.transform2D.getRotation()
    }
}