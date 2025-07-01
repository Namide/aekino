import CallOptimizer from '../../render/CallOptimizer'

/**
 * A mesh contain all data of a renderable WebGL object.
 */
export default class Mesh {
  /**
   * @param {Geom} geom           Geometry of the object
   * @param {Program} program     Program of the object
   */
  constructor(geom, program) {
    this.geom = geom
    this.program = program

    this.uniforms = []
    this.globalUniforms = []
    this.textures = []

    this.localCalls = []
    this.globalCalls = []

    this.order = 1
    this.visible = true
    this.depthTest = false

    this.blending = {}

    this._isInitialized = false
  }

  /**
   * Change the blending pixel arithmetic function of the object.
   * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
   * 
   * @param {GLenum} sfactor       770: gl.SRC_ALPHA, 771: gl.ONE_MINUS_SRC_ALPHA
   * @param {GLenum} dfactor 
   */
  addBlending(sfactor, dfactor) {
    this.blending[sfactor] = dfactor
  }

  /**
   * @param {Uniform} uniform
   */
  addUniform(uniform) {
    this.uniforms.push(uniform)
  }

  /**
   * @param {Uniform} uniform 
   */
  removeUniform(uniform) {
    const i = this.uniforms.indexOf(uniform)
    if (i > -1)
      this.uniforms.splice(i, 1)
  }

  /**
   * Global uniform is shared between objects.
   * It's better for optimize
   * 
   * @param {Uniform} uniform 
   */
  addGlobalUniform(uniform) {
    this.globalUniforms.push(uniform)
  }

  /**
   * @param {Uniform} uniform 
   */
  removeGlobalUniform(uniform) {
    const i = this.globalUniforms.indexOf(uniform)
    if (i > -1)
      this.globalUniforms.splice(i, 1)
  }

  /**
   * @param {Texture} texture 
   */
  addTexture(texture) {
    this.textures.push(texture)
  }

  /**
   * @param {Texture} texture 
   */
  removeTexture(texture) {
    const i = this.textures.indexOf(texture)
    if (i > -1)
      this.textures.splice(i, 1)
  }

  /**
   * Check if all the data of the mesh are initialized in the rendering context
   */
  isInitialized() {
    let success = this._isInitialized

    if (success)
      return success


    if (!this.program.isInitialized())
      success = false

    for (const attribute of this.geom.attributes)
      if (!attribute.isInitialized())
        success = false

    for (const buffer of this.geom.buffers)
      if (!buffer.isInitialized())
        success = false

    for (const texture of this.textures)
      if (!texture.isInitialized())
        success = false


    return success
  }

  /**
   * Get all locations of the uniforms, buffers, attributes and textures to
   * storage these to "calls" functions
   * 
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  _setCalls(gl) {
    const program = this.program

    for (const attribute of this.geom.attributes) {
      const location = program.getAttribLocation(gl, attribute)
      this.localCalls.push(attribute.bind.bind(attribute, gl, location))
    }

    for (const buffer of this.geom.buffers) {
      this.localCalls.push(buffer.bind.bind(buffer, gl))
    }

    for (const uniform of this.uniforms) {
      const location = program.getUniformLocation(gl, uniform)
      this.localCalls.push(uniform.bind.bind(uniform, gl, location))
    }

    for (const texture of this.textures) {
      const [location, index] = program.getTextureLocationIndex(gl, texture)
      this.localCalls.push(texture.bind.bind(texture, gl, location, index))
    }

    for (const uniform of this.globalUniforms) {
      const location = program.getUniformLocation(gl, uniform)
      this.globalCalls.push((force = true) => {
        if (force || uniform.updated) {
          uniform.bind.call(uniform, gl, location)
          uniform.updated = false
        }
      })
    }
  }

  /**
   * Initilialize all data of the mesh to the current rendering context 
   * 
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  _initData(gl) {
    const program = this.program

    let success = true

    for (const attribute of this.geom.attributes)
      if (!attribute.isInitialized())
        if (!attribute.init(gl))
          success = false

    for (const buffer of this.geom.buffers)
      if (!buffer.isInitialized())
        if (!buffer.init(gl))
          success = false

    for (const texture of this.textures)
      if (!texture.isInitialized())
        if (!texture.init(gl))
          success = false

    return success
  }

  dispose() {
    this._isInitialized = false
    this.localCalls.length = 0
  }


  /**
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  init(gl) {
    const program = this.program
    let success = true

    // Use program
    if (!this.program.isInitialized()) {
      if (!this.program.init(gl))
        success = false
    }
    else {
      this.program.bind(gl)
    }


    // Init all mesh data (textures, buffers, attributes, uniforms)
    if (!this._initData(gl))
      success = false


    // Store all calls (mesh data + global data)
    if (success && this.localCalls.length < 1)
      this._setCalls(gl)


    this._callOptimizer = CallOptimizer.getInstance(gl)


    this._isInitialized = success

    return success
  }

  /**
   * Draw the mesh in the current rendering context
   * 
   * @param {WebGLRenderingContext} gl        Current WebGL context
   * @param {Array of Function} customCalls   Custom functions called during the mesh render
   */
  draw(gl, customCalls = []) {
    if (!this._callOptimizer.optimizeDepthTest(this.depthTest)) {
      if (this.depthTest)
        gl.enable(gl.DEPTH_TEST)
      else
        gl.disable(gl.DEPTH_TEST)
    }

    // Use program, if ok call globals uniforms, else, test updated globals uniforms
    const program = this.program
    if (!this._callOptimizer.optimizeProgram(program)) {
      this.program.bind(gl)

      for (const callback of this.globalCalls)
        callback(true)
    }
    else {
      for (const callback of this.globalCalls)
        callback(false)
    }

    // Set blending
    const blendingKeys = Object.keys(this.blending)
    for (const key of blendingKeys)
      gl.blendFunc(key, this.blending[key])
    if (blendingKeys.length > 0)
      gl.enable(3042 /* gl.BLEND */)

    // Call local
    for (const callback of this.localCalls)
      callback()

    // Call custom
    for (const callback of customCalls)
      callback()

    // Draw mesh
    this.geom.display(gl)
  }
}
