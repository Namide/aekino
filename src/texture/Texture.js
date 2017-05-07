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

import CallOptimizer from '../core/CallOptimizer'


export default class Texture
{
    constructor(label, img = new Uint8Array([255, 255, 255, 255]))
    {
        this.label = label
        this.mipmap = true
        
        
        this.pointer = null
        this.parameters = [
            // [9729 /* gl.LINEAR */, 9987 /* gl.LINEAR_MIPMAP_LINEAR */]
        ]
        
        this.img = img
        
        this.setFormat()
        this.setTarget()
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
        3553    gl.TEXTURE_2D           A two-dimensional texture.
        34067   gl.TEXTURE_CUBE_MAP     A cube-mapped texture.
    */
    setTarget(target = 3553)
    {
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
    setParam(label, value)
    {
        const i = this.parameters.find(p => p[0] === label)
        if (i > -1)
            this.parameters[i][1] = value
        else
            this.parameters.push([label, value])
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    static IS_POWER_OF_2(val)
    {
        return (val & (val - 1)) === 0
    }
    
    /*static IS_MULT_OF(val, mult)
    {
        return Number.isInteger(val / mult)
    }*/
    
    /*_setupFilterAndMipmap(gl, img)
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
    }*/
    
    static SET_DATA(gl)
    {
        Texture.MAX_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE)
        Texture.FORMAT = { }

        /*
        https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc
        */
        const formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
        for (let i = 0; i < formats.length; i++)
            Texture.FORMAT[formats[i]] = true

        Texture._DATA_INITIALIZED = true
    }
    
    setDefaultParams(gl)
    {
        if (this.mipmap)
        {
            // this.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        }
        else
        {
            this.setParam(gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            this.setParam(gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
            // this.setParam(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        }
    }
    
    initParams(gl)
    {
        if (this.mipmap)
        {
            const img = this.img
            if (img === null)
            {
                console.warn('You need an image to set the parameters:', this.label)
            }
            else if (Texture.IS_POWER_OF_2(img.width) && Texture.IS_POWER_OF_2(img.height))
            {
                gl.generateMipmap(gl.TEXTURE_2D)
            }
            else
            {
                this.mipmap = false
                console.warn('You need a power of 2 for the size of the mipmaped texture:', this.label)
            }
        }
        
        if (this.parameters.length < 1)
            this.setDefaultParams(gl)
        
        for (const [pname, param] of this.parameters)
            gl.texParameteri(this.target, pname, param)
    }
    
    init(gl)
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
        
        
        // Temporary texture (1 pixel)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        
        
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, this.img)

        
        /*const location = program.getTextureLocation(this.label)
        const index = program.getTextureIndex(this.label)
        gl.uniform1i(location, index)*/
        
        this.pointer = texture
        
        return true
    }
    
    draw(gl, location, index)
    {
        const callOptimizer = CallOptimizer.getInstance(gl)
        const optimizeTexture = callOptimizer.optimizeTexture(this)
        if (!optimizeTexture)
        {
            gl.uniform1i(location, index) // Chaque frame ou chaque init ?
            gl.activeTexture(gl.TEXTURE0 + index)
            gl.bindTexture(gl.TEXTURE_2D, this.pointer)
        }
        
        /*if (this === Texture.last)
            return false*/
        
        // const index = program.getTextureIndex(this.label)
            
        // gl.uniform1i(program.getTextureLocation(this.label), 0)
        
        /*Texture.last = this
        return true*/
    }
}