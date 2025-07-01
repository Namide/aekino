import Matrix4 from '../../math/Matrix4'
import Uniform from './Uniform'

export default class Camera3D extends Uniform {
  constructor(label) {
    super(label, 35676, Matrix4.create())

    this.fovy = 45
    this.near = 0.1
    this.far = 1000
    this._matrix = Matrix4.create()

    this.updated = true
    this.updateNum = 0

    this._ratio = 0
  }

  get data() {
    if (this.updated)
      this.update()

    return this._data
  }

  get matrix() {
    this.updated = true
    return this._matrix
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
    this._data.perspective(this.fovy * Math.PI / 180, this._ratio, 0.1, 100.0)
    this._data.multiply(this._matrix)
    this.updated = false
    this.updateNum++
  }
}