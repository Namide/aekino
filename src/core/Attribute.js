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

export default class Attribute
{
    constructor(label)
    {
        this.label = label
        this.buffer = null
        this.location = null
    }
    
    isInitialized()
    {
        return !!this.location
    }
    
    /**
     * type
     *      gl.ARRAY_BUFFER         34962
     *      Buffer containing vertex attributes, such as vertex coordinates,
     *      texture coordinate data, or vertex color data.
     *
     *      gl.ELEMENT_ARRAY_BUFFER 34963
     *      Buffer used for element indices.
     *
     * usage
     *      gl.STATIC_DRAW          35044
     *      Contents of the buffer are likely to be used often and not change often.
     *      Contents are written to the buffer, but not read.
     *
     *      gl.DYNAMIC_DRAW         35048
     *      Contents of the buffer are likely to be used often and change often.
     *      Contents are written to the buffer, but not read.
     *      
     *      gl.STREAM_DRAW          35040
     *      Contents of the buffer are likely to not be used often.
     *      Contents are written to the buffer, but not read.
     */
    setArray(vertices, type = 34962, indices = null, usage = 35044)
    {
        this.arrayType = type
        this.vertices = vertices
        this.indices = indices
        this.arrayUsage = usage
    }
    
    /**
     * itemType
     *      gl.FLOAT          5126
     */
    setItems(type = 5126, size = 3, num = null)
    {
        this.itemType = type
        this.itemSize = size
        this.numItems = num
    }
    
    init(gl, program)
    {
        this.numItems = this.numItems || (this.vertices.length / this.itemSize)
        
        
        // Create buffer
        const buffer = gl.createBuffer()
        gl.bindBuffer(this.arrayType, buffer)
        gl.bufferData(this.arrayType, this.vertices, this.arrayUsage)
        
        
        
        this.buffer = buffer
        this.location = program.attributes[this.label]
    }
    
    draw(gl)
    {
        gl.bindBuffer(this.arrayType, this.buffer)
        gl.vertexAttribPointer(this.location, this.itemSize, this.itemType, false, 0, 0)
        // gl.vertexAttribPointer(this.vertexAttribute, this.itemSize, this.itemType, false, 0, 0)
        
    }
    

}