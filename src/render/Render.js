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
export default class Render
{
    constructor(canvas, options = {antialias: true, stencil: true, alpha: true, width: 640, height: 360})
    {
        this.width = options.width
        this.height = options.height
        this.screenRecorder = new ScreenRecorder(options.width, options.height, true, true)
        this.passEnabled = true

        this.scenes = []
        this.passList = []
        this.isEnable = false
        
        this._init(canvas, {antialias: options.antialias, stencil: options.stencil, alpha: options.alpha })
        this._initScreenRecorder(this.gl)
    }
    
    _init(canvas, options)
    {
        let gl
        
        try
        {
            gl = canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options)
        }
        catch(e)
        {
            console.error('Could not initialise WebGL:', e.message)
        }
        
        if (!gl)
        {
            console.error('Could not initialise WebGL')
        }


        this.gl = gl
        this.gl.viewport(0, 0, this.width, this.height)
    }

    _initScreenRecorder(gl)
    {
        this.screenRecorder.init(gl)
        if (!this.screenRecorder.depthTexture)
            for (const pass of this.passList)
                this._disableDepthInTexture(pass, gl)
    }
    
    isInitialized()
    {
        return this.screenRecorder.isInitialized()
    }

    addScene(scene)
    {
        scene.init(this.gl)
        this.scenes.push(scene)
    }
    
    resize(width, height)
    {
        this.width = width
        this.height = height

        this.gl.viewport(0, 0, this.width, this.height)

        this.screenRecorder.resize(width, height, this.gl)
        
        for (const pass of this.passList)
            pass.resize(width, height)
    }
    
    _disableDepthInTexture(pass, gl)
    {
        if (pass.inDepthTexture)
            pass.setDepthTexture(false, gl)
    }
        
    addPass(pass)
    {
        pass.init(this.gl, [])
        
        if (this.screenRecorder.isInitialized() && !this.screenRecorder.depthTexture)
            this._disableDepthInTexture(pass, this.gl)
        
        if (pass.uWidth)
            pass.uWidth.data = this.width

        if (pass.uHeight)
            pass.uHeight.data = this.height
        
            
        this.passList.push(pass)
        

        this.isEnable = true
    }
    
    removePass(pass)
    {
        const i = this.passList.indexOf(pass)
        
        if (i > -1)
            this.passList.splice(i, 1)
        
        this.isEnable = this.passList.length > 0
    }
    
    // http://stackoverflow.com/questions/29578535/webgl-binding-of-a-framebuffer-and-renderbuffer
    draw()
    {
        const gl = this.gl
        const passNumber = this.passList.length
        
        if (this.passEnabled && passNumber > 0 && this.scenes.length > 0)
        {
            this.screenRecorder.start(gl, true)
            this.scenes[0].draw(gl)
            this.screenRecorder.stop(gl)
            this.screenRecorder.pingpong()

            for (let i = 0; i < passNumber; i++)
            {
                const pass = this.passList[i]
                const last = i > (passNumber - 2)

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
        else if (this.scenes.length > 0)
        {
            this.scenes[0].draw(gl)
        }
    }
}