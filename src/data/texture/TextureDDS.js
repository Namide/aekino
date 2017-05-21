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

import SmartTexture from './SmartTexture'
import parse from 'parse-dds'

export default class SmartTexture extends SmartTexture
{
    constructor(label)
    {
        super(label)
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
}