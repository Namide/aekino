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

import Texture from '../texture/Texture'


class PassManager
{
    constructor(width, height)
    {
        this.width = width
        this.height = height
        
        const t1 = new Texture('pass1')
        const t2 = new Texture('pass2')
        
        this.textures = [t1, t2]
        this.pointer = null
    }
    
    isInitialized()
    {
        return this.textures[0].isInitialized() && this.textures[1].isInitialized()
    }
    
    init(gl)
    {
        const fb = gl.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb)
        fb.width = this.width
        fb.height = this.height
        this.pointer = fb
        
        const [t1, t2] = this.textures
        if (t1.init() && t2.init())
            return true
        
        return false
    }
    
    add(pass)
    {
        
    }
}