/*
const vs = `      
    attribute vec3 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec4 vColor;

    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vColor = aVertexColor;
    }
`

const fs = `
    precision mediump float;

    varying vec4 vColor;

    void main(void) {
        gl_FragColor = vColor;
    }
`
*/

let _ID = 0

export default class Program {
  constructor(vertexShaderSrc, fragmentShaderSrc) {
    this.vertexShaderSrc = vertexShaderSrc
    this.fragmentShaderSrc = fragmentShaderSrc

    this.attribLocation = {}
    this.uniformLocation = {}
    this.textureLocation = {}
    this.textureIndex = {}
    this.textureNum = 0

    this.id = _ID++
  }

  isInitialized() {
    return !!this.pointer
  }

  init(gl) {
    this.vertexShader = this._createShader(gl, 35633 /* gl.VERTEX_SHADER */, this.vertexShaderSrc)
    this.fragmentShader = this._createShader(gl, 35632 /* gl.FRAGMENT_SHADER */, this.fragmentShaderSrc)

    const program = gl.createProgram()
    gl.attachShader(program, this.vertexShader)
    gl.attachShader(program, this.fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Shader initialization error')
      return false
    }

    gl.useProgram(program)

    this.pointer = program

    return true
  }

  getAttribLocation(gl, attribute) {
    const label = attribute.label
    if (!this.attribLocation.hasOwnProperty(label)) {
      const attribLocation = gl.getAttribLocation(this.pointer, label)
      gl.enableVertexAttribArray(attribLocation)
      this.attribLocation[label] = attribLocation
      return attribLocation
    }

    return this.attribLocation[label]
  }

  getUniformLocation(gl, uniform) {
    const label = uniform.label
    if (!this.uniformLocation.hasOwnProperty(label)) {
      const uniformLocation = gl.getUniformLocation(this.pointer, label)
      this.uniformLocation[label] = uniformLocation
      return uniformLocation
    }

    return this.uniformLocation[label]
  }

  getTextureLocationIndex(gl, texture) {
    const label = texture.label
    if (!this.textureLocation.hasOwnProperty(label) || !this.textureIndex.hasOwnProperty(label)) {
      const textureLocation = gl.getUniformLocation(this.pointer, label)
      this.textureLocation[label] = textureLocation
      this.textureIndex[label] = this.textureNum
      return [textureLocation, this.textureNum++]
    }

    return [this.textureLocation[label], this.textureIndex[label]]
  }

  bind(gl) {
    gl.useProgram(this.pointer)
  }

  _createShader(gl, type, src) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, src)
    gl.compileShader(shader)

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      return console.error('Une erreur est survenue au cours de la compilation du shader: ' + gl.getShaderInfoLog(shader))
    }

    return shader
  }
}