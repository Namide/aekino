export default class FrameBuffer {
  constructor() {
    this.pointer = null
  }

  isInitialized() {
    return !!this.pointer
  }

  init(gl) {
    const frameBuffer = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer)

    this.pointer = frameBuffer

    return true
  }

  bind(gl) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.pointer)
  }

  free(gl) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
  }
}