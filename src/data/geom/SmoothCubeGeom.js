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

import Geom from './Geom'

const cubeVertices = [
  // Front face
  -0.5, -0.5, 0.5,
  0.5, -0.5, 0.5,
  0.5, 0.5, 0.5,
  -0.5, 0.5, 0.5,

  // Back face
  -0.5, -0.5, -0.5,
  -0.5, 0.5, -0.5,
  0.5, 0.5, -0.5,
  0.5, -0.5, -0.5,
]

const cubeIndices = [
  0, 1, 2, 0, 2, 3,    // Front face
  4, 5, 6, 4, 6, 7,    // Back face
  3, 2, 6, 3, 6, 5,    // Top face
  0, 4, 7, 0, 7, 1,    // Bottom face
  7, 6, 2, 7, 2, 1,    // Right face
  0, 3, 5, 0, 5, 4     // Left face
]

export default class SmoothCubeGeom extends Geom {
  constructor() {
    super()

    this.addVertices('aVertexPosition', cubeVertices, 3)
    this.addIndices(cubeIndices)
  }

  addColors(a, b, c, d, e, f, g, h) {
    const cubeColors = [a, b, c, d, e, f, g, h]

    let unpackedCubeColors = []
    for (let i in cubeColors)
      unpackedCubeColors = unpackedCubeColors.concat(cubeColors[i])

    this.addVertices('aVertexColor', unpackedCubeColors, 4)
  }

  clone(cubeGeom = new CubeGeom()) {
    return super.clone(cubeGeom)
  }
}