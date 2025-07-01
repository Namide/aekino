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

import CallOptimizer from '../../render/CallOptimizer'

/**
 * Scene contain camera and all meshes.
 */
export default class Scene {
  constructor() {
    this.meshes = []
    this.depthTest = true
    this.sortCompare = (mesh1, mesh2) => {
      if (mesh1.order !== mesh2.order)
        return mesh1.order - mesh2.order
      else if (mesh1.program && mesh2.program && mesh1.program !== mesh2.program)
        return mesh1.program.id - mesh2.program.id
      else if (mesh1.textures && mesh2.textures && mesh1.textures.length > 0 && mesh1.textures.length > 0)
        return mesh1.textures[0].id - mesh2.textures[1].id

      return 0
    }

    this._updateList = []
  }

  /**
   * Add a mesh to the scene (for render)
   * 
   * @param {Mesh} mesh 
   */
  addMesh(mesh) {
    this.meshes.push(mesh)
  }

  /**
   * Remove mesh from the scene
   * 
   * @param {Mesh} mesh 
   */
  removeMesh(mesh) {
    const id = this.meshes.indexOf(mesh)
    if (id > -1)
      this.meshes.splice(id, 1)
  }

  /**
   * Use sortCompare property of the scene to sort the meshes
   */
  sort() {
    this.meshes.sort(this.sortCompare)
  }

  /**
   * Color of the WebGL background : RGBA (Array of Number)
   */
  set bgColor([r, g, b, a = 1]) {
    this._updateList.push(gl => gl.clearColor(r, g, b, a))
    this._bgColor = [r, g, b, a]
  }

  get bgColor() {
    return this._bgColor
  }

  /**
   * Initialize the scene
   * 
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  init(gl) {
    console.log(gl)
    this._callOptimizer = CallOptimizer.getInstance(gl)
  }

  /**
   * Draw the scene
   * 
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  draw(gl) {
    while (this._updateList.length > 0)
      this._updateList.pop()(gl)


    if (!this._callOptimizer.optimizeDepthTest(this.depthTest)) {
      if (this.depthTest)
        gl.enable(gl.DEPTH_TEST)
      else
        gl.disable(gl.DEPTH_TEST)
    }

    // gl.viewport(0, 0, this.width, this.height)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT)


    for (const mesh of this.meshes) {
      if (mesh.visible) {
        if (mesh.isInitialized()) {
          mesh.draw(gl)
        }
        else {
          mesh.init(gl)
          mesh.draw(gl)
        }
      }
    }
  }
}