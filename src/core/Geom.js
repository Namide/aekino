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

import Attribute from './Attribute'

export default class Geom
{
    constructor()
    {
        this.attributes = []
    }
    
    isInitialized()
    {
        for (const attribute of this.attributes)
            if (!attribute.isInitialized())
                return false
        
        return true
    }
    
    addAttribute(label, vertices, dimension)
    {
        const attribute = new Attribute(label)
        attribute.setArray(new Float32Array(vertices), 34962 /* gl.ARRAY_BUFFER */)
        attribute.setItems(5126 /* gl.FLOAT */, dimension)
        
        this.attributes.push(attribute)
    }
    
    addIndices(indices)
    {
        const attribute = new Attribute()
        
        attribute.setArray(new Uint16Array(indices), 34963 /* gl.ELEMENT_ARRAY_BUFFER */)
        attribute.setItems(5125 /* gl.UNSIGNED_INT */, 1 /* dimension */)
        
        this.attributes.push(attribute)
    }
    
    init(gl, program)
    {
        for (const attribute of this.attributes)
            if (!attribute.isInitialized())
                attribute.init(gl, program)
    }
    
    draw(gl)
    {
        for(const attribute of this.attributes)
            attribute.draw(gl)
    }
    
    display(gl)
    {
        gl.drawArrays(gl.TRIANGLES, 0, this.attributes[0].numItems)
    }   
}