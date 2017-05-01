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

import Texture from './Texture'

function isMultOf(val, mult)
{
    return Number.isInteger(val / mult)
}

export default class SmartTexture extends Texture
{
    constructor(label)
    {
        super(label)
        
        this.srcs = []
    }
    
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
    addDxt5URL({src, width, height, format, priority})
    {
        const byteLength = floor((width + 3) * 0.25) * floor((height + 3) * 0.25) * 16
        const level = isMultOf(width, 4) && isMultOf(height, 4) ? 0 : 1 
        
        // var formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
    }
    
    addURL(URL, size = 0)
    {
        const imgData = {
            size,
            src: URL,
            img: null,
            priority: 0,
            init: null
        }
        
        imgData.init = gl =>
        {
            gl.bindTexture(gl.TEXTURE_2D, this.pointer)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

            gl.texImage2D(gl.TEXTURE_2D, 0, 6408 /* gl.RGBA */, this.format, gl.UNSIGNED_BYTE, imgData.img)
            Texture.SETUP(gl, imgData.img)
            // gl.bindTexture(gl.TEXTURE_2D, null)
        }
        
        this.srcs.push(imgData)
    }
    
    /*load(URL, callback)
    {
        this.src = URL
        
        const img = new Image()
        img.onload = () =>
        {
            this.img = img            
            if (this._changeImg)
                this._changeImg(img)
        }
        img.src = URL
    }*/
    
    static START_LOAD(gl, srcs)
    {
        if (srcs.length > 0)
        {
            srcs.sort((a, b) => (a.size === b.size ? (a.size - b.size) : (a.priority - b.priority)))
            const srcsValid = srcs.filter(o => o.size >= Texture.MAX_SIZE)
            
            if (srcs.length > 1)
            {
                const first = srcs[0]
                const last = srcs[srcs.length - 1]
                
                SmartTexture.LOAD(first, () =>
                {
                    first.init(gl)
                    SmartTexture.LOAD(last, () =>
                    {
                        last.init(gl)
                    })
                })
            }
            else if (srcs.length > 0)
            {
                const imgData = srcs[0]
                SmartTexture.LOAD(imgData, () =>
                {
                    imgData.init(gl)
                })
            }
            else
            {
                console.warn('The GPU can\'nt load a texture with size > ', Texture.MAX_SIZE)
            }
        }
        else
        {
            console.warn('URL of your texture', this.label, 'not found: texture.addURL(URL, size = 0)')
        }
    }
    
    static LOAD(data, callback)
    {        
        const img = new Image()
        img.onload = () =>
        {
            callback(data)
        }
        data.img = img
        
        img.src = data.src
    }
    
    init(gl, program)
    {
        const success = super.init(gl, program)
        
        const texture = this.pointer
        
        const changeImg = newImg =>
        {
            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

            gl.texImage2D(gl.TEXTURE_2D, 0, newImg.internalformat, this.format, gl.UNSIGNED_BYTE, newImg.img)
            Texture.SETUP(gl, newImg.img)
            // gl.bindTexture(gl.TEXTURE_2D, null)
        }
           
        SmartTexture.START_LOAD(gl, this.srcs)
        return success
    }
}