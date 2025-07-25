import CallOptimizer from '../../render/CallOptimizer'

/**
 * With a layer you can:
 * - Group mesh : usefull to group transparent mesh and sort it
 * - Use the same mask for multiple mesh
 */
export default class Layer {
  constructor() {
    this.meshs = []

    this.order = 0
    this.visible = true
    // this.depthTest = null
    this.mask = null

    this._isInitialized = false

    this.sortCompare = (mesh1, mesh2) => {
      if (mesh1.order !== mesh2.order)
        return mesh1.order - mesh2.order
      else if (mesh1.program && mesh2.program && mesh1.program !== mesh2.program)
        return mesh1.program.id - mesh2.program.id
      else if (mesh1.textures && mesh2.textures && mesh1.textures.length > 0 && mesh1.textures.length > 0)
        return mesh1.textures[0].id - mesh2.textures[0].id

      return 0
    }
  }

  /**
   * @param {Mask|null} mask 
   */
  setMask(mask = null) {
    this.mask = mask
  }

  /**
   * @param {Mesh} mesh 
   */
  addMesh(mesh) {
    this.meshs.push(mesh)
  }

  /**
   * @param {Mesh} mesh 
   */
  removeMesh(mesh) {
    const id = this.meshs.indexOf(mesh)
    if (id > -1)
      this.meshs.splice(id, 1)
  }

  sort() {
    this.meshs.sort(this.sortCompare)
  }

  /**
   * Check if meshes and mask are initialized in the rendering context
   */
  isInitialized() {
    if (this.mask !== null && !this.mask.isInitialized())
      return false

    for (const mesh of this.meshs)
      if (!mesh.isInitialized())
        return false

    return true
  }

  dispose() {
    for (const mesh of this.meshs)
      mesh.dispose()

    return true
  }

  /**
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  init(gl) {
    let success = true

    if (this.mask !== null)
      this.mask.init(gl)

    for (const mesh of this.meshs)
      if (!mesh.init(gl))
        success = false

    this._callOptimizer = CallOptimizer.getInstance(gl)

    return success
  }
  /**
   * Draw meshes with mask in the current rendering context
   * 
   * @param {WebGLRenderingContext} gl        Current WebGL context
   * @param {Array of Function} customCalls   Custom functions called during all meshes render
   */
  draw(gl, customCalls = []) {
    if (this.mask)
      this.mask.before(gl)

    /*if (this.depthTest !== null && !this._callOptimizer.optimizeDepthTest(this.depthTest))
    {
        if (this.depthTest)
            gl.enable(gl.DEPTH_TEST)
        else
            gl.disable(gl.DEPTH_TEST)
    }*/

    for (const mesh of this.meshs)
      mesh.draw(gl, customCalls)


    if (this.mask)
      this.mask.after(gl)
  }
}
