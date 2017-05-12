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

import ScreenRecorder from './ScreenRecorder'

// https://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/

export default class PassManager
{
    constructor(scene)
    {
        this.screenRecorder = new ScreenRecorder(scene.width, scene.height, true, true)
        // this.frameBuffer2 = new FrameBuffer(scene.width, scene.height)
        
        this.scene = scene
        this.passList = []
        this.isEnable = false
        
        this.init(scene.gl)
    }
    
    isInitialized()
    {
        return this.screenRecorder.isInitialized() // && this.frameBuffer2.isInitialized()
    }
    
    resize(width, height)
    {
        this.scene.resize(width, height)
        this.screenRecorder.resize(width, height)
        // this.frameBuffer2.resize(width, height)
    }
    
    init(gl)
    {
        this.screenRecorder.init(gl)
        // this.frameBuffer2.init(gl)

        return true
    }
    
    addPass(pass)
    {
        pass.init(this.scene.gl, [])

        this.passList.push(pass)

        this.isEnable = true
    }
    
    rmPass(pass)
    {
        const i = this.passList.indexOf(pass)
        
        if (i > -1)
            this.passList.splice(i, 1)
        
        this.isEnable = this.passList.length > 0
    }
    
    // http://stackoverflow.com/questions/29578535/webgl-binding-of-a-framebuffer-and-renderbuffer
    draw()
    {
        const gl = this.scene.gl
        
        this.screenRecorder.restartPingpong()
        
        this.screenRecorder.start(gl, true)
        this.scene.draw()
        this.screenRecorder.stop(gl)
        this.screenRecorder.pingpong()
        
        for (let i = 0; i < this.passList.length; i++)
        {
            const pass = this.passList[i]
            const last = i > (this.passList.length - 2)
            
            // console.log(this.screenRecorder._pingpong)
            
            if (!last)
                this.screenRecorder.start(gl, false)
            
            this.screenRecorder.pingpong()
            
            if (pass.inColorTexture)
                pass.inColorTexture.setTexture(this.screenRecorder.colorTexture)
            
                
            if (pass.inDepthTexture && this.screenRecorder.depthTexture)
                pass.inDepthTexture.setTexture(this.screenRecorder.depthTexture)
            
            pass.draw(gl)
            
            
            this.screenRecorder.stop(gl)
        }
    }
}