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

export default class Buffer
{
    constructor()
    {
        this.buffer = null
    }
    
    isInitialized()
    {
        return !!this.buffer
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
    setArray(data, type = 34962, usage = 35044)
    {
        this.arrayType = type
        this.data = data
        this.arrayUsage = usage
    }
    
    /**
     * https://gist.github.com/szimek/763999
     *
     * itemType
     *      gl.INT              5124   
     *      gl.UNSIGNED_INT     5125
     *      gl.FLOAT            5126  
     *      gl.FLOAT_VEC2       35664 
     *      gl.FLOAT_VEC3       35665 
     *      gl.FLOAT_VEC4       35666 
     *      gl.INT_VEC2         35667    
     *      gl.INT_VEC3         35668  
     *      gl.INT_VEC4         35669 
     *      gl.BOOL             35670   
     *      gl.BOOL_VEC2        35671 
     *      gl.BOOL_VEC3        35672 
     *      gl.BOOL_VEC4        35673   
     *      gl.FLOAT_MAT2       35674 
     *      gl.FLOAT_MAT3       35675 
     *      gl.FLOAT_MAT4       35676  
     *      gl.SAMPLER_2D       35678   
     *      gl.SAMPLER_CUBE     35680 
     */
    setItems(type = 5126, size = 3, num = null)
    {
        this.itemType = type
        this.itemSize = size
    }
    
    init(gl, program)
    {
        // Create buffer
        const buffer = gl.createBuffer()
        gl.bindBuffer(this.arrayType, buffer)
        gl.bufferData(this.arrayType, this.data, this.arrayUsage)
        
        
        this.buffer = buffer
        
        return true
    }
    
    draw(gl)
    {
        gl.bindBuffer(this.arrayType, this.buffer)
    }
}