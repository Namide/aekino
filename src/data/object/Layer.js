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

import CallOptimizer from '../../render/CallOptimizer'

/**
 * With a layer you can:
 * - Group mesh : usefull to group transparent mesh and sort it
 * - Use the same mask for multiple mesh
 */
export default class Layer
{
    constructor()
    {
        this.meshs = []
                
        this.order = 0
        this.visible = true
        // this.depthTest = null
        this.mask = null
        
        this._isInitialized = false

        this.sortCompare = (mesh1, mesh2) =>
        {
            if (mesh1.order !== mesh2.order)
                return mesh1.order - mesh2.order
            else if (mesh1.program && mesh2.program && mesh1.program !== mesh2.program)
                return  mesh1.program.id - mesh2.program.id
            else if (mesh1.textures && mesh2.textures && mesh1.textures.length > 0 && mesh1.textures.length > 0)
                return  mesh1.textures[0].id - mesh2.textures[1].id

            return 0
        }
    }

    /**
     * @param {Mask} mask 
     */
    setMask(mask)
    {
        this.mask = mask
    }

    /**
     * @param {Mesh} mesh 
     */
    addMesh(mesh)
    {
        this.meshs.push(mesh)
    }

    /**
     * @param {Mesh} mesh 
     */
    removeMesh(mesh)
    {
        const id = this.meshs.indexOf(mesh)
        if (id > -1)
            this.meshs.splice(id, 1)
    }

    sort()
    {
        this.meshs.sort(this.sortCompare)
    }
    
    /**
     * Check if meshes and mask are initialized in the rendering context
     */
    isInitialized()
    {
        if (this.mask !== null)
            if (!this.mask.isInitialized())
                return false

        for (const mesh of this.meshs)
            if (!mesh.isInitialized())
                return false
        
        return true
    }
    
    dispose()
    {
        for (const mesh of this.meshs)
            mesh.dispose()

        return true
    }

    /**
     * @param {WebGLRenderingContext} gl    Current WebGL context
     */
    init(gl)
    {
        let success = true

        if (this.mask !== null)
            this.mask.init(gl)

        for (const mesh of this.meshs)
            if (!mesh.init(gl))
                success = false

        this._callOptimizer = CallOptimizer.getInstance(gl)

        return success
    }
    /**
     * Draw meshes with mask in the current rendering context
     * 
     * @param {WebGLRenderingContext} gl        Current WebGL context
     * @param {Array of Function} customCalls   Custom functions called during all meshes render
     */
    draw(gl, customCalls = [])
    {
        if (this.mask)
            this.mask.before(gl)

        /*if (this.depthTest !== null && !this._callOptimizer.optimizeDepthTest(this.depthTest))
        {
            if (this.depthTest)
                gl.enable(gl.DEPTH_TEST)
            else
                gl.disable(gl.DEPTH_TEST)
        }*/

        for (const mesh of this.meshs)
            mesh.draw(gl, customCalls)


        if (this.mask)
            this.mask.after(gl)
    }
}
