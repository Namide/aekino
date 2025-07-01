export default class TextureContainer {
  constructor(label) {
    this.label = label
  }

  isInitialized() {
    return true
  }

  init(gl) {
    return true
  }

  setTexture(texture) {
    this.pointer = texture.pointer
    this.target = texture.target
  }

  bind(gl, location, index) {
    gl.uniform1i(location, index)
    gl.activeTexture(gl.TEXTURE0 + index)
    gl.bindTexture(this.target, this.pointer)
  }
}