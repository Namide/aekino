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


export default class Scene
{
    constructor(canvas, cam)
    {
        this.canvas = canvas
        this.init(canvas)
        this.meshs = []
        this.cam = cam
        this.uniforms = [cam]
        this.depthTest = true        
        this.sortCompare = (mesh1, mesh2) =>
        {
            return mesh1.program.id - mesh2.program.id
        }
        
        this.resize(canvas.width, canvas.height)
    }
    
    _addCamToMeshs()
    {
        const cam = this.cam
        this.uniforms.push(cam)
    }
    
    /*addCam(cam)
    {
        this.cam = cam
    }*/
    
    addMesh(mesh)
    {
        this.meshs.push(mesh)
        
        if (!mesh.isInitialized())
            mesh.init(this.gl, this.uniforms)
    }
    
    rmMesh(mesh)
    {
        const id = this.meshs.indexOf(mesh)
        if (id > -1)
            this.meshs.splice(id, 1)
    }
    
    sort()
    {
        this.meshs.sort(this.sortCompare)
    }
    
    resize(w, h)
    {
        /*const gl = this.gl
        gl.viewportWidth = w
        gl.viewportHeight = h*/
        this.width = w
        this.height = h
    }
    
    init(canvas)
    {
        let gl
        
        try
        {
            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
            // gl.viewportWidth = canvas.width
            // gl.viewportHeight = canvas.height
            // console.log(gl.viewportWidth)
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
    }
    
    set depthTest(depthTest)
    {
        const gl = this.gl
        
        if (!!depthTest)
            gl.enable(gl.DEPTH_TEST)
        else
            gl.disable(gl.DEPTH_TEST)
        
        this._depthTest = !!depthTest
    }
    
    get depthTest()
    {
        return this._depthTest
    }
    
    set bgColor([r, g, b, a = 1])
    {
        this.gl.clearColor(r, g, b, a)
        this._bgColor = [r, g, b, a]
    }
    
    get bgColor()
    {
        return this._bgColor
    }
    
    draw()
    {
        const gl = this.gl
        const callOptimizer = CallOptimizer.getInstance(gl)

        gl.viewport(0, 0, this.width, this.height)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        
        if (this.cam.updated)
            this.cam.update(this.width, this.height)
        
        for (const mesh of this.meshs)
        {
            if (mesh.isInitialized())
            {
                mesh.draw(gl, callOptimizer)
            }  
            else
            {
                mesh.init(gl, this.uniforms)
            }
        }
    }
}