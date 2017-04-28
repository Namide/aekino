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

export default class Mesh
{
    constructor(geom, program)
    {
        this.geom = geom
        this.program = program

        this.uniforms = []
        this.textures = []
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
        let success = true
        
        if (!this.program.isInitialized())
            success = false
        
        if (!this.geom.isInitialized())
            success = false      
        
        for (const texture of this.textures)
            if (!texture.isInitialized())
                success = false
        
        return success
    }
    
    init(gl, globalUniforms)
    {
        const program = this.program
        const allUniforms = [...this.uniforms, ...globalUniforms]
        let success = true

        if (!this.program.isInitialized())
            if (this.program.init(gl, this.geom.attributes, allUniforms, this.textures))
                success = false
            
        if (!this.geom.isInitialized())
            if (this.geom.init(gl, program))
                success = false
            
        for (const texture of this.textures)
            if (!texture.isInitialized())
                if (!texture.init(gl, program))
                    success = false
                    
        return success
    }
    
    draw(gl, globalUniforms)
    {
        const program = this.program
        
        this.program.draw(gl)
        this.geom.draw(gl, program)
            
        for(const uniform of this.uniforms)
            uniform.draw(gl, program)
        
        for(const uniform of globalUniforms)
            uniform.draw(gl, program)
        
        for (const texture of this.textures)
            texture.draw(gl, program)
            
        this.geom.display(gl, program)
    }
}
