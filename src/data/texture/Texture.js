import CallOptimizer from '../../render/CallOptimizer'

let _ID = 0

export default class Texture {
  constructor(label) {
    this.id = _ID++
    this.label = label
    this.mipmap = true

    this.img = null
    this.width = null
    this.height = null

    this.pointer = null
    this.parameters = [
      // [9729 /* gl.LINEAR */, 9987 /* gl.LINEAR_MIPMAP_LINEAR */]
    ]

    this.setType()
    this.setInternalFormat()
    this.setFormat()
    this.setTarget()
  }

  resize(width, height, gl = null) {
    this.width = width
    this.height = height

    if (gl) {
      gl.bindTexture(this.target, this.pointer)
      gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img)
    }
    else {
      this.updated = true
    }
  }

  setTempColor(color) {
    this.setImg(new Uint8Array(color), 1, 1)
  }

  setImg(img = new Uint8Array([255, 255, 255, 255]), width = 1, height = 1) {
    this.img = img
    this.width = width
    this.height = height
  }

  /*
      5121    gl.UNSIGNED_BYTE
      5123    gl.UNSIGNED_SHORT
  */
  setType(type = 5121) {
    this.type = type
  }

  /*
      6407    gl.RGB
      6408    gl.RGBA
      6402    gl.DEPTH_COMPONENT
  */
  setInternalFormat(format = 6408) {
    this.internalFormat = format
  }

  /*
      6407    gl.RGB
      6408    gl.RGBA
      6402    gl.DEPTH_COMPONENT
  */
  setFormat(format = 6408) {
    // this.internalformat = internalformat
    this.format = format
  }

  /*
      3553    gl.TEXTURE_2D           A two-dimensional texture.
      34067   gl.TEXTURE_CUBE_MAP     A cube-mapped texture.
  */
  setTarget(target = 3553) {
    this.target = target
  }

  /*
      target
          3553    gl.TEXTURE_2D           A two-dimensional texture.
          34067   gl.TEXTURE_CUBE_MAP     A cube-mapped texture.
  
      pname
          10240   gl.TEXTURE_MAG_FILTER	Texture magnification filter
                      - 9729 gl.LINEAR (default value),
                      - 9728 gl.NEAREST.
      
          10241   gl.TEXTURE_MIN_FILTER	Texture minification filter
                      - 9729 gl.LINEAR,
                      - 9728 gl.NEAREST,
                      - 9984 gl.NEAREST_MIPMAP_NEAREST,
                      - 9985 gl.LINEAR_MIPMAP_NEAREST,
                      - 9986 gl.NEAREST_MIPMAP_LINEAR (default value),
                      - 9987 gl.LINEAR_MIPMAP_LINEAR.
          
          10242   gl.TEXTURE_WRAP_S	    Wrapping function for texture coordinate s
                      - 10497 gl.REPEAT (default value),
                      - 33071 gl.CLAMP_TO_EDGE,
                      - 33648 gl.MIRRORED_REPEAT.
                      
          10243   gl.TEXTURE_WRAP_T	      Wrapping function for texture coordinate t
                      - 10497 gl.REPEAT (default value),
                      - 33071 gl.CLAMP_TO_EDGE,
                      - 33648 gl.MIRRORED_REPEAT.
      
      param
  */
  setParam(label, value) {
    const i = this.parameters.find(p => p[0] === label)

    if (i > -1)
      this.parameters[i][1] = value
    else
      this.parameters.push([label, value])
  }

  isInitialized() {
    return !!this.pointer
  }

  static IS_POWER_OF_2(val) {
    return (val & (val - 1)) === 0
  }

  static SET_DATA(gl) {
    Texture.MAX_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE)
    Texture.FORMAT = {}

    /*
    https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc
    */
    const formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
    for (let i = 0; i < formats.length; i++)
      Texture.FORMAT[formats[i]] = true

    Texture._DATA_INITIALIZED = true
  }

  setDefaultParams(gl) {
    if (this.mipmap) {
      // this.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
    }
    else {
      this.setParam(gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      this.setParam(gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      // this.setParam(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    }
  }

  initParams(gl) {
    if (this.mipmap) {
      const img = this.img
      if (img === null) {
        console.warn('You need an image to set the parameters of texture')
      }
      else if (Texture.IS_POWER_OF_2(img.width) && Texture.IS_POWER_OF_2(img.height)) {
        gl.generateMipmap(this.target)
      }
      else {
        this.mipmap = false
        console.warn('You need a power of 2 for the size of the mipmaped texture')
      }
    }

    if (this.parameters.length < 1)
      this.setDefaultParams(gl)

    for (const [pname, param] of this.parameters)
      gl.texParameteri(this.target, pname, param)
  }

  init(gl) {
    const texture = gl.createTexture()

    if (!Texture._DATA_INITIALIZED) {
      Texture.SET_DATA(gl)
    }


    /*
        gl.getParameter(gl.MAX_TEXTURE_SIZE)
        gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
        gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
    */


    gl.bindTexture(this.target, texture)
    gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img)
    this.initParams(gl)


    this._callOptimizer = CallOptimizer.getInstance(gl)
    this.pointer = texture

    return true
  }

  bind(gl, location, index) {
    if (!this._callOptimizer.optimizeTexture(this)) {
      gl.uniform1i(location, index)
      gl.activeTexture(gl.TEXTURE0 + index)
      gl.bindTexture(this.target, this.pointer)

      if (this.updated) {
        gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img)
        this.updated = false
      }
    }
  }

  free(gl) {
    gl.bindTexture(gl.TEXTURE_2D, null)
  }
}