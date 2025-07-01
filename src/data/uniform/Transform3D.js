import Matrix4 from '../../math/Matrix4'
import Uniform from '../uniform/Uniform'


export default class Transform3D extends Uniform {
  constructor(label) {
    super(label, 35676 /* gl.FLOAT_MAT4 */, Matrix4.create())

    this.updateNum = 0
    this.updated = true
    this.local = Matrix4.create()

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
        Matrix4.copy(parent.global, data)

        Matrix4.multiply(data, this.local)
        this._parentUpdateNum = parent.updateNum
      }
      else {
        Matrix4.copy(this.local, data)
      }

      this.updateNum++
      this.updated = true
    }
  }

  clear() {
    Matrix4.identity(this.local)
    this.updateNum++
    this.updated = true
  }

  scale(vec3) {
    Matrix4.scale(this.local, vec3)
    this.updateNum++
    this.updated = true
  }

  translate(vec3) {
    Matrix4.translate(this.local, vec3)
    this.updateNum++
    this.updated = true
  }

  rotate(rad, vec3) {
    Matrix4.rotate(this.local, rad, vec3)
    this.updateNum++
    this.updated = true
  }

  rotateX(rad) {
    Matrix4.rotateX(this.local, rad)
    this.updateNum++
    this.updated = true
  }

  rotateY(rad) {
    Matrix4.rotateY(this.local, rad)
    this.updateNum++
    this.updated = true
  }

  rotateZ(rad) {
    Matrix4.rotateZ(this.local, rad)
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
