import Matrix3 from '../../math/Matrix3'
import Uniform from '../uniform/Uniform'


export default class Transform2D extends Uniform {
  constructor(label) {
    super(label, 35675 /* gl.FLOAT_MAT3 */, Matrix3.create())

    this.updateNum = 0
    this.updated = true
    this.local = Matrix3.create()

    this.parent = null
  }

  get global() {
    this.update()
    return this._data
  }

  update() {
    const parent = this.parent
    const hasParent = this.parent !== null

    if (this.updated || (hasParent && this._parentUpdateNum !== parent.updateNum)) {
      const data = this._data

      if (hasParent) {
        Matrix3.copy(parent.global, data)
        Matrix3.multiply(data, this.local)
        this._parentUpdateNum = parent.updateNum
      }
      else {
        Matrix3.copy(this.local, data)
      }

      this.updateNum++
      this.updated = true
    }
  }

  clear() {
    Matrix3.identity(this.local)
    this.updateNum++
    this.updated = true
  }

  scale(vec2) {
    Matrix3.scale(this.local, vec2)
    this.updateNum++
    this.updated = true
  }

  translate(vec2) {
    Matrix3.translate(this.local, vec2)
    this.updateNum++
    this.updated = true
  }

  rotate(rad) {
    Matrix3.rotate(this.local, rad)
    this.updateNum++
    this.updated = true
  }

  attach(parent) {
    this.parent = parent
    this._parentUpdateNum = parent.updateNum
    this.updateNum++
    this.updated = true
  }

  detach() {
    this.parent = null
    this.updateNum++
    this.updated = true
  }
}
