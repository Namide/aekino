import Buffer from './Buffer'

/**
 * Data storage for the shader
 */
export default class Attribute extends Buffer {
  /**
   * @param {String} label    Name used in the shader 
   */
  constructor(label) {
    super()
    this.label = label
  }

  /**
   * @param {WebGLRenderingContext} gl    Current WebGL context
   * @param {GLuint} location             Index of the attribute
   */
  bind(gl, location) {
    super.bind(gl)
    gl.vertexAttribPointer(location, this.itemSize, this.itemType, false, 0, 0)
  }

  /**
   * @param {Attribute|null} attribute         New Attribute (optional)
   */
  clone(attribute = new Attribute(this.label)) {
    attribute.label = this.label
    super.clone(attribute)

    return attribute
  }
}