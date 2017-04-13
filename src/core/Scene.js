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

export default class Scene
{
    constructor(canvas, cam)
    {
        this.canvas = canvas
        this.init(canvas)
        this.meshs = []
        this.cam = cam
        this.uniforms = [cam]
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
    
    init(canvas)
    {
        let gl
        
        try
        {
            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
            gl.viewportWidth = canvas.width
            gl.viewportHeight = canvas.height
        }
        catch(e)
        {
            console.error('Could not initialise WebGL:', e.message)
        }
        
        if (!gl)
        {
            console.error('Could not initialise WebGL')
        }

        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.enable(gl.DEPTH_TEST)

        this.gl = gl
    }
    
    draw()
    {
        const gl = this.gl

        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        
        for (const mesh of this.meshs)
            mesh.draw(gl, this.uniforms)        
    }
}