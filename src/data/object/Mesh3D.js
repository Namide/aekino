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
import Transform3D from '../uniform/Transform3D'


export default class Mesh3D extends Mesh
{
    constructor(geom, program)
    {
        super(geom, program)
        this.depthTest = true
        this._initTransform3D()
    }

    _initTransform3D()
    {
        const transform3D = new Transform3D('uMVMatrix')
        const matrix4 = transform3D.data

        this.transform3D = transform3D
        this.matrix4 = matrix4

        // Add functions
        this.translate = matrix4.translate.bind(matrix4)
        this.scale = matrix4.scale.bind(matrix4)
        this.rotate = matrix4.rotate.bind(matrix4)
        this.rotateX = matrix4.rotateX.bind(matrix4)
        this.rotateY = matrix4.rotateY.bind(matrix4)
        this.rotateZ = matrix4.rotateZ.bind(matrix4)

        this.lookAt = matrix4.lookAt.bind(matrix4)

        // Add to uniforms
        this.addUniform(transform3D)
    }

    get position()
    {
        return this.transform3D.getTranslation()
    }

    get rotation()
    {
        return this.transform3D.getRotation()
    }
}