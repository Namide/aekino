/* 
 * The MIT License
 *
 * Copyright 2017 Damien Doussaud (namide.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

export default class Texture
{
    constructor(label)
    {
        this.label = label
        this.color = [255, 255, 255, 255]
        
        
        this.pointer = null
        this.parameters = {
            9729: 9987
        }
        
        this.setFormat()
    }
    
    /*
        6407    gl.RGB
        6408    gl.RGBA
    */
    setFormat(/*internalformat = 6408,*/ format = 6408)
    {
        // this.internalformat = internalformat
        this.format = format
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
    setParameters(target, pName, param)
    {
        
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    static IS_POWER_OF_2(val)
    {
        return (val & (val - 1)) === 0
    }
    
    static IS_MULT_OF(val, mult)
    {
        return Number.isInteger(val / mult)
    }
    
    _setupFilterAndMipmap(gl, img)
    {
        if (Texture.IS_POWER_OF_2(img.width) && Texture.IS_POWER_OF_2(img.height))
        {
            gl.generateMipmap(gl.TEXTURE_2D)
            // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
            // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        }
    }
    
    static SET_DATA(gl)
    {
        Texture.MAX_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE)
        Texture.FORMAT = { }

        /*
        https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc
        */
        console.log(gl.COMPRESSED_TEXTURE_FORMATS)
        const formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
        for (let i = 0; i < formats.length; i++)
        {
            Texture.FORMAT[formats[i]] = true
            console.log(formats[i])
        }

        Texture._DATA_INITIALIZED = true
    }
        
    init(gl, program)
    {
        const texture = gl.createTexture()
        
        if (!Texture._DATA_INITIALIZED)
        {
            Texture.SET_DATA(gl)
        }
            
        
        /*
        gl.getParameter(gl.MAX_TEXTURE_SIZE)
        gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
        gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
        */
        
        
        // Temporary ptexture (1 pixel)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE,
          new Uint8Array(this.color))

        
        const location = program.getTextureLocation(this.label)
        const index = program.getTextureIndex(this.label)
        gl.uniform1i(location, index)
        
        this.pointer = texture
        
        
        
        return true
    }
    
    draw(gl, program)
    {
        const index = program.getTextureIndex(this.label)
        
        gl.activeTexture(gl.TEXTURE0 + index)
        gl.bindTexture(gl.TEXTURE_2D, this.pointer)
        // gl.uniform1i(program.getTextureLocation(this.label), 0)
    }
}