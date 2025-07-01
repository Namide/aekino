import Mesh from '../../data/object/Mesh'
import Geom from '../../data/geom/Geom'
import Uniform from '../../data/uniform/Uniform'
import TextureContainer from '../../data/texture/TextureContainer'

// https://www.wanadev.fr/34-trucs-et-astuces-webgl/
export default class Pass extends Mesh {
  constructor(program, vertexLabel = 'aVertexPosition', textureLabel = 'uSample') {
    const geom = new Geom()
    const quadVertices = [
      1.0, 1.0,
      -1.0, 1.0,
      -1.0, -1.0,
      -1.0, -1.0,
      1.0, -1.0,
      1.0, 1.0
    ]
    geom.addVertices(vertexLabel, quadVertices, 2)

    super(geom, program)
  }

  resize(width, height) {
    if (this.uWidth)
      this.uWidth.data = width

    if (this.uHeight)
      this.uHeight.data = height
  }

  useUWidth(label, width) {
    const uniform = new Uniform(label, 5124 /* gl.INT */, width)
    this.uWidth = uniform
    this.addUniform(uniform)
  }

  useUHeight(label, height) {
    const uniform = new Uniform(label, 5124 /* gl.INT */, height)
    this.uHeight = uniform
    this.addUniform(uniform)
  }

  useColorTexture(label) {
    const texture = new TextureContainer(label)
    this.inColorTexture = texture
    this.addTexture(texture)
  }

  useDepthTexture(labelTexture, labelEnable) {
    const texture = new TextureContainer(labelTexture)
    this.inDepthTexture = texture
    this.addTexture(texture)

    const detpthTextureEnable = new Uniform(labelEnable, 5124 /* gl.INT */, 1)
    this._inDetpthEnableUniform = detpthTextureEnable
    this.addUniform(detpthTextureEnable)
  }

  /**
   * Enable or disable depth texture
   */
  setDepthTexture(enable, gl) {
    this.removeTexture(this.inDepthTexture)

    if (enable)
      this.addTexture(this.inDepthTexture)

    this._inDetpthEnableUniform.data = enable ? 1 : 0

    const globalUniforms = this.globalUniforms
    this.dispose()
    this.init(gl, globalUniforms)
  }
}