import CallOptimizer from '../../render/CallOptimizer'

/**
 * Can be used with Layer.
 * https://open.gl/depthstencils
 */
export default class Mask {
  /**
   * @param {Mesh} mesh       Mesh used for the mask 
   */
  constructor(mesh) {
    this.mesh = mesh
    this.setMaskFunc(519 /* gl.ALWAYS */, 1, 0xFF /* gl.STENCIL_BITS */)
    this.setDisplayFunc(517 /* gl.NOTEQUAL */, 0, 0xFF /* gl.STENCIL_BITS */)
    // gl.EQUAL 1 0xFF
    // gl.EQUAL 0 0xFF
  }

  /**
   * @param {GLenum} func         test function
   *      512     gl.NEVER      Never pass.
   *      513     gl.LESS       Pass if (ref & mask) <  (stencil & mask).
   *      514     gl.EQUAL      Pass if (ref & mask) =  (stencil & mask).
   *      515     gl.LEQUAL     Pass if (ref & mask) <= (stencil & mask).
   *      516     gl.GREATER    Pass if (ref & mask) >  (stencil & mask).
   *      517     gl.NOTEQUAL   Pass if (ref & mask) != (stencil & mask).
   *      518     gl.GEQUAL     Pass if (ref & mask) >= (stencil & mask).
   *      519     gl.ALWAYS     Always pass.
   * @param {GLint} ref           reference value for the stencil test
   * @param {GLuint} mask         bit-wise mask that is used to AND the reference value and the stored stencil value when the test is done
   *      gl.getParameter(gl.STENCIL_WRITEMASK);
   *      // 110101
   *      
   *      gl.getParameter(gl.STENCIL_BACK_WRITEMASK);
   *      // 110101
   *      
   *      gl.getParameter(gl.STENCIL_BITS);
   *      // 0
   */
  setMaskFunc(func, ref, mask) {
    this.maskFunc = func
    this.maskRef = ref
    this.maskMask = mask
  }

  /**
   * @param {GLenum} func         test function
   *      512     gl.NEVER      Never pass.
   *      513     gl.LESS       Pass if (ref & mask) <  (stencil & mask).
   *      514     gl.EQUAL      Pass if (ref & mask) =  (stencil & mask).
   *      515     gl.LEQUAL     Pass if (ref & mask) <= (stencil & mask).
   *      516     gl.GREATER    Pass if (ref & mask) >  (stencil & mask).
   *      517     gl.NOTEQUAL   Pass if (ref & mask) != (stencil & mask).
   *      518     gl.GEQUAL     Pass if (ref & mask) >= (stencil & mask).
   *      519     gl.ALWAYS     Always pass.
   * @param {GLint} ref           reference value for the stencil test
   * @param {GLuint} mask         bit-wise mask that is used to AND the reference value and the stored stencil value when the test is done
   *      gl.getParameter(gl.STENCIL_WRITEMASK);
   *      // 110101
   *      
   *      gl.getParameter(gl.STENCIL_BACK_WRITEMASK);
   *      // 110101
   *      
   *      gl.getParameter(gl.STENCIL_BITS);
   *      // 0
   */
  setDisplayFunc(func, ref, mask) {
    this.displayFunc = func
    this.displayRef = ref
    this.displayMask = mask
  }

  /**
   * Check if the mesh is initialized in the rendering context
   */
  isInitialized() {
    return this.mesh.isInitialized()
  }

  /**
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  init(gl) {
    this.mesh.init(gl)
    this._callOptimizer = CallOptimizer.getInstance(gl)
  }

  before(gl, customCall = []) {
    gl.enable(2960 /* gl.STENCIL_TEST */)

    gl.depthMask(false)
    gl.clear(1024 /* gl.STENCIL_BUFFER_BIT */)
    gl.colorMask(false, false, false, false)
    gl.stencilOp(7680 /* gl.KEEP */, 7680 /* gl.KEEP */, 7682 /* gl.INCR */)
    gl.stencilFunc(this.maskFunc, this.maskRef, this.maskMask)


    // Draw mask
    this.mesh.draw(gl, customCall)

    // Disable program optimization
    // this._callOptimizer.optimizeProgram(null)


    gl.stencilFunc(this.displayFunc, this.displayRef, this.displayMask)
    gl.depthMask(true)
    gl.colorMask(true, true, true, true)
    gl.stencilOp(7680 /* gl.KEEP */, 7680 /* gl.KEEP */, 7680 /* gl.KEEP */)
  }

  after(gl) {
    gl.disable(2960 /* gl.STENCIL_TEST */)
  }

}
