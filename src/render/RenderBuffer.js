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

export default class RenderBuffer
{
    constructor(width, height)
    {
        this.pointer = null
        this.width = width
        this.height = height
    }
    
    resize(width, height)
    {
        this.width = width
        this.height = height
        
        this.sizeUpdated = true
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    init(gl)
    {
        const renderBuffer = gl.createRenderbuffer()
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height)
        
        this.pointer = renderBuffer
    }
    
    bind(gl)
    {
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer)
        
        if (this.sizeUpdated)
        {
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height)
            this.sizeUpdated = false
        }
    }
    
    /* draw(gl, location, index)
    {
        
    }*/
}