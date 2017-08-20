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

export default class Uniform
{
    /**
     * type
     *      gl.FLOAT_MAT4       35676
     */
    constructor(label, type, data, isArray = false)
    {
        this.label = label
        this.type = type
        this._data = data
        // this.location = null
        
        this._init(type, isArray)
        this.updated = true
    }

    get data()
    {
        return this._data
    }

    set data(data)
    {
        this._data = data
        this.updated = true
    }
    
    // Generate bind function
    _init(type, isArray)
    {
        switch(this.type)
        {
            case 35675: /* gl.FLOAT_MAT3 */
            {
                this.bind = (gl, location) =>
                {
                    gl.uniformMatrix3fv(location, false, this.data)
                }
                break
            }
            case 35676: // gl.FLOAT_MAT4
            {
                this.bind = (gl, location) =>
                {
                    gl.uniformMatrix4fv(location, false, this.data)
                }
                break
            }
            case 35664: // gl.FLOAT_VEC2
            {
                this.bind = (gl, location) =>
                {
                    gl.uniform2f(location, ...this.data)
                }
                
                break
            }
            case 35665: // gl.FLOAT_VEC3
            {
                this.bind = (gl, location) =>
                {
                    gl.uniform3f(location, ...this.data)
                }
                
                break
            }
            case 5124 : // gl.INT
                this.bind = (gl, location) =>
                {
                    gl.uniform1i(location, this.data)
                }
                break
                
            case -1 :
                this.bind = (gl, location) =>
                {
                    gl.uniform1fv(location, this.data)
                } 
                break
            
            default:
                console.error('Uniform type unknow: {label:', this.label,
                    ', type:', type, '}')
        }
    }
}
