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

export default class Camera3D extends Uniform {
  constructor() {
    super('uPMatrix', 35676, Matrix4.create())

    this.fovy = 45
    this.near = 0.1
    this.far = 100

    const matrix = Matrix4.create()
    this._matrix = matrix

    this.updated = true
    this.updateNum = 0

    this._ratio = 0


    // Add functions
    this.clear = () => {
      Matrix4.identity(matrix)
      this.updated = true
    }
    this.translate = vec3 => {
      Matrix4.translate(matrix, vec3)
      this.updated = true
    }
    this.scale = vec3 => {
      Matrix4.scale(matrix, vec3)
      this.updated = true
    }
    this.rotate = (rad, vec3) => {
      Matrix4.rotate(matrix, rad, vec3)
      this.updated = true
    }
    this.rotateX = rad => {
      Matrix4.rotateX(matrix, rad)
      this.updated = true
    }
    this.rotateY = rad => {
      Matrix4.rotateY(matrix, rad)
      this.updated = true
    }
    this.rotateZ = rad => {
      Matrix4.rotateZ(matrix, rad)
      this.updated = true
    }
    this.lookAt = (eye, center, up) => {
      Matrix4.lookAt(matrix, eye, center, up)
      this.updated = true
    }
  }

  get data() {
    if (this.updated)
      this.update()

    return this._data
  }

  get ratio() {
    return this._ratio
  }

  set ratio(ratio) {
    this._ratio = ratio
    this.updated = true
  }

  resize(width, height) {
    this._ratio = width / height
    this.updated = true
  }

  update() {
    Matrix4.perspective(this._data, this.fovy * Math.PI / 180, this._ratio, this.near, this.far)
    Matrix4.multiply(this._data, this._matrix)

    this.updated = false
    this.updateNum++
  }
}