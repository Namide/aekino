import Matrix4 from '../../math/Matrix4'
import Uniform from './Uniform'

export default class Camera3D extends Uniform {
  constructor() {
    super('uPMatrix', 35676, Matrix4.create())

    this.fovy = 45
    this.near = 0.1
    this.far = 100

    const matrix = Matrix4.create()
    this._matrix = matrix

    this.updated = true
    this.updateNum = 0

    this._ratio = 0


    // Add functions
    this.clear = () => {
      Matrix4.identity(matrix)
      this.updated = true
    }
    this.translate = vec3 => {
      Matrix4.translate(matrix, vec3)
      this.updated = true
    }
    this.scale = vec3 => {
      Matrix4.scale(matrix, vec3)
      this.updated = true
    }
    this.rotate = (rad, vec3) => {
      Matrix4.rotate(matrix, rad, vec3)
      this.updated = true
    }
    this.rotateX = rad => {
      Matrix4.rotateX(matrix, rad)
      this.updated = true
    }
    this.rotateY = rad => {
      Matrix4.rotateY(matrix, rad)
      this.updated = true
    }
    this.rotateZ = rad => {
      Matrix4.rotateZ(matrix, rad)
      this.updated = true
    }
    this.lookAt = (eye, center, up) => {
      Matrix4.lookAt(matrix, eye, center, up)
      this.updated = true
    }
  }

  get data() {
    if (this.updated)
      this.update()

    return this._data
  }

  get ratio() {
    return this._ratio
  }

  set ratio(ratio) {
    this._ratio = ratio
    this.updated = true
  }

  resize(width, height) {
    this._ratio = width / height
    this.updated = true
  }

  update() {
    Matrix4.perspective(this._data, this.fovy * Math.PI / 180, this._ratio, this.near, this.far)
    Matrix4.multiply(this._data, this._matrix)

    this.updated = false
    this.updateNum++
  }
}