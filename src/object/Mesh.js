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

import CallOptimizer from '../render/CallOptimizer'


export default class Mesh
{
    constructor(geom, program)
    {
        this.geom = geom
        this.program = program

        this.uniforms = []
        this.textures = []
        
        this.localCalls = []
        this.globalCalls = []
        
        this.order = 0
        
        this._isInitialized = false
    }
    
    addUniform(uniform)
    {
        this.uniforms.push(uniform)
    }
    
    addTexture(texture)
    {
        this.textures.push(texture)
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
    _setCalls(gl, globalUniforms)
    {
        const program = this.program
        
        for (const attribute of this.geom.attributes)
        {
            const location = program.getAttribLocation(gl, attribute)
            this.localCalls.push(attribute.draw.bind(attribute, gl, location))
        }
        
        for (const buffer of this.geom.buffers)
        {
            this.localCalls.push(buffer.draw.bind(buffer, gl))
        }
        
        for (const uniform of this.uniforms)
        {
            const location = program.getUniformLocation(gl, uniform)
            this.localCalls.push(uniform.draw.bind(uniform, gl, location))
        }
        
        for (const texture of this.textures)
        {
            const [location, index] = program.getTextureLocationIndex(gl, texture)
            console.log('///>', location, texture.label)
            this.localCalls.push(texture.draw.bind(texture, gl, location, index))
        }
        
        for (const uniform of globalUniforms)
        {
            const location = program.getUniformLocation(gl, uniform)
            this.globalCalls.push(uniform.draw.bind(uniform, gl, location))
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
    
    init(gl, globalUniforms)
    {
        const program = this.program
        let success = true

        // Use program
        if (!this.program.isInitialized())
            if (!this.program.init(gl))
                success = false
        else
            this.program.draw(gl)
        
        
        // Init all mesh data (textures, buffers, attributes, uniforms)
        if (!this._initData(gl))
            success = false
        
        
        // Store all calls (mesh data + global data)
        if (success && this.localCalls.length < 1)
            this._setCalls(gl, globalUniforms)
        
        
        this._isInitialized = success
        return success
    }
    
    draw(gl, customCalls = [])
    {
        const callOptimizer = CallOptimizer.getInstance(gl)

        // Use program, if ok call globals
        const program = this.program
        const optimizeProgram = callOptimizer.optimizeProgram(program)
        if (!optimizeProgram)
        {
            this.program.draw(gl)
            
            for(const callback of this.globalCalls)
                callback()
        }
        
        // Call local
        for(const callback of this.localCalls)
            callback()
        
        // Call local
        for(const callback of customCalls)
            callback()    
   
        // Draw mesh
        this.geom.display(gl)
    }
}
