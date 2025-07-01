import Mesh from './Mesh'
import Transform2D from '../uniform/Transform2D'


export default class Mesh2D extends Mesh {
  constructor(geom, program) {
    super(geom, program)
    this.depthTest = false
    // this._initTransform2D()

    const transform = new Transform2D('uMVMatrix')
    this.transform = transform
    this.addUniform(transform)
  }

  get position() {
    return this.transform.getTranslation()
  }

  get rotation() {
    return this.transform.getRotation()
  }

  draw(gl, customCalls = []) {
    if (this.transform)
      this.transform.update()

    super.draw(gl, customCalls)
  }
}