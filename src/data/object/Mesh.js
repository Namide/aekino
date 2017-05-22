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


export default class Mesh
{
    constructor(geom, program)
    {
        this.geom = geom
        this.program = program

        this.uniforms = []
        this.globalUniforms = []
        this.textures = []
        
        this.localCalls = []
        this.globalCalls = []
        
        this.order = 1
        this.visible = true
        this.depthTest = null
        
        this._isInitialized = false
    }
    
    addUniform(uniform)
    {
        this.uniforms.push(uniform)
    }
    
    rmUniform(uniform)
    {
        const i = this.uniforms.indexOf(uniform)
        if (i > -1)
            this.uniforms.splice(i, 1)
    }
    
    addGlobalUniform(uniform)
    {
        this.globalUniforms.push(uniform)
    }
    
    rmGlobalUniform(uniform)
    {
        const i = this.globalUniforms.indexOf(uniform)
        if (i > -1)
            this.globalUniforms.splice(i, 1)
    }
    
    addTexture(texture)
    {
        this.textures.push(texture)
    }
    
    rmTexture(texture)
    {
        const i = this.textures.indexOf(texture)
        if (i > -1)
            this.textures.splice(i, 1)
    }
    
    isInitialized()
    {
        let success = this._isInitialized
        
        if (success)
            return success
        
        
        if (!this.program.isInitialized())
            success = false
        
        for (const attribute of this.geom.attributes)
            if (!attribute.isInitialized())
                success = false
        
        for (const buffer of this.geom.buffers)
            if (!buffer.isInitialized())
                success = false
        
        for (const texture of this.textures)
            if (!texture.isInitialized())
                success = false
        
        
        return success
    }
    
    // GET LOCATIONS (AND INDEX) AND SAVE IT FOR CALLS
    _setCalls(gl)
    {
        const program = this.program
        
        for (const attribute of this.geom.attributes)
        {
            const location = program.getAttribLocation(gl, attribute)
            this.localCalls.push(attribute.bind.bind(attribute, gl, location))
        }
        
        for (const buffer of this.geom.buffers)
        {
            this.localCalls.push(buffer.bind.bind(buffer, gl))
        }
        
        for (const uniform of this.uniforms)
        {
            const location = program.getUniformLocation(gl, uniform)
            this.localCalls.push(uniform.bind.bind(uniform, gl, location))
        }
        
        for (const texture of this.textures)
        {
            const [location, index] = program.getTextureLocationIndex(gl, texture)
            this.localCalls.push(texture.bind.bind(texture, gl, location, index))
        }
        
        for (const uniform of this.globalUniforms)
        {
            const location = program.getUniformLocation(gl, uniform)
            this.globalCalls.push(uniform.bind.bind(uniform, gl, location))
        }
    }
    
    _initData(gl)
    {
        const program = this.program
        
        let success = true
        
        for (const attribute of this.geom.attributes)
            if (!attribute.isInitialized())
                if (!attribute.init(gl))
                    success = false
        
        for (const buffer of this.geom.buffers)
            if (!buffer.isInitialized())
                if (!buffer.init(gl))
                    success = false
        
        for (const texture of this.textures)
            if (!texture.isInitialized())
                if (!texture.init(gl))
                    success = false
        
        return success
    }
    
    dispose()
    {
        this._isInitialized = false
        this.localCalls.length = 0
    }
    
    init(gl)
    {
        const program = this.program
        let success = true

        // Use program
        if (!this.program.isInitialized())
        {
            if (!this.program.init(gl))
                success = false
        }
        else
        {
            this.program.bind(gl)
        }
        
        
        // Init all mesh data (textures, buffers, attributes, uniforms)
        if (!this._initData(gl))
            success = false
        
        
        // Store all calls (mesh data + global data)
        if (success && this.localCalls.length < 1)
            this._setCalls(gl)
                

        this._callOptimizer = CallOptimizer.getInstance(gl)
        

        this._isInitialized = success

        return success
    }
    
    draw(gl, customCalls = [])
    {
        if (this.depthTest !== null && !this._callOptimizer.optimizeDepthTest(this.depthTest))
        {
            if (this.depthTest)
                gl.enable(gl.DEPTH_TEST)
            else
                gl.disable(gl.DEPTH_TEST)
        }

        // Use program, if ok call globals
        const program = this.program
        if (!this._callOptimizer.optimizeProgram(program))
        {
            this.program.bind(gl)
            
            for(const callback of this.globalCalls)
                callback()
        }
        
        // Call local
        for(const callback of this.localCalls)
            callback()
        
        // Call custom
        for(const callback of customCalls)
            callback()    
   
        // Draw mesh
        this.geom.display(gl)
    }
}
