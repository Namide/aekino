/**
 * Array storage for the shader
 */
export default class Buffer {
  constructor() {
    this.pointer = null
    this.gl = null

    this.arrayType = 34962 /* gl.ARRAY_BUFFER */
    this.data = null
    this.arrayUsage = 35044 /* gl.STATIC_DRAW */
  }

  /**
   * Check if the Buffer is initialized in the WebGL context
   */
  isInitialized() {
    return !!this.pointer
  }

  /**
   * Set the array data of the buffer
   * 
   * @param {ArrayBuffer} data    Typed array of data
   * @param {GLuint} type 
   *      gl.ARRAY_BUFFER         34962
   *      Buffer containing vertex attributes, such as vertex coordinates,
   *      texture coordinate data, or vertex color data.
   *
   *      gl.ELEMENT_ARRAY_BUFFER 34963
   *      Buffer used for element indices.
   * @param {GLuint} usage 
   *      gl.STATIC_DRAW          35044
   *      Contents of the buffer are likely to be used often and not change often.
   *      Contents are written to the buffer, but not read.
   *
   *      gl.DYNAMIC_DRAW         35048
   *      Contents of the buffer are likely to be used often and change often.
   *      Contents are written to the buffer, but not read.
   *      
   *      gl.STREAM_DRAW          35040
   *      Contents of the buffer are likely to not be used often.
   *      Contents are written to the buffer, but not read.
   */
  setArray(data, type = this.arrayType, usage = this.arrayUsage) {
    this.arrayType = type
    this.data = data
    this.arrayUsage = usage

    const gl = this.gl
    if (gl) {
      gl.bindBuffer(type, this.pointer)
      gl.bufferData(type, data, arrayUsage)
    }
  }

  /**
   * Change the data type of the buffer
   *
   * @param {GLuint} type     Array data type (https://gist.github.com/szimek/763999)
   *      gl.INT              5124   
   *      gl.UNSIGNED_INT     5125
   *      gl.FLOAT            5126  
   *      gl.FLOAT_VEC2       35664 
   *      gl.FLOAT_VEC3       35665 
   *      gl.FLOAT_VEC4       35666 
   *      gl.INT_VEC2         35667    
   *      gl.INT_VEC3         35668  
   *      gl.INT_VEC4         35669 
   *      gl.BOOL             35670   
   *      gl.BOOL_VEC2        35671 
   *      gl.BOOL_VEC3        35672 
   *      gl.BOOL_VEC4        35673   
   *      gl.FLOAT_MAT2       35674 
   *      gl.FLOAT_MAT3       35675 
   *      gl.FLOAT_MAT4       35676  
   *      gl.SAMPLER_2D       35678   
   *      gl.SAMPLER_CUBE     35680 
   * @param {Uint} size       Length of the array data
   */
  setItems(type = 5126, size = 3) {
    this.itemType = type
    this.itemSize = size
  }

  /**
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  init(gl) {
    const buffer = gl.createBuffer()
    gl.bindBuffer(this.arrayType, buffer)
    gl.bufferData(this.arrayType, this.data, this.arrayUsage)

    this.pointer = buffer
    this.gl = gl

    return true
  }

  /**
   * @param {WebGLRenderingContext} gl    Current WebGL context
   */
  bind(gl) {
    gl.bindBuffer(this.arrayType, this.pointer)
  }

  /**
   * @param {Buffer} buffer       New Buffer (optional)
   */
  clone(buffer = new Buffer()) {
    buffer.setArray(this.data, this.arrayType, this.arrayUsage)
    buffer.setItems(this.itemType, this.itemSize)

    return buffer
  }
}