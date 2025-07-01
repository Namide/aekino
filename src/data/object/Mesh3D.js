import Mesh from './Mesh'
import Transform3D from '../uniform/Transform3D'


export default class Mesh3D extends Mesh {
  constructor(geom, program) {
    super(geom, program)
    this.depthTest = true
    // this._initTransform3D()

    const transform = new Transform3D('uMVMatrix')
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