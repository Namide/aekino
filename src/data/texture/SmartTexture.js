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
import parse from 'parse-dds'

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
        
        this.setTempColor([255, 255, 255, 255])
    }
    
    setTempColor(color)
    {
        this.setImg(new Uint8Array(color), 1, 1)
    }
    
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
    addDDSURL(URL, size)
    {
        const imgData = {
            size,
            src: URL,
            img: null,
            isImage: false,
            priority: 1,
            isValid: () => true,
            init: null
        }
        
        imgData.init = gl =>
        {
            const dds = parse(imgData.img)
            
            // console.log(dds.format)  // 'dxt5' 
            // console.log(dds.shape)   // [ width, height ] 
            // console.log(dds.images)  // [ ... mipmap level data ... ]
            
            const image = dds.images[0]
            const arrBufferView = new Uint8Array(imgData.img, image.offset, image.length)
            
            const ext = (
              gl.getExtension('WEBGL_compressed_texture_s3tc') ||
              gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
              gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc')
            )
            gl.bindTexture(gl.TEXTURE_2D, this.pointer)
            
            gl.compressedTexImage2D(
                gl.TEXTURE_2D,
                0, // ? dds.images.length - 1,
                ext.COMPRESSED_RGBA_S3TC_DXT5_EXT,
                dds.shape[0],
                dds.shape[1],
                0,
                arrBufferView
            )

            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
            
            this.mipmap = false
            this.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            this.initParams(gl)
        }
        
        this.srcs.push(imgData)
    }
    
    addURL(URL, size = 0)
    {
        const imgData = {
            size,
            src: URL,
            img: null,
            priority: 0,
            isImage: true,
            isValid: () => true,
            init: null
        }
        
        imgData.init = gl =>
        {
            gl.bindTexture(gl.TEXTURE_2D, this.pointer)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

            gl.texImage2D(gl.TEXTURE_2D, 0, 6408 /* gl.RGBA */, this.format, gl.UNSIGNED_BYTE, imgData.img)
            // Texture.SETUP(gl, imgData.img)
            // Texture.SETUP(gl, imgData.img)
            // gl.bindTexture(gl.TEXTURE_2D, null)
            
            this.img = imgData.img
            
            
            // this.mipmap = false
            // this.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            // this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            this.initParams(gl)
        }
        
        this.srcs.push(imgData)
    }
    
    static START_LOAD(gl, srcs)
    {
        if (srcs.length > 0)
        {
            srcs.sort((a, b) => (a.size === b.size ? (a.size - b.size) : (a.priority - b.priority)))
            const srcsValid = srcs.filter(imgData => (imgData.size >= Texture.MAX_SIZE && imgData.isValid(gl)))
            
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
            console.warn('URL of your smart texture not found')
        }
    }
    
    static LOAD(data, callback)
    {
        if (data.isImage)
        {
            const img = new Image()
            img.onload = () =>
            {
                callback(data)
            }
            data.img = img

            // console.log('LOAD', data.src)
            img.src = data.src
        }
        else
        {
            const request = new XMLHttpRequest()
            request.responseType = 'arraybuffer'
            request.open('GET', data.src, true)
            request.onreadystatechange = event =>
            {
                if (request.readyState === XMLHttpRequest.DONE)
                {
                    if (request.status === 200)
                    {
                        data.img = request.response
                        callback(data)
                    }
                    else
                    {
                        console.error('fail to load image ', data.src, 'status:', request.status, 'statuc text:', request.statusText)
                    }
                }
            }
            request.send()
        }
    }
    
    init(gl, program)
    {
        const success = super.init(gl, program)     
        const texture = this.pointer
        
        /* const changeImg = imgData =>
        {
            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

            gl.texImage2D(gl.TEXTURE_2D, 0, imgData.internalformat, this.format, gl.UNSIGNED_BYTE, imgData.img)
            
            this.img = imgData.img
            Texture.SETUP(gl, imgData.img)
            // gl.bindTexture(gl.TEXTURE_2D, null)
        }*/
        
        SmartTexture.START_LOAD(gl, this.srcs)
        return success
    }
}