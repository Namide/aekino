import Buffer from '../core/Buffer'
import Attribute from '../core/Attribute'

/**
 * A geometry content all buffers of a WebGL drawable object.
 * The vertices are mandatory!
 */
export default class Geom {
  constructor() {
    this.attributes = []
    this.buffers = []

    this.hasIndices = false
    this.numItems = 0
  }

  /**
   * Add all the vertices of the object
   * 
   * @param {String} label                Name used in the shader    
   * @param {Array of Number} vertices    Vertices of the geometry
   * @param {uint} dimension              Vertices dimension of the geometry (2 for 2D, 3 for 3D)
   */
  addVertices(label, vertices, dimension) {
    const attribute = new Attribute(label)
    attribute.setArray(new Float32Array(vertices), 34962 /* gl.ARRAY_BUFFER */)
    attribute.setItems(5126 /* gl.FLOAT */, dimension)

    this.attributes.push(attribute)

    if (this.numItems < 1)
      this.numItems = vertices.length / dimension
  }

  /**
   * Optionnal indices of the geometry
   * 
   * @param {Array of uint} indices       Indice list of the geometry
   */
  addIndices(indices) {
    const buffer = new Buffer()
    buffer.setArray(new Uint16Array(indices), 34963 /* gl.ELEMENT_ARRAY_BUFFER */)
    buffer.setItems(5125 /* gl.UNSIGNED_INT */, 1 /* dimension */)

    this.hasIndices = true
    this.buffers.push(buffer)
    this.numItems = indices.length
  }

  /**
   * Draw the geometry
   * 
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  display(gl) {
    if (this.hasIndices)
      gl.drawElements(gl.TRIANGLES, this.numItems, gl.UNSIGNED_SHORT, 0);
    else
      gl.drawArrays(gl.TRIANGLES, 0, this.numItems)
  }

  /**
   * Clone geometry and his attributes and buffers : they are all new.
   * 
   * @param {Geom} geom       (optionnal) Cloned current geometry
   */
  clone(geom = new Geom()) {
    geom.attributes = this.attributes.map(a => a.clone())
    geom.buffers = this.buffers.map(b => b.clone())

    geom.hasIndices = this.hasIndices
    geom.numItems = this.numItems

    return geom
  }
}