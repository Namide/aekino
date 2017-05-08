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

import Texture from '../data/texture/Texture'

export default class FrameBuffer
{
    constructor(width, height)
    {
        const texture = new Texture(null)
        
        // gl.TEXTURE_WRAP_S , gl.CLAMP_TO_EDGE
        texture.setParam(10242, 33071)
        
        // gl.TEXTURE_WRAP_T , gl.CLAMP_TO_EDGE
        texture.setParam(10243, 33071)
        
        // gl.TEXTURE_MIN_FILTER , gl.NEAREST
        texture.setParam(10241, 9728)
        
        // gl.TEXTURE_MAG_FILTER , gl.NEAREST
        texture.setParam(10240, 9728)
        
        texture.setImg(null, width, height)
        
        
        this.texture = texture
        this.pointer = null
    }
    
    get width()
    {
        return this.texture.width
    }
    
    get height()
    {
        return this.texture.width
    }
    
    resize(width, height)
    {
        this.texture.setImg(null, width, height)
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    init(gl)
    {
        this.texture.init(gl)
        
        const frameBuffer = gl.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.pointer, 0)        
        
        this.pointer = frameBuffer
        
        return true
    }

    draw(gl)
    {
        this.texture.draw(gl)
    }
    
    bind(gl)
    {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.pointer)
    }
    
    free(gl)
    {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }
    
    /* draw(gl, location, index)
    {
        
    }*/
}