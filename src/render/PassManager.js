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

import FrameBuffer from './FrameBuffer'


export default class PassManager
{
    constructor(scene)
    {
        this.frameBuffer1 = new FrameBuffer(scene.width, scene.height)
        this.frameBuffer2 = new FrameBuffer(scene.width, scene.height)
        
        this.scene = scene
        this.passList = []
        this.isEnable = false
        
        this.init(scene.gl)
    }
    
    isInitialized()
    {
        return this.frameBuffer1.isInitialized() && this.frameBuffer2.isInitialized()
    }
    
    resize(width, height)
    {
        this.scene.resize(width, height)
        this.frameBuffer1.resize(width, height)
        this.frameBuffer2.resize(width, height)
    }
    
    init(gl)
    {
        this.frameBuffer1.init(gl)
        this.frameBuffer2.init(gl)

        return true
    }
    
    addPass(pass)
    {
        pass.addTexture(this.frameBuffer1.texture)
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
    
    draw()
    {
        const gl = this.scene.gl

        console.log('---')
        console.log('fb.bind')
        // this.frameBuffer1.bind(gl)
        // ? gl.uniform1f(flipYLocation, 1);

        this.frameBuffer1.bind(gl)
        gl.viewport(0, 0, this.scene.width, this.scene.height)



        console.log('scene.draw')
        this.scene.draw()
        
        for (const pass of this.passList)
        {
            pass.setInTexture(this.frameBuffer1.texture)


            console.log('pass.draw')
            pass.draw(gl)
            console.log('fb.draw')

            this.frameBuffer2.bind(gl)

        }
        
        console.log('fb.free')
        this.frameBuffer2.free(gl)
        console.log('---')
    }
}