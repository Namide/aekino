/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

class Uniform
{
    /**
     * type
     *      gl.FLOAT_MAT4       35676
     */
    constructor(label, type, data)
    {
        this.label = label
        this.type = type
        this.data = data
        // this.location = null
    }
    
    draw(gl, location)
    {
        switch(this.type)
        {
            case 35676: // gl.FLOAT_MAT4
            {
                // const location = program.getUniformLocation(this.label)
                gl.uniformMatrix4fv(location, false, this.data)
                break
            }
            case 35665: // gl.FLOAT_VEC3
            {
                // const location = program.getUniformLocation(this.label)
                gl.uniform3f(location, ...this.data)
                break
            } 
            default:
                console.error('Uniform type unknow: {label:', this.label,
                    ', type:', this.type, '}')
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Uniform;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Buffer__ = __webpack_require__(2);
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



class Attribute extends __WEBPACK_IMPORTED_MODULE_0__Buffer__["a" /* default */]
{
    constructor(label)
    {
        super()
        this.label = label
    }
    
    draw(gl, location)
    {
        super.draw(gl)
        // const location = program.getAttribLocation(this.label)
        gl.vertexAttribPointer(location, this.itemSize, this.itemType, false, 0, 0)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Attribute;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

class Buffer
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
    
    init(gl)
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Buffer;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const EPSILON = 0.000001

class Matrix4x4 extends Float32Array
{
    constructor()
    {
        super(16)

        this[0] = 1
        this[5] = 1
        this[10] = 1
        this[15] = 1
    }

    clone()
    {
        const clone = new Matrix4x4()
        clone.set(this)

        return clone
    }

    copy(to)
    {
        to.set(this)

        return this
    }

    identity()
    {
        this[0] = 1
        this[1] = 0
        this[2] = 0
        this[3] = 0
        this[4] = 0
        this[5] = 1
        this[6] = 0
        this[7] = 0
        this[8] = 0
        this[9] = 0
        this[10] = 1
        this[11] = 0
        this[12] = 0
        this[13] = 0
        this[14] = 0
        this[15] = 1

        return this
    }

    add(mat4)
    {
        this[0] += mat4[0]
        this[1] += mat4[1]
        this[2] += mat4[2]
        this[3] += mat4[3]
        this[4] += mat4[4]
        this[5] += mat4[5]
        this[6] += mat4[6]
        this[7] += mat4[7]
        this[8] += mat4[8]
        this[9] += mat4[9]
        this[10] += mat4[10]
        this[11] += mat4[11]
        this[12] += mat4[12]
        this[13] += mat4[13]
        this[14] += mat4[14]
        this[15] += mat4[15]

        return this
    }

    subtract(mat4)
    {
        this[0] -= mat4[0]
        this[1] -= mat4[1]
        this[2] -= mat4[2]
        this[3] -= mat4[3]
        this[4] -= mat4[4]
        this[5] -= mat4[5]
        this[6] -= mat4[6]
        this[7] -= mat4[7]
        this[8] -= mat4[8]
        this[9] -= mat4[9]
        this[10] -= mat4[10]
        this[11] -= mat4[11]
        this[12] -= mat4[12]
        this[13] -= mat4[13]
        this[14] -= mat4[14]
        this[15] -= mat4[15]

        return this
    }

    multiplyScalar(mat4)
    {
        this[0] *= mat4
        this[1] *= mat4
        this[2] *= mat4
        this[3] *= mat4
        this[4] *= mat4
        this[5] *= mat4
        this[6] *= mat4
        this[7] *= mat4
        this[8] *= mat4
        this[9] *= mat4
        this[10] *= mat4
        this[11] *= mat4
        this[12] *= mat4
        this[13] *= mat4
        this[14] *= mat4
        this[15] *= mat4

        return this
    }

    multiplyScalarAndAdd(mat4, scale)
    {
        this[0] += mat4[0] * scale
        this[1] += mat4[1] * scale
        this[2] += mat4[2] * scale
        this[3] += mat4[3] * scale
        this[4] += mat4[4] * scale
        this[5] += mat4[5] * scale
        this[6] += mat4[6] * scale
        this[7] += mat4[7] * scale
        this[8] += mat4[8] * scale
        this[9] += mat4[9] * scale
        this[10] += mat4[10] * scale
        this[11] += mat4[11] * scale
        this[12] += mat4[12] * scale
        this[13] += mat4[13] * scale
        this[14] += mat4[14] * scale
        this[15] += mat4[15] * scale

        return this
    }

    exactEquals(mat4)
    {
        return this[0] === mat4[0] && this[1] === mat4[1] && this[2] === mat4[2] && this[3] === mat4[3] && this[4] === mat4[4] && this[5] === mat4[5] && this[6] === mat4[6] && this[7] === mat4[7] && this[8] === mat4[8] && this[9] === mat4[9] && this[10] === mat4[10] && this[11] === mat4[11] && this[12] === mat4[12] && this[13] === mat4[13] && this[14] === mat4[14] && this[15] === mat4[15]
    }

    equals(mat4)
    {
        const [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15] = this
        const [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15] = mat4

        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15)))
    }

    transpose(mat4)
    {
        if (mat4 === this)
        {
            const m1 = mat4[1]
            const m2 = mat4[2]
            const m3 = mat4[3]
            const m12 = mat4[6]
            const m13 = mat4[7]
            const m23 = mat4[11]

            this[1] = mat4[4]
            this[2] = mat4[8]
            this[3] = mat4[12]
            this[4] = m1
            this[6] = mat4[9]
            this[7] = mat4[13]
            this[8] = m2
            this[9] = m12
            this[11] = mat4[14]
            this[12] = m3
            this[13] = m13
            this[14] = m23
        }
        else
        {
            this[0] = mat4[0]
            this[1] = mat4[4]
            this[2] = mat4[8]
            this[3] = mat4[12]
            this[4] = mat4[1]
            this[5] = mat4[5]
            this[6] = mat4[9]
            this[7] = mat4[13]
            this[8] = mat4[2]
            this[9] = mat4[6]
            this[10] = mat4[10]
            this[11] = mat4[14]
            this[12] = mat4[3]
            this[13] = mat4[7]
            this[14] = mat4[11]
            this[15] = mat4[15]
        }

        return this
    }

    invert(mat4)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = this

        const b00 = a00 * a11 - a01 * a10
        const b01 = a00 * a12 - a02 * a10
        const b02 = a00 * a13 - a03 * a10
        const b03 = a01 * a12 - a02 * a11
        const b04 = a01 * a13 - a03 * a11
        const b05 = a02 * a13 - a03 * a12
        const b06 = a20 * a31 - a21 * a30
        const b07 = a20 * a32 - a22 * a30
        const b08 = a20 * a33 - a23 * a30
        const b09 = a21 * a32 - a22 * a31
        const b10 = a21 * a33 - a23 * a31
        const b11 = a22 * a33 - a23 * a32

        // Calculate the determinant
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06

        if (!det)
        {
            return this
        }

        det = 1.0 / det

        this[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det
        this[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det
        this[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det
        this[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det
        this[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det
        this[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det
        this[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det
        this[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det
        this[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det
        this[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det
        this[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det
        this[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det
        this[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det
        this[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det
        this[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det
        this[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det

        return this
    }

    adjoint(mat4)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = this

        this[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22))
        this[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22))
        this[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12))
        this[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12))
        this[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22))
        this[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22))
        this[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12))
        this[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12))
        this[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21))
        this[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21))
        this[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11))
        this[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11))
        this[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21))
        this[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21))
        this[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11))
        this[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11))

        return this
    }

    determinant()
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = this

        const b00 = a00 * a11 - a01 * a10
        const b01 = a00 * a12 - a02 * a10
        const b02 = a00 * a13 - a03 * a10
        const b03 = a01 * a12 - a02 * a11
        const b04 = a01 * a13 - a03 * a11
        const b05 = a02 * a13 - a03 * a12
        const b06 = a20 * a31 - a21 * a30
        const b07 = a20 * a32 - a22 * a30
        const b08 = a20 * a33 - a23 * a30
        const b09 = a21 * a32 - a22 * a31
        const b10 = a21 * a33 - a23 * a31
        const b11 = a22 * a33 - a23 * a32

        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06
    }

    multiply(mat4)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = this

        // Cache only the current line of the second matrix
        let [b0, b1, b2, b3] = mat4
        this[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4[4]
        b1 = mat4[5]
        b2 = mat4[6]
        b3 = mat4[7]

        this[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4[8]
        b1 = mat4[9]
        b2 = mat4[10]
        b3 = mat4[11]
        this[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4[12]
        b1 = mat4[13]
        b2 = mat4[14]
        b3 = mat4[15]
        this[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        return this
    }

    translate(vec3)
    {
        const [x, y, z] = vec3

        this[12] = this[0] * x + this[4] * y + this[8] * z + this[12]
        this[13] = this[1] * x + this[5] * y + this[9] * z + this[13]
        this[14] = this[2] * x + this[6] * y + this[10] * z + this[14]
        this[15] = this[3] * x + this[7] * y + this[11] * z + this[15]

        return this
    }

    scale(vec3)
    {
        const [x, y, z] = vec3

        this[0] *= x
        this[1] *= x
        this[2] *= x
        this[3] *= x
        this[4] *= y
        this[5] *= y
        this[6] *= y
        this[7] *= y
        this[8] *= z
        this[9] *= z
        this[10] *= z
        this[11] *= z

        return this
    }

    rotate(rad, axis)
    {
        let [x, y, z] = axis
        let len = Math.sqrt(x * x + y * y + z * z)

        if (Math.abs(len) > EPSILON)
        {
            len = 1 / len
            x *= len
            y *= len
            z *= len

            const s = Math.sin(rad)
            const c = Math.cos(rad)
            const t = 1 - c

            const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23] = this

            // Construct the elements of the rotation matrix
            const b00 = x * x * t + c
            const b01 = y * x * t + z * s
            const b02 = z * x * t - y * s
            const b10 = x * y * t - z * s
            const b11 = y * y * t + c
            const b12 = z * y * t + x * s
            const b20 = x * z * t + y * s
            const b21 = y * z * t - x * s
            const b22 = z * z * t + c

            // Perform rotation-specific matrix multiplication
            this[0] = a00 * b00 + a10 * b01 + a20 * b02
            this[1] = a01 * b00 + a11 * b01 + a21 * b02
            this[2] = a02 * b00 + a12 * b01 + a22 * b02
            this[3] = a03 * b00 + a13 * b01 + a23 * b02
            this[4] = a00 * b10 + a10 * b11 + a20 * b12
            this[5] = a01 * b10 + a11 * b11 + a21 * b12
            this[6] = a02 * b10 + a12 * b11 + a22 * b12
            this[7] = a03 * b10 + a13 * b11 + a23 * b12
            this[8] = a00 * b20 + a10 * b21 + a20 * b22
            this[9] = a01 * b20 + a11 * b21 + a21 * b22
            this[10] = a02 * b20 + a12 * b21 + a22 * b22
            this[11] = a03 * b20 + a13 * b21 + a23 * b22
        }

        return this
    }

    rotateX(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        const a10 = this[4]
        const a11 = this[5]
        const a12 = this[6]
        const a13 = this[7]
        const a20 = this[8]
        const a21 = this[9]
        const a22 = this[10]
        const a23 = this[11]

        // Perform axis-specific matrix multiplication
        this[4] = a10 * c + a20 * s
        this[5] = a11 * c + a21 * s
        this[6] = a12 * c + a22 * s
        this[7] = a13 * c + a23 * s
        this[8] = a20 * c - a10 * s
        this[9] = a21 * c - a11 * s
        this[10] = a22 * c - a12 * s
        this[11] = a23 * c - a13 * s

        return this
    }

    rotateY(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        const a00 = a[0]
        const a01 = a[1]
        const a02 = a[2]
        const a03 = a[3]
        const a20 = a[8]
        const a21 = a[9]
        const a22 = a[10]
        const a23 = a[11]

        // Perform axis-specific matrix multiplication
        this[0] = a00 * c - a20 * s
        this[1] = a01 * c - a21 * s
        this[2] = a02 * c - a22 * s
        this[3] = a03 * c - a23 * s
        this[8] = a00 * s + a20 * c
        this[9] = a01 * s + a21 * c
        this[10] = a02 * s + a22 * c
        this[11] = a03 * s + a23 * c

        return this
    }

    rotateZ(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        const [a00, a01, a0, a03, a10, a11, a12, a13] = this

        // Perform axis-specific matrix multiplication
        this[0] = a00 * c + a10 * s
        this[1] = a01 * c + a11 * s
        this[2] = a02 * c + a12 * s
        this[3] = a03 * c + a13 * s
        this[4] = a10 * c - a00 * s
        this[5] = a11 * c - a01 * s
        this[6] = a12 * c - a02 * s
        this[7] = a13 * c - a03 * s

        return this
    }

    fromTranslation(vec3)
    {
        this[0] = 1
        this[1] = 0
        this[2] = 0
        this[3] = 0
        this[4] = 0
        this[5] = 1
        this[6] = 0
        this[7] = 0
        this[8] = 0
        this[9] = 0
        this[10] = 1
        this[11] = 0
        this[12] = vec3[0]
        this[13] = vec3[1]
        this[14] = vec3[2]
        this[15] = 1

        return this
    }

    fromScaling(vec3)
    {
        this[0] = vec3[0]
        this[1] = 0
        this[2] = 0
        this[3] = 0
        this[4] = 0
        this[5] = vec3[1]
        this[6] = 0
        this[7] = 0
        this[8] = 0
        this[9] = 0
        this[10] = vec3[2]
        this[11] = 0
        this[12] = 0
        this[13] = 0
        this[14] = 0
        this[15] = 1

        return this
    }

    fromRotation(rad, axis)
    {
        let [x, y, z] = axis
        let len = Math.sqrt(x * x + y * y + z * z)


        if (Math.abs(len) > EPSILON)
        {
            len = 1 / len
            x *= len
            y *= len
            z *= len

            const s = Math.sin(rad)
            const c = Math.cos(rad)
            const t = 1 - c

            // Perform rotation-specific matrix multiplication
            this[0] = x * x * t + c
            this[1] = y * x * t + z * s
            this[2] = z * x * t - y * s
            this[3] = 0
            this[4] = x * y * t - z * s
            this[5] = y * y * t + c
            this[6] = z * y * t + x * s
            this[7] = 0
            this[8] = x * z * t + y * s
            this[9] = y * z * t - x * s
            this[10] = z * z * t + c
            this[11] = 0
            this[12] = 0
            this[13] = 0
            this[14] = 0
            this[15] = 1
        }

        return this
    }

    fromXRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        this[0] = 1
        this[1] = 0
        this[2] = 0
        this[3] = 0
        this[4] = 0
        this[5] = c
        this[6] = s
        this[7] = 0
        this[8] = 0
        this[9] = -s
        this[10] = c
        this[11] = 0
        this[12] = 0
        this[13] = 0
        this[14] = 0
        this[15] = 1

        return this
    }

    fromYRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        this[0] = c
        this[1] = 0
        this[2] = -s
        this[3] = 0
        this[4] = 0
        this[5] = 1
        this[6] = 0
        this[7] = 0
        this[8] = s
        this[9] = 0
        this[10] = c
        this[11] = 0
        this[12] = 0
        this[13] = 0
        this[14] = 0
        this[15] = 1

        return this
    }

    fromZRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        this[0] = c
        this[1] = s
        this[2] = 0
        this[3] = 0
        this[4] = -s
        this[5] = c
        this[6] = 0
        this[7] = 0
        this[8] = 0
        this[9] = 0
        this[10] = 1
        this[11] = 0
        this[12] = 0
        this[13] = 0
        this[14] = 0
        this[15] = 1

        return this
    }

    fromQuat(quat)
    {
        const [x, y, z, w] = quat
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const yx = y * x2
        const yy = y * y2
        const zx = z * x2
        const zy = z * y2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2

        this[0] = 1 - yy - zz
        this[1] = yx + wz
        this[2] = zx - wy
        this[3] = 0
        this[4] = yx - wz
        this[5] = 1 - xx - zz
        this[6] = zy + wx
        this[7] = 0
        this[8] = zx + wy
        this[9] = zy - wx
        this[10] = 1 - xx - yy
        this[11] = 0
        this[12] = 0
        this[13] = 0
        this[14] = 0
        this[15] = 1

        return this
    }

    fromRotationTranslation(quat, vec3)
    {
        // Quaternion math
        const [x, y, z, w] = quat

        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const xy = x * y2
        const xz = x * z2
        const yy = y * y2
        const yz = y * z2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2

        this[0] = 1 - (yy + zz)
        this[1] = xy + wz
        this[2] = xz - wy
        this[3] = 0
        this[4] = xy - wz
        this[5] = 1 - (xx + zz)
        this[6] = yz + wx
        this[7] = 0
        this[8] = xz + wy
        this[9] = yz - wx
        this[10] = 1 - (xx + yy)
        this[11] = 0
        this[12] = vec3[0]
        this[13] = vec3[1]
        this[14] = vec3[2]
        this[15] = 1

        return this
    }

    fromRotationTranslationScale(quat, vec3, scale)
    {
        // Quaternion math
        const [x, y, z, w] = quat
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const xy = x * y2
        const xz = x * z2
        const yy = y * y2
        const yz = y * z2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2
        const [sx, sy, sz] = scale

        this[0] = (1 - (yy + zz)) * sx
        this[1] = (xy + wz) * sx
        this[2] = (xz - wy) * sx
        this[3] = 0
        this[4] = (xy - wz) * sy
        this[5] = (1 - (xx + zz)) * sy
        this[6] = (yz + wx) * sy
        this[7] = 0
        this[8] = (xz + wy) * sz
        this[9] = (yz - wx) * sz
        this[10] = (1 - (xx + yy)) * sz
        this[11] = 0
        this[12] = vec3[0]
        this[13] = vec3[1]
        this[14] = vec3[2]
        this[15] = 1

        return this
    }

    fromRotationTranslationScaleOrigin(rotation, translation, scale, origin)
    {
        // Quaternion math
        const [x, y, z, w] = rotation
        const x2 = x + x
        const y2 = y + y
        const z2 = z + z

        const xx = x * x2
        const xy = x * y2
        const xz = x * z2
        const yy = y * y2
        const yz = y * z2
        const zz = z * z2
        const wx = w * x2
        const wy = w * y2
        const wz = w * z2

        const [sx, sy, sz] = scale
        const [ox, oy, oz] = origin

        this[0] = (1 - (yy + zz)) * sx
        this[1] = (xy + wz) * sx
        this[2] = (xz - wy) * sx
        this[3] = 0
        this[4] = (xy - wz) * sy
        this[5] = (1 - (xx + zz)) * sy
        this[6] = (yz + wx) * sy
        this[7] = 0
        this[8] = (xz + wy) * sz
        this[9] = (yz - wx) * sz
        this[10] = (1 - (xx + yy)) * sz
        this[11] = 0
        this[12] = translation[0] + ox - (this[0] * ox + this[4] * oy + this[8] * oz)
        this[13] = translation[1] + oy - (this[1] * ox + this[5] * oy + this[9] * oz)
        this[14] = translation[2] + oz - (this[2] * ox + this[6] * oy + this[10] * oz)
        this[15] = 1

        return this
    }

    getTranslation(mat, vec3 = new Float32Array(3))
    {
        vec3[0] = this[12]
        vec3[1] = this[13]
        vec3[2] = this[14]

        return vec3
    }

    getRotation(quat = new Float32Array(4))
    {
        // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
        var trace = this[0] + this[5] + this[10]

        if (trace > 0)
        {
            const S = Math.sqrt(trace + 1.0) * 2
            quat[0] = (this[6] - this[9]) / S
            quat[1] = (this[8] - this[2]) / S
            quat[2] = (this[1] - this[4]) / S
            quat[3] = 0.25 * S
        }
        else if (this[0] > this[5] & this[0] > this[10])
        {
            const S = Math.sqrt(1.0 + this[0] - this[5] - this[10]) * 2
            quat[0] = 0.25 * S
            quat[1] = (this[1] + this[4]) / S
            quat[2] = (this[8] + this[2]) / S
            quat[3] = (this[6] - this[9]) / S
        }
        else if (this[5] > this[10])
        {
            const S = Math.sqrt(1.0 + this[5] - this[0] - this[10])
            quat[0] = (this[1] + this[4]) / S * 2
            quat[1] = 0.25 * S
            quat[2] = (this[6] + this[9]) / S
            quat[3] = (this[8] - this[2]) / S
        }
        else
        {
            const S = Math.sqrt(1.0 + this[10] - this[0] - this[5]) * 2
            quat[0] = (this[8] + this[2]) / S
            quat[1] = (this[6] + this[9]) / S
            quat[2] = 0.25 * S
            quat[3] = (this[1] - this[4]) / S
        }

        return quat
    }

    frustrum(left, right, bottom, top, near, far)
    {
        const rl = 1 / (right - left)
        const tb = 1 / (top - bottom)
        const nf = 1 / (near - far)

        this[0] = (near * 2) * rl
        this[1] = 0
        this[2] = 0
        this[3] = 0
        this[4] = 0
        this[5] = (near * 2) * tb
        this[6] = 0
        this[7] = 0
        this[8] = (right + left) * rl
        this[9] = (top + bottom) * tb
        this[10] = (far + near) * nf
        this[11] = -1
        this[12] = 0
        this[13] = 0
        this[14] = (far * near * 2) * nf
        this[15] = 0

        return this
    }

    perspective(fovy, aspect, near, far)
    {
        const f = 1.0 / Math.tan(fovy / 2)
        const nf = 1 / (near - far)

        this[0] = f / aspect
        this[1] = 0
        this[2] = 0
        this[3] = 0
        this[4] = 0
        this[5] = f
        this[6] = 0
        this[7] = 0
        this[8] = 0
        this[9] = 0
        this[10] = (far + near) * nf
        this[11] = -1
        this[12] = 0
        this[13] = 0
        this[14] = (2 * far * near) * nf
        this[15] = 0

        return this
    }

    perspectiveFromFieldOfView(fov, near, far)
    {
        const upTan = Math.tan(fov.upDegrees * Math.PI / 180)
        const downTan = Math.tan(fov.downDegrees * Math.PI / 180)
        const leftTan = Math.tan(fov.leftDegrees * Math.PI / 180)
        const rightTan = Math.tan(fov.rightDegrees * Math.PI / 180)
        const xScale = 2 / (leftTan + rightTan)
        const yScale = 2 / (upTan + downTan)

        this[0] = xScale
        this[1] = 0
        this[2] = 0
        this[3] = 0
        this[4] = 0
        this[5] = yScale
        this[6] = 0
        this[7] = 0
        this[8] = -(leftTan - rightTan) * xScale * 0.5
        this[9] = (upTan - downTan) * yScale * 0.5
        this[10] = far / (near - far)
        this[11] = -1.0
        this[12] = 0
        this[13] = 0
        this[14] = (far * near) / (near - far)
        this[15] = 0

        return this
    }

    ortho(left, right, bottom, top, near, far)
    {
        const lr = 1 / (left - right)
        const bt = 1 / (bottom - top)
        const nf = 1 / (near - far)

        this[0] = -2 * lr
        this[1] = 0
        this[2] = 0
        this[3] = 0
        this[4] = 0
        this[5] = -2 * bt
        this[6] = 0
        this[7] = 0
        this[8] = 0
        this[9] = 0
        this[10] = 2 * nf
        this[11] = 0
        this[12] = (left + right) * lr
        this[13] = (top + bottom) * bt
        this[14] = (far + near) * nf
        this[15] = 1

        return this
    }

    lookAt(eye, center, up)
    {
        const [eyex, eyey, eyez] = eye
        const [upx, upy, upz] = up
        const [centerx, centery, centerz] = center

        if (Math.abs(eyex - centerx) < EPSILON &&
            Math.abs(eyey - centery) < EPSILON &&
            Math.abs(eyez - centerz) < EPSILON)
        {
            return this.identity()
        }

        let z0 = eyex - centerx
        let z1 = eyey - centery
        let z2 = eyez - centerz

        let len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2)
        z0 *= len
        z1 *= len
        z2 *= len

        let x0 = upy * z2 - upz * z1
        let x1 = upz * z0 - upx * z2
        let x2 = upx * z1 - upy * z0

        len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2)
        if (!len)
        {
            x0 = 0
            x1 = 0
            x2 = 0
        }
        else
        {
            len = 1 / len
            x0 *= len
            x1 *= len
            x2 *= len
        }

        let y0 = z1 * x2 - z2 * x1
        let y1 = z2 * x0 - z0 * x2
        let y2 = z0 * x1 - z1 * x0

        len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2)
        if (!len)
        {
            y0 = 0
            y1 = 0
            y2 = 0
        }
        else
        {
            len = 1 / len
            y0 *= len
            y1 *= len
            y2 *= len
        }

        this[0] = x0
        this[1] = y0
        this[2] = z0
        this[3] = 0
        this[4] = x1
        this[5] = y1
        this[6] = z1
        this[7] = 0
        this[8] = x2
        this[9] = y2
        this[10] = z2
        this[11] = 0
        this[12] = -(x0 * eyex + x1 * eyey + x2 * eyez)
        this[13] = -(y0 * eyex + y1 * eyey + y2 * eyez)
        this[14] = -(z0 * eyex + z1 * eyey + z2 * eyez)
        this[15] = 1

        return this
    }

    frob()
    {
        return (Math.sqrt(Math.pow(this[0], 2) + Math.pow(this[1], 2) + Math.pow(this[2], 2) + Math.pow(this[3], 2) + Math.pow(this[4], 2) + Math.pow(this[5], 2) + Math.pow(this[6], 2) + Math.pow(this[7], 2) + Math.pow(this[8], 2) + Math.pow(this[9], 2) + Math.pow(this[10], 2) + Math.pow(this[11], 2) + Math.pow(this[12], 2) + Math.pow(this[13], 2) + Math.pow(this[14], 2) + Math.pow(this[15], 2)))
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Matrix4x4;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Buffer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Attribute__ = __webpack_require__(1);
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




class Geom
{
    constructor()
    {
        this.attributes = []
        this.buffers = []
        
        this.hasIndices = false
        this.numItems = 0
    }
    
    /*isInitialized()
    {
        for (const buffer of this.attributes)
            if (!buffer.isInitialized())
                return false
        
        return true
    }*/
    
    addVertices(label, vertices, dimension)
    {
        const attribute = new __WEBPACK_IMPORTED_MODULE_1__Attribute__["a" /* default */](label)
        attribute.setArray(new Float32Array(vertices), 34962 /* gl.ARRAY_BUFFER */)
        attribute.setItems(5126 /* gl.FLOAT */, dimension)
        
        this.attributes.push(attribute)
        
        if (this.numItems < 1)
            this.numItems = vertices.length / dimension
    }
    
    addIndices(indices)
    {
        this.hasIndices = true
        
        const buffer = new __WEBPACK_IMPORTED_MODULE_0__Buffer__["a" /* default */]()
        
        buffer.setArray(new Uint16Array(indices), 34963 /* gl.ELEMENT_ARRAY_BUFFER */)
        buffer.setItems(5125 /* gl.UNSIGNED_INT */, 1 /* dimension */)
        
        this.buffers.push(buffer)
        
        this.numItems = indices.length
    }
    
    /*init(gl, program)
    {
        let success = true
        
        for (const attribute of this.attributes)
            if (!attribute.isInitialized())
                if (!attribute.init(gl, program))
                    success = false
                    
        for (const buffer of this.buffers)
            if (!buffer.isInitialized())
                if (!buffer.init(gl, program))
                    success = false      
                    
        return success
    }*/
    
    /*draw(gl, program)
    {
        for(const attribute of this.attributes)
            attribute.draw(gl, program)
                    
        for (const buffer of this.buffers)
            buffer.draw(gl, program)
    }*/
    
    display(gl)
    {
        if (this.hasIndices)
            gl.drawElements(gl.TRIANGLES, this.numItems, gl.UNSIGNED_SHORT, 0);
        else
            gl.drawArrays(gl.TRIANGLES, 0, this.numItems)
    }   
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Geom;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const vs = `      
    attribute vec3 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec4 vColor;

    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vColor = aVertexColor;
    }
`

const fs = `
    precision mediump float;

    varying vec4 vColor;

    void main(void) {
        gl_FragColor = vColor;
    }
`

let num = 0

class Program
{
    constructor(vertexShaderSrc = vs, fragmentShaderSrc = fs)
    {
        this.vertexShaderSrc = vertexShaderSrc
        this.fragmentShaderSrc = fragmentShaderSrc
        
        this.attribLocation = {}
        this.uniformLocation = {}
        this.textureLocation = {}
        this.textureIndex = {}
        this.textureNum = 0
        
        this.id = ++num
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    init(gl)
    {
        this.vertexShader = this._createShader(gl, 35633 /* gl.VERTEX_SHADER */, this.vertexShaderSrc)
        this.fragmentShader = this._createShader(gl, 35632 /* gl.FRAGMENT_SHADER */, this.fragmentShaderSrc)
        
        const program = gl.createProgram()
        gl.attachShader(program, this.vertexShader)
        gl.attachShader(program, this.fragmentShader)
        gl.linkProgram(program)
        
        if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        {
            console.error('Shader initialization error')
            return false
        }
        
        gl.useProgram(program) 
        
        this.pointer = program
        
        return true
    }
    
    getAttribLocation(gl, attribute)
    {
        const label = attribute.label
        if (!this.attribLocation.hasOwnProperty(label))
        {
            const attribLocation = gl.getAttribLocation(this.pointer, label)
            gl.enableVertexAttribArray(attribLocation)
            this.attribLocation[label] = attribLocation
            return attribLocation
        }
        
        return this.attribLocation[label]
    }
    
    getUniformLocation(gl, uniform)
    {
        const label = uniform.label
        if (!this.uniformLocation.hasOwnProperty(label))
        {
            const uniformLocation = gl.getUniformLocation(this.pointer, label)
            this.uniformLocation[label] = uniformLocation
            return uniformLocation
        }
        
        return this.uniformLocation[label]
    }
    
    getTextureLocationIndex(gl, texture)
    {
        const label = texture.label
        if (!this.textureLocation.hasOwnProperty(label) || !this.textureIndex.hasOwnProperty(label))
        {
            const textureLocation = gl.getUniformLocation(this.pointer, texture.label)
            this.textureLocation[label] = textureLocation
            this.textureIndex[label] = this.textureNum
            return [textureLocation, this.textureNum++]
        }
        
        return [this.textureLocation[label], this.textureIndex[label]]
    }
    
    draw(gl)
    {
        gl.useProgram(this.pointer)
    }
    
    _createShader(gl, type, src)
    {
        const shader = gl.createShader(type)
        gl.shaderSource(shader, src)
        gl.compileShader(shader)
    
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        {  
            return console.error('Une erreur est survenue au cours de la compilation du shader: ' + gl.getShaderInfoLog(shader))
        }

        return shader
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Program;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix4x4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uniform_Uniform__ = __webpack_require__(0);
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




class Cam3D extends __WEBPACK_IMPORTED_MODULE_1__uniform_Uniform__["a" /* default */]
{
    constructor(label)
    {
        super(label, 35676, new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4x4__["a" /* default */]())
       
        this.fovy = 45
        this.near = 0.1
        this.far = 1000
        this._matrix = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4x4__["a" /* default */]()
        
        this.updated = true
    }

    get matrix()
    {
        this.updated = true
        return this._matrix
    }
    
    update(w, h)
    {
        this.data.perspective(this.fovy * Math.PI / 180, w / h, 0.1, 100.0)
        this.data.multiply(this._matrix)
        this.updated = false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cam3D;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

class Mesh
{
    constructor(geom, program)
    {
        this.geom = geom
        this.program = program

        this.uniforms = []
        this.textures = []
        
        this.localCalls = []
        this.globalCalls = []
        
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
    
    draw(gl, sameProgram = false)
    {
        // Use program
        if (!sameProgram)
            this.program.draw(gl)
        
        // Call local
        for(const callback of this.localCalls)
            callback()
        
        // Call global
        if (!sameProgram)
            for(const callback of this.globalCalls)
                callback()
            
        // Draw mesh
        this.geom.display(gl)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mesh;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

class Scene
{
    constructor(canvas, cam)
    {
        this.canvas = canvas
        this.init(canvas)
        this.meshs = []
        this.cam = cam
        this.uniforms = [cam]
        
        this.depthTest = true
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
    
    resize(w, h)
    {
        const gl = this.gl
        gl.viewportWidth = w
        gl.viewportHeight = h
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

        

        this.gl = gl
    }
    
    set depthTest(depthTest)
    {
        const gl = this.gl
        
        if (!!depthTest)
            gl.enable(gl.DEPTH_TEST)
        else
            gl.disable(gl.DEPTH_TEST)
        
        this._depthTest = !!depthTest
    }
    
    get depthTest()
    {
        return this._depthTest
    }
    
    set bgColor([r, g, b, a = 1])
    {
        this.gl.clearColor(r, g, b, a)
        this._bgColor = [r, g, b, a]
    }
    
    get bgColor()
    {
        return this._bgColor
    }
    
    draw()
    {
        const gl = this.gl

        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        
        if (this.cam.updated)
            this.cam.update(gl.viewportWidth, gl.viewportHeight)
        
        let lastProgram = null
    
        for (const mesh of this.meshs)
        {
            if (mesh.isInitialized())
            {
                mesh.draw(gl, mesh.program === lastProgram)
                lastProgram = mesh.program
            }  
            else
            {
                mesh.init(gl, this.uniforms)
                lastProgram = null
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Texture__ = __webpack_require__(12);
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



function isMultOf(val, mult)
{
    return Number.isInteger(val / mult)
}

class SmartTexture extends __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */]
{
    constructor(label)
    {
        super(label)
        
        this.srcs = []
    }
    
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
    addDxt5URL({src, width, height, format, priority})
    {
        const byteLength = floor((width + 3) * 0.25) * floor((height + 3) * 0.25) * 16
        const level = isMultOf(width, 4) && isMultOf(height, 4) ? 0 : 1 
        
        // var formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
    }
    
    addURL(URL, size = 0)
    {
        const imgData = {
            size,
            src: URL,
            img: null,
            priority: 0,
            init: null
        }
        
        imgData.init = gl =>
        {
            gl.bindTexture(gl.TEXTURE_2D, this.pointer)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

            gl.texImage2D(gl.TEXTURE_2D, 0, 6408 /* gl.RGBA */, this.format, gl.UNSIGNED_BYTE, imgData.img)
            __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].SETUP(gl, imgData.img)
            // gl.bindTexture(gl.TEXTURE_2D, null)
        }
        
        this.srcs.push(imgData)
    }
    
    /*load(URL, callback)
    {
        this.src = URL
        
        const img = new Image()
        img.onload = () =>
        {
            this.img = img            
            if (this._changeImg)
                this._changeImg(img)
        }
        img.src = URL
    }*/
    
    static START_LOAD(gl, srcs)
    {
        if (srcs.length > 0)
        {
            srcs.sort((a, b) => (a.size === b.size ? (a.size - b.size) : (a.priority - b.priority)))
            const srcsValid = srcs.filter(o => o.size >= __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].MAX_SIZE)
            
            if (srcs.length > 1)
            {
                const first = srcs[0]
                const last = srcs[srcs.length - 1]
                
                SmartTexture.LOAD(first, () =>
                {
                    first.init(gl)
                    SmartTexture.LOAD(last, () =>
                    {
                        last.init(gl)
                    })
                })
            }
            else if (srcs.length > 0)
            {
                const imgData = srcs[0]
                SmartTexture.LOAD(imgData, () =>
                {
                    imgData.init(gl)
                })
            }
            else
            {
                console.warn('The GPU can\'nt load a texture with size > ', __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].MAX_SIZE)
            }
        }
        else
        {
            console.warn('URL of your texture', this.label, 'not found: texture.addURL(URL, size = 0)')
        }
    }
    
    static LOAD(data, callback)
    {        
        const img = new Image()
        img.onload = () =>
        {
            callback(data)
        }
        data.img = img
        
        img.src = data.src
    }
    
    init(gl, program)
    {
        const success = super.init(gl, program)
        
        const texture = this.pointer
        
        const changeImg = newImg =>
        {
            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

            gl.texImage2D(gl.TEXTURE_2D, 0, newImg.internalformat, this.format, gl.UNSIGNED_BYTE, newImg.img)
            __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].SETUP(gl, newImg.img)
            // gl.bindTexture(gl.TEXTURE_2D, null)
        }
           
        SmartTexture.START_LOAD(gl, this.srcs)
        return success
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SmartTexture;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix4x4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Uniform__ = __webpack_require__(0);
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





class UMat3D extends __WEBPACK_IMPORTED_MODULE_1__Uniform__["a" /* default */]
{
    constructor(label)
    {
        super(label, 35676 /* gl.FLOAT_MAT4 */, new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4x4__["a" /* default */]().identity())
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UMat3D;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uniform_Uniform__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uniform_UMat3D__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Attribute__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Program__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Geom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__texture_SmartTexture__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__object_Mesh__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__object_Cam3D__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__object_Scene__ = __webpack_require__(8);
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

// https://webglfundamentals.org/webgl/lessons/fr/webgl-shaders-and-glsl.html
// http://glmatrix.net/
// http://nehe.gamedev.net/tutorial/your_first_polygon/13002/
// http://learningwebgl.com/blog/?p=28
// http://learningwebgl.com/blog/?p=370


// import mat from 'gl-matrix/src/gl-matrix/mat4.js'
/*exports.glMatrix = require("./gl-matrix/common.js");
exports.mat2 = require("./gl-matrix/mat2.js");
exports.mat2d = require("./gl-matrix/mat2d.js");
exports.mat3 = require("./gl-matrix/mat3.js");
exports.mat4 = require("./gl-matrix/mat4.js");
exports.quat = require("./gl-matrix/quat.js");
exports.vec2 = require("./gl-matrix/vec2.js");
exports.vec3 = require("./gl-matrix/vec3.js");
exports.vec4 = require("./gl-matrix/vec4.js");*/














const canvas = document.body.querySelector('canvas')


// Camera
const cam3D = new __WEBPACK_IMPORTED_MODULE_7__object_Cam3D__["a" /* default */]('uPMatrix')
// cam3D.matrix.translate([-1.5, 0.0, -7.0])


// Scene
const scene = new __WEBPACK_IMPORTED_MODULE_8__object_Scene__["a" /* default */](canvas, cam3D)
scene.bgColor = [0.0, 0.0, 0.1, 1.0]
scene.depthTest = true



// Programs
const colorProgram = new __WEBPACK_IMPORTED_MODULE_3__core_Program__["a" /* default */]()

const fogVertexShader = `
    attribute vec3 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec4 vColor;

    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        float zDepth = 0.2 * (8.0 - gl_Position.z);
        vec4 modifyColor = vec4(aVertexColor.rgb * zDepth, aVertexColor.a);
        vColor = modifyColor;
    }
`
const fogProgram = new __WEBPACK_IMPORTED_MODULE_3__core_Program__["a" /* default */](fogVertexShader)



// ----------------------------
//
//      PYRAMID RAINBOW
//
// ----------------------------

// Pyramid
const pyramidVertices = [
    // Front face
    0.0,  1.0,  0.0,
   -1.0, -1.0,  1.0,
    1.0, -1.0,  1.0,

   // Right face
    0.0,  1.0,  0.0,
    1.0, -1.0,  1.0,
    1.0, -1.0, -1.0,

   // Back face
    0.0,  1.0,  0.0,
    1.0, -1.0, -1.0,
   -1.0, -1.0, -1.0,

   // Left face
    0.0,  1.0,  0.0,
   -1.0, -1.0, -1.0,
   -1.0, -1.0,  1.0
]

const pyramidColors = [
    // Front face
    1.0, 0.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,

    // Right face
    1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    0.0, 1.0, 0.0, 1.0,

    // Back face
    1.0, 0.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,

    // Left face
    1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    0.0, 1.0, 0.0, 1.0
]

const pyramidGeom = new __WEBPACK_IMPORTED_MODULE_4__core_Geom__["a" /* default */]()
pyramidGeom.addVertices('aVertexPosition', pyramidVertices, 3)
pyramidGeom.addVertices('aVertexColor', pyramidColors, 4)
    
const pyramidMesh = new __WEBPACK_IMPORTED_MODULE_6__object_Mesh__["a" /* default */](pyramidGeom, colorProgram)
const pyramidUniformMatrix = new __WEBPACK_IMPORTED_MODULE_1__uniform_UMat3D__["a" /* default */]('uMVMatrix')
pyramidMesh.addUniform(pyramidUniformMatrix)
pyramidMesh.matrix = pyramidUniformMatrix.data
pyramidMesh.matrix.translate([-1.5, -1.5, -8.0])
scene.addMesh(pyramidMesh)




// ----------------------------
//
//      SAME PYRAMID
//
// ----------------------------

const pyramidMesh2 = new __WEBPACK_IMPORTED_MODULE_6__object_Mesh__["a" /* default */](pyramidGeom, colorProgram)
const pyramidUniformMatrix2 = new __WEBPACK_IMPORTED_MODULE_1__uniform_UMat3D__["a" /* default */]('uMVMatrix')
pyramidMesh2.addUniform(pyramidUniformMatrix2)
pyramidMesh2.matrix = pyramidUniformMatrix2.data
pyramidMesh2.matrix.translate([-1.5, 1.5, -8.0])
pyramidMesh2.matrix.scale([1, -1, 1])

scene.addMesh(pyramidMesh2)



// ----------------------------
//
//      CUBE RAINBOW
//
// ----------------------------


// Square
const cubeVertices = [
    // Front face
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,

    // Back face
    -1.0, -1.0, -1.0,
    -1.0,  1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0, -1.0, -1.0,

    // Top face
    -1.0,  1.0, -1.0,
    -1.0,  1.0,  1.0,
     1.0,  1.0,  1.0,
     1.0,  1.0, -1.0,

    // Bottom face
    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0, -1.0,  1.0,
    -1.0, -1.0,  1.0,

    // Right face
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0,  1.0,  1.0,
     1.0, -1.0,  1.0,

    // Left face
    -1.0, -1.0, -1.0,
    -1.0, -1.0,  1.0,
    -1.0,  1.0,  1.0,
    -1.0,  1.0, -1.0
]
const cubeIndices = [
    0, 1, 2,      0, 2, 3,    // Front face
    4, 5, 6,      4, 6, 7,    // Back face
    8, 9, 10,     8, 10, 11,  // Top face
    12, 13, 14,   12, 14, 15, // Bottom face
    16, 17, 18,   16, 18, 19, // Right face
    20, 21, 22,   20, 22, 23  // Left face
]
const cubeColors = [
    [1.0, 0.0, 0.0, 1.0], // Front face
    [1.0, 1.0, 0.0, 1.0], // Back face
    [0.0, 1.0, 0.0, 1.0], // Top face
    [1.0, 0.5, 0.5, 1.0], // Bottom face
    [1.0, 0.0, 1.0, 1.0], // Right face
    [0.0, 0.0, 1.0, 1.0]  // Left face
]

let unpackedCubeColors = []
for (let i in cubeColors)
{
    var color = cubeColors[i];
    for (let j = 0; j < 4; j++)
        unpackedCubeColors = unpackedCubeColors.concat(color)
}


const cubeGeom = new __WEBPACK_IMPORTED_MODULE_4__core_Geom__["a" /* default */]()
cubeGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeGeom.addVertices('aVertexColor', unpackedCubeColors, 4)
cubeGeom.addIndices(cubeIndices)

const cubeMesh = new __WEBPACK_IMPORTED_MODULE_6__object_Mesh__["a" /* default */](cubeGeom, fogProgram)
const cubeUniformMatrix = new __WEBPACK_IMPORTED_MODULE_1__uniform_UMat3D__["a" /* default */]('uMVMatrix')
cubeMesh.addUniform(cubeUniformMatrix)
cubeMesh.matrix = cubeUniformMatrix.data
cubeMesh.matrix.translate([1.5, -1.5, -8.0])
scene.addMesh(cubeMesh)


// ----------------------------
//
//      CUBE WOOD
//
// ----------------------------

const vertexTextureShader = `   
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vTextureCoord = aTextureCoord;
    }`

const fragmentTextureShader = `
    precision mediump float;

    varying vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
        gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
    }`

const texturedProgram = new __WEBPACK_IMPORTED_MODULE_3__core_Program__["a" /* default */](vertexTextureShader, fragmentTextureShader)

var cubeUV = [
    // Front face
    0.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 1.0,

    // Back face
    1.0, 0.0,
    1.0, 1.0,
    0.0, 1.0,
    0.0, 0.0,

    // Top face
    0.0, 1.0,
    0.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,

    // Bottom face
    1.0, 1.0,
    0.0, 1.0,
    0.0, 0.0,
    1.0, 0.0,

    // Right face
    1.0, 0.0,
    1.0, 1.0,
    0.0, 1.0,
    0.0, 0.0,

    // Left face
    0.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 1.0,
]

const cubeTexture = new __WEBPACK_IMPORTED_MODULE_5__texture_SmartTexture__["a" /* default */]('uSampler')
cubeTexture.addURL('cube-diffuse.jpg')

const cubeTexturedGeom = new __WEBPACK_IMPORTED_MODULE_4__core_Geom__["a" /* default */]()
cubeTexturedGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeTexturedGeom.addVertices('aTextureCoord', cubeUV, 2)
cubeTexturedGeom.addIndices(cubeIndices)

const cubeTexturedMesh = new __WEBPACK_IMPORTED_MODULE_6__object_Mesh__["a" /* default */](cubeTexturedGeom, texturedProgram)
const cubeTexturedUniformMatrix = new __WEBPACK_IMPORTED_MODULE_1__uniform_UMat3D__["a" /* default */]('uMVMatrix')
cubeTexturedMesh.addUniform(cubeTexturedUniformMatrix)
cubeTexturedMesh.matrix = cubeTexturedUniformMatrix.data
cubeTexturedMesh.addTexture(cubeTexture)
cubeTexturedMesh.matrix.translate([1.5, 1.5, -8.0])
scene.addMesh(cubeTexturedMesh)




refresh()
function refresh()
{
    pyramidMesh.matrix.rotate(0.005, [0, 1, 0])
    pyramidMesh2.matrix.rotate(-0.005, [0, 1, 0])
    cubeMesh.matrix.rotate(0.01, [0, 1, 0])
    cubeTexturedMesh.matrix.rotate(-0.01, [0, 1, 0])
    
    scene.draw()
    requestAnimationFrame(refresh)
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

class Texture
{
    constructor(label)
    {
        this.label = label
        this.color = [255, 255, 255, 255]
        
        
        this.pointer = null
        this.parameters = {
            9729: 9987
        }
        
        this.setFormat()
    }
    
    /*
        6407    gl.RGB
        6408    gl.RGBA
    */
    setFormat(/*internalformat = 6408,*/ format = 6408)
    {
        // this.internalformat = internalformat
        this.format = format
    }
    
    /*
        target
            3553    gl.TEXTURE_2D           A two-dimensional texture.
            34067   gl.TEXTURE_CUBE_MAP     A cube-mapped texture.
    
        pname
            10240   gl.TEXTURE_MAG_FILTER	Texture magnification filter
                        - 9729 gl.LINEAR (default value),
                        - 9728 gl.NEAREST.
        
            10241   gl.TEXTURE_MIN_FILTER	Texture minification filter
                        - 9729 gl.LINEAR,
                        - 9728 gl.NEAREST,
                        - 9984 gl.NEAREST_MIPMAP_NEAREST,
                        - 9985 gl.LINEAR_MIPMAP_NEAREST,
                        - 9986 gl.NEAREST_MIPMAP_LINEAR (default value),
                        - 9987 gl.LINEAR_MIPMAP_LINEAR.
            
            10242   gl.TEXTURE_WRAP_S	    Wrapping function for texture coordinate s
                        - 10497 gl.REPEAT (default value),
                        - 33071 gl.CLAMP_TO_EDGE,
                        - 33648 gl.MIRRORED_REPEAT.
                        
            10243   gl.TEXTURE_WRAP_T	      Wrapping function for texture coordinate t
                        - 10497 gl.REPEAT (default value),
                        - 33071 gl.CLAMP_TO_EDGE,
                        - 33648 gl.MIRRORED_REPEAT.
        
        param
    */
    setParameters(target, pName, param)
    {
        
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    static IS_POWER_OF_2(val)
    {
        return (val & (val - 1)) === 0
    }
    
    /*static IS_MULT_OF(val, mult)
    {
        return Number.isInteger(val / mult)
    }*/
    
    /*_setupFilterAndMipmap(gl, img)
    {
        if (Texture.IS_POWER_OF_2(img.width) && Texture.IS_POWER_OF_2(img.height))
        {
            gl.generateMipmap(gl.TEXTURE_2D)
            // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
            // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        }
    }*/
    
    static SET_DATA(gl)
    {
        Texture.MAX_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE)
        Texture.FORMAT = { }

        /*
        https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc
        */
        const formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
        for (let i = 0; i < formats.length; i++)
        {
            Texture.FORMAT[formats[i]] = true
            console.log(formats[i])
        }

        Texture._DATA_INITIALIZED = true
    }
    
    static SETUP(gl, img)
    {
        if (Texture.IS_POWER_OF_2(img.width) && Texture.IS_POWER_OF_2(img.height))
        {
            gl.generateMipmap(gl.TEXTURE_2D)
            // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        }
        else
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
            // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        }
    }
        
    init(gl)
    {
        const texture = gl.createTexture()
        
        if (!Texture._DATA_INITIALIZED)
        {
            Texture.SET_DATA(gl)
        }
            
        
        /*
        gl.getParameter(gl.MAX_TEXTURE_SIZE)
        gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
        gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
        */
        
        
        // Temporary texture (1 pixel)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE,
          new Uint8Array(this.color))

        
        /*const location = program.getTextureLocation(this.label)
        const index = program.getTextureIndex(this.label)
        gl.uniform1i(location, index)*/
        
        this.pointer = texture
        
        return true
    }
    
    draw(gl, location, index)
    {
        // const index = program.getTextureIndex(this.label)
        gl.uniform1i(location, index) // Chaque frame ou chaque init ?
        gl.activeTexture(gl.TEXTURE0 + index)
        gl.bindTexture(gl.TEXTURE_2D, this.pointer)
        // gl.uniform1i(program.getTextureLocation(this.label), 0)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Texture;


/***/ })
/******/ ]);