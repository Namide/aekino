export default class Uniform {
  /**
   * type
   *      gl.FLOAT_MAT4       35676
   */
  constructor(label, type, data, isArray = false) {
    this.label = label
    this.type = type
    this._data = data
    // this.location = null

    this._init(type, isArray)
    this.updated = true
  }

  get data() {
    return this._data
  }

  set data(data) {
    this._data = data
    this.updated = true
  }

  // Generate bind function
  _init(type, isArray) {
    switch (this.type) {
      case 5124: // gl.INT
        {
          this.bind = (gl, location) => {
            gl.uniform1i(location, this.data)
          }
          break
        }
      case 5126: /* gl.FLOAT */
        {
          this.bind = (gl, location) => {
            gl.uniform1f(location, false, this.data)
          }
          break
        }
      case 35675: /* gl.FLOAT_MAT3 */
        {
          this.bind = (gl, location) => {
            gl.uniformMatrix3fv(location, false, this.data)
          }
          break
        }
      case 35676: // gl.FLOAT_MAT4
        {
          this.bind = (gl, location) => {
            gl.uniformMatrix4fv(location, false, this.data)
          }
          break
        }
      case 35664: // gl.FLOAT_VEC2
        {
          this.bind = (gl, location) => {
            gl.uniform2f(location, ...this.data)
          }

          break
        }
      case 35665: // gl.FLOAT_VEC3
        {
          this.bind = (gl, location) => {
            gl.uniform3f(location, ...this.data)
          }

          break
        }
      case -1:
        this.bind = (gl, location) => {
          gl.uniform1fv(location, this.data)
        }
        break

      default:
        console.error('Uniform type unknow: {label:', this.label,
          ', type:', type, '}')
    }
  }
}
