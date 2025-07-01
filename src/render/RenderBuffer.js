export default class RenderBuffer {
  constructor(width, height) {
    this.pointer = null
    this.width = width
    this.height = height
  }

  resize(width, height, gl = null) {
    this.width = width
    this.height = height

    if (gl) {
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.pointer)
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height)
    }
    else {
      this.updated = true
    }
  }

  isInitialized() {
    return !!this.pointer
  }

  init(gl) {
    const renderBuffer = gl.createRenderbuffer()
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer)
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height)

    this.pointer = renderBuffer
  }

  bind(gl) {
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer)

    if (this.updated) {
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height)
      this.updated = false
    }
  }
}