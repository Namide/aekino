import Mesh3D from './Mesh3D'


export default class Background3D extends Mesh3D {
  constructor(geom, program) {
    super(geom, program)

    this.depthTest = false
    this.order = -1
  }
}