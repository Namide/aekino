import Matrix3 from '../../math/Matrix3'
import Uniform from './Uniform'

export default class Camera2D extends Uniform {
  constructor() {
    super('uPMatrix', 35675, Matrix3.create())

    this._matrix = Matrix3.create()

    this.updated = true
    this.updateNum = 0

    this._minX = -1
    this._maxX = 1
    this._minY = -1
    this._maxY = 1


    // Add functions
    this.clear = () => {
      matrix.identity()
      this.updated = true
    }
    this.translate = vec2 => {
      matrix.translate(vec2)
      this.updated = true
    }
    this.scale = vec2 => {
      matrix.scale(vec2)
      this.updated = true
    }
    this.rotate = rad => {
      matrix.rotate(rad)
      this.updated = true
    }
  }

  get data() {
    if (this.updated)
      this.update()

    return this._data
  }

  setArea(minX, minY, maxX, maxY) {
    this._minX = minX
    this._minY = minY
    this._maxX = maxX
    this._maxY = maxY

    this.updated = true
  }

  update() {
    Matrix3.identity(this._data)

    const width = this._maxX - this._minX
    const height = this._maxY - this._minY

    Matrix3.scale(this._data, [1 / width, 1 / height])

    /*this._data.translate([
        this._minX - width * 0.5,
        this._minY - height * 0.5
    ])*/

    Matrix3.multiply(this._data, this._matrix)


    this.updated = false
    this.updateNum++
  }
}