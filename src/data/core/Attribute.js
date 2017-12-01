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

import Buffer from './Buffer'

/**
 * Data storage for the shader
 */
export default class Attribute extends Buffer
{
    /**
     * @param {String} label    Name used in the shader 
     */
    constructor(label)
    {
        super()
        this.label = label
    }
    
    /**
     * @param {WebGLRenderingContext} gl    Current WebGL context
     * @param {GLuint} location             Index of the attribute
     */
    bind(gl, location)
    {
        super.bind(gl)
        gl.vertexAttribPointer(location, this.itemSize, this.itemType, false, 0, 0)
    }

    /**
     * @param {Attribute|null} attribute         New Attribute (optional)
     */
    clone(attribute = new Attribute(this.label))
    {
        attribute.label = this.label
        super.clone(attribute)

        return attribute
    }
}