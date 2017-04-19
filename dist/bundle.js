/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Uniform = function () {
    /**
     * type
     *      gl.FLOAT_MAT4       35676
     */
    function Uniform(label, type, data) {
        _classCallCheck(this, Uniform);

        this.label = label;
        this.type = type;
        this.data = data;
        // this.location = null
    }

    _createClass(Uniform, [{
        key: 'draw',
        value: function draw(gl, program) {
            switch (this.type) {
                case 35676:
                    // gl.FLOAT_MAT4
                    var location = program.getUniformLocation(this.label);
                    gl.uniformMatrix4fv(location, false, this.data);
                    break;

                default:
                    console.error('Uniform type unknow: {label:', this.label, ', type:', this.type, '}');
            }
        }
    }]);

    return Uniform;
}();

exports.default = Uniform;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Buffer2 = __webpack_require__(2);

var _Buffer3 = _interopRequireDefault(_Buffer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
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

var Attribute = function (_Buffer) {
    _inherits(Attribute, _Buffer);

    function Attribute(label) {
        _classCallCheck(this, Attribute);

        var _this = _possibleConstructorReturn(this, (Attribute.__proto__ || Object.getPrototypeOf(Attribute)).call(this));

        _this.label = label;
        return _this;
    }

    _createClass(Attribute, [{
        key: 'draw',
        value: function draw(gl, program) {
            _get(Attribute.prototype.__proto__ || Object.getPrototypeOf(Attribute.prototype), 'draw', this).call(this, gl);
            var location = program.getAttribLocation(this.label);
            gl.vertexAttribPointer(location, this.itemSize, this.itemType, false, 0, 0);
        }
    }]);

    return Attribute;
}(_Buffer3.default);

exports.default = Attribute;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Buffer = function () {
    function Buffer() {
        _classCallCheck(this, Buffer);

        this.buffer = null;
    }

    _createClass(Buffer, [{
        key: "isInitialized",
        value: function isInitialized() {
            return !!this.buffer;
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

    }, {
        key: "setArray",
        value: function setArray(data) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 34962;
            var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 35044;

            this.arrayType = type;
            this.data = data;
            this.arrayUsage = usage;
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

    }, {
        key: "setItems",
        value: function setItems() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5126;
            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            this.itemType = type;
            this.itemSize = size;
        }
    }, {
        key: "init",
        value: function init(gl, program) {
            // Create buffer
            var buffer = gl.createBuffer();
            gl.bindBuffer(this.arrayType, buffer);
            gl.bufferData(this.arrayType, this.data, this.arrayUsage);

            this.buffer = buffer;

            return true;
        }
    }, {
        key: "draw",
        value: function draw(gl) {
            gl.bindBuffer(this.arrayType, this.buffer);
        }
    }]);

    return Buffer;
}();

exports.default = Buffer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// polyfill -> fill, 

var EPSILON = 0.000001;

var Matrix4x4 = function (_Float32Array) {
    _inherits(Matrix4x4, _Float32Array);

    function Matrix4x4() {
        _classCallCheck(this, Matrix4x4);

        var _this = _possibleConstructorReturn(this, (Matrix4x4.__proto__ || Object.getPrototypeOf(Matrix4x4)).call(this, 16));

        _this[0] = 1;
        _this[5] = 1;
        _this[10] = 1;
        _this[15] = 1;
        return _this;
    }

    _createClass(Matrix4x4, [{
        key: "clone",
        value: function clone() {
            var clone = new Matrix4x4();
            clone.set(this);

            return clone;
        }
    }, {
        key: "copy",
        value: function copy(to) {
            to.set(this);

            return this;
        }
    }, {
        key: "identity",
        value: function identity() {
            this.fill(0);
            this[0] = 1;
            this[5] = 1;
            this[10] = 1;
            this[15] = 1;

            return this;
        }
    }, {
        key: "add",
        value: function add(mat4) {
            this[0] += mat4[0];
            this[1] += mat4[1];
            this[2] += mat4[2];
            this[3] += mat4[3];
            this[4] += mat4[4];
            this[5] += mat4[5];
            this[6] += mat4[6];
            this[7] += mat4[7];
            this[8] += mat4[8];
            this[9] += mat4[9];
            this[10] += mat4[10];
            this[11] += mat4[11];
            this[12] += mat4[12];
            this[13] += mat4[13];
            this[14] += mat4[14];
            this[15] += mat4[15];

            return this;
        }
    }, {
        key: "subtract",
        value: function subtract(mat4) {
            this[0] -= mat4[0];
            this[1] -= mat4[1];
            this[2] -= mat4[2];
            this[3] -= mat4[3];
            this[4] -= mat4[4];
            this[5] -= mat4[5];
            this[6] -= mat4[6];
            this[7] -= mat4[7];
            this[8] -= mat4[8];
            this[9] -= mat4[9];
            this[10] -= mat4[10];
            this[11] -= mat4[11];
            this[12] -= mat4[12];
            this[13] -= mat4[13];
            this[14] -= mat4[14];
            this[15] -= mat4[15];

            return this;
        }
    }, {
        key: "multiplyScalar",
        value: function multiplyScalar(mat4) {
            this[0] *= mat4;
            this[1] *= mat4;
            this[2] *= mat4;
            this[3] *= mat4;
            this[4] *= mat4;
            this[5] *= mat4;
            this[6] *= mat4;
            this[7] *= mat4;
            this[8] *= mat4;
            this[9] *= mat4;
            this[10] *= mat4;
            this[11] *= mat4;
            this[12] *= mat4;
            this[13] *= mat4;
            this[14] *= mat4;
            this[15] *= mat4;

            return this;
        }
    }, {
        key: "multiplyScalarAndAdd",
        value: function multiplyScalarAndAdd(mat4, scale) {
            this[0] += mat4[0] * scale;
            this[1] += mat4[1] * scale;
            this[2] += mat4[2] * scale;
            this[3] += mat4[3] * scale;
            this[4] += mat4[4] * scale;
            this[5] += mat4[5] * scale;
            this[6] += mat4[6] * scale;
            this[7] += mat4[7] * scale;
            this[8] += mat4[8] * scale;
            this[9] += mat4[9] * scale;
            this[10] += mat4[10] * scale;
            this[11] += mat4[11] * scale;
            this[12] += mat4[12] * scale;
            this[13] += mat4[13] * scale;
            this[14] += mat4[14] * scale;
            this[15] += mat4[15] * scale;

            return this;
        }
    }, {
        key: "exactEquals",
        value: function exactEquals(mat4) {
            return this[0] === mat4[0] && this[1] === mat4[1] && this[2] === mat4[2] && this[3] === mat4[3] && this[4] === mat4[4] && this[5] === mat4[5] && this[6] === mat4[6] && this[7] === mat4[7] && this[8] === mat4[8] && this[9] === mat4[9] && this[10] === mat4[10] && this[11] === mat4[11] && this[12] === mat4[12] && this[13] === mat4[13] && this[14] === mat4[14] && this[15] === mat4[15];
        }
    }, {
        key: "equals",
        value: function equals(mat4) {
            var _ref = _slicedToArray(this, 16),
                a0 = _ref[0],
                a1 = _ref[1],
                a2 = _ref[2],
                a3 = _ref[3],
                a4 = _ref[4],
                a5 = _ref[5],
                a6 = _ref[6],
                a7 = _ref[7],
                a8 = _ref[8],
                a9 = _ref[9],
                a10 = _ref[10],
                a11 = _ref[11],
                a12 = _ref[12],
                a13 = _ref[13],
                a14 = _ref[14],
                a15 = _ref[15];

            var _mat = _slicedToArray(mat4, 16),
                b0 = _mat[0],
                b1 = _mat[1],
                b2 = _mat[2],
                b3 = _mat[3],
                b4 = _mat[4],
                b5 = _mat[5],
                b6 = _mat[6],
                b7 = _mat[7],
                b8 = _mat[8],
                b9 = _mat[9],
                b10 = _mat[10],
                b11 = _mat[11],
                b12 = _mat[12],
                b13 = _mat[13],
                b14 = _mat[14],
                b15 = _mat[15];

            return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
        }
    }, {
        key: "transpose",
        value: function transpose(mat4) {
            if (mat4 === this) {
                var m1 = mat4[1];
                var m2 = mat4[2];
                var m3 = mat4[3];
                var m12 = mat4[6];
                var m13 = mat4[7];
                var m23 = mat4[11];

                this[1] = mat4[4];
                this[2] = mat4[8];
                this[3] = mat4[12];
                this[4] = m1;
                this[6] = mat4[9];
                this[7] = mat4[13];
                this[8] = m2;
                this[9] = m12;
                this[11] = mat4[14];
                this[12] = m3;
                this[13] = m13;
                this[14] = m23;
            } else {
                this[0] = mat4[0];
                this[1] = mat4[4];
                this[2] = mat4[8];
                this[3] = mat4[12];
                this[4] = mat4[1];
                this[5] = mat4[5];
                this[6] = mat4[9];
                this[7] = mat4[13];
                this[8] = mat4[2];
                this[9] = mat4[6];
                this[10] = mat4[10];
                this[11] = mat4[14];
                this[12] = mat4[3];
                this[13] = mat4[7];
                this[14] = mat4[11];
                this[15] = mat4[15];
            }

            return this;
        }
    }, {
        key: "invert",
        value: function invert(mat4) {
            var _ref2 = _slicedToArray(this, 16),
                a00 = _ref2[0],
                a01 = _ref2[1],
                a02 = _ref2[2],
                a03 = _ref2[3],
                a10 = _ref2[4],
                a11 = _ref2[5],
                a12 = _ref2[6],
                a13 = _ref2[7],
                a20 = _ref2[8],
                a21 = _ref2[9],
                a22 = _ref2[10],
                a23 = _ref2[11],
                a30 = _ref2[12],
                a31 = _ref2[13],
                a32 = _ref2[14],
                a33 = _ref2[15];

            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32;

            // Calculate the determinant
            var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

            if (!det) {
                return this;
            }

            det = 1.0 / det;

            this[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            this[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            this[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            this[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
            this[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            this[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            this[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            this[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
            this[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            this[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            this[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            this[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
            this[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
            this[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
            this[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
            this[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

            return this;
        }
    }, {
        key: "adjoint",
        value: function adjoint(mat4) {
            var _ref3 = _slicedToArray(this, 16),
                a00 = _ref3[0],
                a01 = _ref3[1],
                a02 = _ref3[2],
                a03 = _ref3[3],
                a10 = _ref3[4],
                a11 = _ref3[5],
                a12 = _ref3[6],
                a13 = _ref3[7],
                a20 = _ref3[8],
                a21 = _ref3[9],
                a22 = _ref3[10],
                a23 = _ref3[11],
                a30 = _ref3[12],
                a31 = _ref3[13],
                a32 = _ref3[14],
                a33 = _ref3[15];

            this[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
            this[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
            this[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
            this[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
            this[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
            this[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
            this[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
            this[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
            this[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
            this[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
            this[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
            this[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
            this[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
            this[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
            this[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
            this[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);

            return this;
        }
    }, {
        key: "determinant",
        value: function determinant() {
            var _ref4 = _slicedToArray(this, 16),
                a00 = _ref4[0],
                a01 = _ref4[1],
                a02 = _ref4[2],
                a03 = _ref4[3],
                a10 = _ref4[4],
                a11 = _ref4[5],
                a12 = _ref4[6],
                a13 = _ref4[7],
                a20 = _ref4[8],
                a21 = _ref4[9],
                a22 = _ref4[10],
                a23 = _ref4[11],
                a30 = _ref4[12],
                a31 = _ref4[13],
                a32 = _ref4[14],
                a33 = _ref4[15];

            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32;

            return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        }
    }, {
        key: "multiply",
        value: function multiply(mat4) {
            var _ref5 = _slicedToArray(this, 16),
                a00 = _ref5[0],
                a01 = _ref5[1],
                a02 = _ref5[2],
                a03 = _ref5[3],
                a10 = _ref5[4],
                a11 = _ref5[5],
                a12 = _ref5[6],
                a13 = _ref5[7],
                a20 = _ref5[8],
                a21 = _ref5[9],
                a22 = _ref5[10],
                a23 = _ref5[11],
                a30 = _ref5[12],
                a31 = _ref5[13],
                a32 = _ref5[14],
                a33 = _ref5[15];

            // Cache only the current line of the second matrix


            var _mat2 = _slicedToArray(mat4, 4),
                b0 = _mat2[0],
                b1 = _mat2[1],
                b2 = _mat2[2],
                b3 = _mat2[3];

            this[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

            b0 = mat4[4];
            b1 = mat4[5];
            b2 = mat4[6];
            b3 = mat4[7];

            this[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

            b0 = mat4[8];
            b1 = mat4[9];
            b2 = mat4[10];
            b3 = mat4[11];
            this[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

            b0 = mat4[12];
            b1 = mat4[13];
            b2 = mat4[14];
            b3 = mat4[15];
            this[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

            return this;
        }
    }, {
        key: "translate",
        value: function translate(vec3) {
            var _vec = _slicedToArray(vec3, 3),
                x = _vec[0],
                y = _vec[1],
                z = _vec[2];

            this[12] = this[0] * x + this[4] * y + this[8] * z + this[12];
            this[13] = this[1] * x + this[5] * y + this[9] * z + this[13];
            this[14] = this[2] * x + this[6] * y + this[10] * z + this[14];
            this[15] = this[3] * x + this[7] * y + this[11] * z + this[15];

            return this;
        }
    }, {
        key: "scale",
        value: function scale(vec3) {
            var _vec2 = _slicedToArray(vec3, 3),
                x = _vec2[0],
                y = _vec2[1],
                z = _vec2[2];

            this[0] *= x;
            this[1] *= x;
            this[2] *= x;
            this[3] *= x;
            this[4] *= y;
            this[5] *= y;
            this[6] *= y;
            this[7] *= y;
            this[8] *= z;
            this[9] *= z;
            this[10] *= z;
            this[11] *= z;

            return this;
        }
    }, {
        key: "rotate",
        value: function rotate(rad, axis) {
            var _axis = _slicedToArray(axis, 3),
                x = _axis[0],
                y = _axis[1],
                z = _axis[2];

            var len = Math.sqrt(x * x + y * y + z * z);

            if (Math.abs(len) > EPSILON) {
                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;

                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c;

                var _ref6 = _slicedToArray(this, 12),
                    a00 = _ref6[0],
                    a01 = _ref6[1],
                    _a = _ref6[2],
                    a03 = _ref6[3],
                    a10 = _ref6[4],
                    a11 = _ref6[5],
                    a12 = _ref6[6],
                    a13 = _ref6[7],
                    a20 = _ref6[8],
                    a21 = _ref6[9],
                    a22 = _ref6[10],
                    a23 = _ref6[11];

                // Construct the elements of the rotation matrix


                var b00 = x * x * t + c;
                var b01 = y * x * t + z * s;
                var b02 = z * x * t - y * s;
                var b10 = x * y * t - z * s;
                var b11 = y * y * t + c;
                var b12 = z * y * t + x * s;
                var b20 = x * z * t + y * s;
                var b21 = y * z * t - x * s;
                var b22 = z * z * t + c;

                // Perform rotation-specific matrix multiplication
                this[0] = a00 * b00 + a10 * b01 + a20 * b02;
                this[1] = a01 * b00 + a11 * b01 + a21 * b02;
                this[2] = _a * b00 + a12 * b01 + a22 * b02;
                this[3] = a03 * b00 + a13 * b01 + a23 * b02;
                this[4] = a00 * b10 + a10 * b11 + a20 * b12;
                this[5] = a01 * b10 + a11 * b11 + a21 * b12;
                this[6] = _a * b10 + a12 * b11 + a22 * b12;
                this[7] = a03 * b10 + a13 * b11 + a23 * b12;
                this[8] = a00 * b20 + a10 * b21 + a20 * b22;
                this[9] = a01 * b20 + a11 * b21 + a21 * b22;
                this[10] = _a * b20 + a12 * b21 + a22 * b22;
                this[11] = a03 * b20 + a13 * b21 + a23 * b22;
            }

            return this;
        }
    }, {
        key: "rotateX",
        value: function rotateX(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            var a10 = this[4];
            var a11 = this[5];
            var a12 = this[6];
            var a13 = this[7];
            var a20 = this[8];
            var a21 = this[9];
            var a22 = this[10];
            var a23 = this[11];

            // Perform axis-specific matrix multiplication
            this[4] = a10 * c + a20 * s;
            this[5] = a11 * c + a21 * s;
            this[6] = a12 * c + a22 * s;
            this[7] = a13 * c + a23 * s;
            this[8] = a20 * c - a10 * s;
            this[9] = a21 * c - a11 * s;
            this[10] = a22 * c - a12 * s;
            this[11] = a23 * c - a13 * s;

            return this;
        }
    }, {
        key: "rotateY",
        value: function rotateY(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            var a00 = a[0];
            var a01 = a[1];
            var a02 = a[2];
            var a03 = a[3];
            var a20 = a[8];
            var a21 = a[9];
            var a22 = a[10];
            var a23 = a[11];

            // Perform axis-specific matrix multiplication
            this[0] = a00 * c - a20 * s;
            this[1] = a01 * c - a21 * s;
            this[2] = a02 * c - a22 * s;
            this[3] = a03 * c - a23 * s;
            this[8] = a00 * s + a20 * c;
            this[9] = a01 * s + a21 * c;
            this[10] = a02 * s + a22 * c;
            this[11] = a03 * s + a23 * c;

            return this;
        }
    }, {
        key: "rotateZ",
        value: function rotateZ(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            var _ref7 = _slicedToArray(this, 8),
                a00 = _ref7[0],
                a01 = _ref7[1],
                a0 = _ref7[2],
                a03 = _ref7[3],
                a10 = _ref7[4],
                a11 = _ref7[5],
                a12 = _ref7[6],
                a13 = _ref7[7];

            // Perform axis-specific matrix multiplication


            this[0] = a00 * c + a10 * s;
            this[1] = a01 * c + a11 * s;
            this[2] = a02 * c + a12 * s;
            this[3] = a03 * c + a13 * s;
            this[4] = a10 * c - a00 * s;
            this[5] = a11 * c - a01 * s;
            this[6] = a12 * c - a02 * s;
            this[7] = a13 * c - a03 * s;

            return this;
        }
    }, {
        key: "fromTranslation",
        value: function fromTranslation(vec3) {
            this[0] = 1;
            this.fill(0, 1, 4);
            this[5] = 1;
            this.fill(0, 6, 9);
            this[10] = 1;
            this[11] = 0;
            this[12] = vec3[0];
            this[13] = vec3[1];
            this[14] = vec3[2];
            this[15] = 1;

            return this;
        }
    }, {
        key: "fromScaling",
        value: function fromScaling(vec3) {
            this[0] = vec3[0];
            this.fill(0, 1, 4);
            this[5] = vec3[1];
            this.fill(0, 6, 9);
            this[10] = vec3[2];
            this.fill(0, 11, 14);
            this[15] = 1;

            return this;
        }
    }, {
        key: "fromRotation",
        value: function fromRotation(rad, axis) {
            var _axis2 = _slicedToArray(axis, 3),
                x = _axis2[0],
                y = _axis2[1],
                z = _axis2[2];

            var len = Math.sqrt(x * x + y * y + z * z);

            if (Math.abs(len) > EPSILON) {
                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;

                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c;

                // Perform rotation-specific matrix multiplication
                this[0] = x * x * t + c;
                this[1] = y * x * t + z * s;
                this[2] = z * x * t - y * s;
                this[3] = 0;
                this[4] = x * y * t - z * s;
                this[5] = y * y * t + c;
                this[6] = z * y * t + x * s;
                this[7] = 0;
                this[8] = x * z * t + y * s;
                this[9] = y * z * t - x * s;
                this[10] = z * z * t + c;
                this.fill(0, 11, 14);
                this[15] = 1;
            }

            return this;
        }
    }, {
        key: "fromXRotation",
        value: function fromXRotation(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            // Perform axis-specific matrix multiplication
            this[0] = 1;
            this.fill(0, 1, 4);
            this[5] = c;
            this[6] = s;
            this.fill(0, 7, 8);
            this[9] = -s;
            this[10] = c;
            this.fill(0, 11, 14);
            this[15] = 1;

            return this;
        }
    }, {
        key: "fromYRotation",
        value: function fromYRotation(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            // Perform axis-specific matrix multiplication
            this[0] = c;
            this[1] = 0;
            this[2] = -s;
            this.fill(0, 3, 4);
            this[5] = 1;
            this.fill(0, 6, 7);
            this[8] = s;
            this[9] = 0;
            this[10] = c;
            this.fill(0, 11, 14);
            this[15] = 1;

            return this;
        }
    }, {
        key: "fromZRotation",
        value: function fromZRotation(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            // Perform axis-specific matrix multiplication
            this[0] = c;
            this[1] = s;
            this.fill(0, 2, 3);
            this[4] = -s;
            this[5] = c;
            this.fill(0, 6, 9);
            this[10] = 1;
            this.fill(0, 11, 14);
            this[15] = 1;

            return this;
        }
    }, {
        key: "fromQuat",
        value: function fromQuat(quat) {
            var _quat = _slicedToArray(quat, 4),
                x = _quat[0],
                y = _quat[1],
                z = _quat[2],
                w = _quat[3];

            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;

            var xx = x * x2;
            var yx = y * x2;
            var yy = y * y2;
            var zx = z * x2;
            var zy = z * y2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;

            this[0] = 1 - yy - zz;
            this[1] = yx + wz;
            this[2] = zx - wy;
            this[3] = 0;
            this[4] = yx - wz;
            this[5] = 1 - xx - zz;
            this[6] = zy + wx;
            this[7] = 0;
            this[8] = zx + wy;
            this[9] = zy - wx;
            this[10] = 1 - xx - yy;
            this.fill(0, 11, 14);
            this[15] = 1;

            return this;
        }
    }, {
        key: "fromRotationTranslation",
        value: function fromRotationTranslation(quat, vec3) {
            // Quaternion math
            var _quat2 = _slicedToArray(quat, 4),
                x = _quat2[0],
                y = _quat2[1],
                z = _quat2[2],
                w = _quat2[3];

            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;

            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;

            this[0] = 1 - (yy + zz);
            this[1] = xy + wz;
            this[2] = xz - wy;
            this[3] = 0;
            this[4] = xy - wz;
            this[5] = 1 - (xx + zz);
            this[6] = yz + wx;
            this[7] = 0;
            this[8] = xz + wy;
            this[9] = yz - wx;
            this[10] = 1 - (xx + yy);
            this[11] = 0;
            this[12] = vec3[0];
            this[13] = vec3[1];
            this[14] = vec3[2];
            this[15] = 1;

            return this;
        }
    }, {
        key: "fromRotationTranslationScale",
        value: function fromRotationTranslationScale(quat, vec3, scale) {
            // Quaternion math
            var _quat3 = _slicedToArray(quat, 4),
                x = _quat3[0],
                y = _quat3[1],
                z = _quat3[2],
                w = _quat3[3];

            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;

            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;

            var _scale = _slicedToArray(scale, 3),
                sx = _scale[0],
                sy = _scale[1],
                sz = _scale[2];

            this[0] = (1 - (yy + zz)) * sx;
            this[1] = (xy + wz) * sx;
            this[2] = (xz - wy) * sx;
            this[3] = 0;
            this[4] = (xy - wz) * sy;
            this[5] = (1 - (xx + zz)) * sy;
            this[6] = (yz + wx) * sy;
            this[7] = 0;
            this[8] = (xz + wy) * sz;
            this[9] = (yz - wx) * sz;
            this[10] = (1 - (xx + yy)) * sz;
            this[11] = 0;
            this[12] = vec3[0];
            this[13] = vec3[1];
            this[14] = vec3[2];
            this[15] = 1;

            return this;
        }
    }, {
        key: "fromRotationTranslationScaleOrigin",
        value: function fromRotationTranslationScaleOrigin(rotation, translation, scale, origin) {
            // Quaternion math
            var _rotation = _slicedToArray(rotation, 4),
                x = _rotation[0],
                y = _rotation[1],
                z = _rotation[2],
                w = _rotation[3];

            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;

            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;

            var _scale2 = _slicedToArray(scale, 3),
                sx = _scale2[0],
                sy = _scale2[1],
                sz = _scale2[2];

            var _origin = _slicedToArray(origin, 3),
                ox = _origin[0],
                oy = _origin[1],
                oz = _origin[2];

            this[0] = (1 - (yy + zz)) * sx;
            this[1] = (xy + wz) * sx;
            this[2] = (xz - wy) * sx;
            this[3] = 0;
            this[4] = (xy - wz) * sy;
            this[5] = (1 - (xx + zz)) * sy;
            this[6] = (yz + wx) * sy;
            this[7] = 0;
            this[8] = (xz + wy) * sz;
            this[9] = (yz - wx) * sz;
            this[10] = (1 - (xx + yy)) * sz;
            this[11] = 0;
            this[12] = translation[0] + ox - (this[0] * ox + this[4] * oy + this[8] * oz);
            this[13] = translation[1] + oy - (this[1] * ox + this[5] * oy + this[9] * oz);
            this[14] = translation[2] + oz - (this[2] * ox + this[6] * oy + this[10] * oz);
            this[15] = 1;

            return this;
        }
    }, {
        key: "getTranslation",
        value: function getTranslation(mat) {
            var vec3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Float32Array(3);

            vec3[0] = this[12];
            vec3[1] = this[13];
            vec3[2] = this[14];

            return vec3;
        }
    }, {
        key: "getRotation",
        value: function getRotation() {
            var quat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Float32Array(4);

            // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
            var trace = this[0] + this[5] + this[10];

            if (trace > 0) {
                var S = Math.sqrt(trace + 1.0) * 2;
                quat[0] = (this[6] - this[9]) / S;
                quat[1] = (this[8] - this[2]) / S;
                quat[2] = (this[1] - this[4]) / S;
                quat[3] = 0.25 * S;
            } else if (this[0] > this[5] & this[0] > this[10]) {
                var _S = Math.sqrt(1.0 + this[0] - this[5] - this[10]) * 2;
                quat[0] = 0.25 * _S;
                quat[1] = (this[1] + this[4]) / _S;
                quat[2] = (this[8] + this[2]) / _S;
                quat[3] = (this[6] - this[9]) / _S;
            } else if (this[5] > this[10]) {
                var _S2 = Math.sqrt(1.0 + this[5] - this[0] - this[10]);
                quat[0] = (this[1] + this[4]) / _S2 * 2;
                quat[1] = 0.25 * _S2;
                quat[2] = (this[6] + this[9]) / _S2;
                quat[3] = (this[8] - this[2]) / _S2;
            } else {
                var _S3 = Math.sqrt(1.0 + this[10] - this[0] - this[5]) * 2;
                quat[0] = (this[8] + this[2]) / _S3;
                quat[1] = (this[6] + this[9]) / _S3;
                quat[2] = 0.25 * _S3;
                quat[3] = (this[1] - this[4]) / _S3;
            }

            return quat;
        }
    }, {
        key: "frustrum",
        value: function frustrum(left, right, bottom, top, near, far) {
            var rl = 1 / (right - left);
            var tb = 1 / (top - bottom);
            var nf = 1 / (near - far);

            this[0] = near * 2 * rl;
            this.fill(0, 1, 4);
            this[5] = near * 2 * tb;
            this.fill(0, 6, 7);
            this[8] = (right + left) * rl;
            this[9] = (top + bottom) * tb;
            this[10] = (far + near) * nf;
            this[11] = -1;
            this.fill(0, 12, 13);
            this[14] = far * near * 2 * nf;
            this[15] = 0;

            return this;
        }
    }, {
        key: "perspective",
        value: function perspective(fovy, aspect, near, far) {
            var f = 1.0 / Math.tan(fovy / 2);
            var nf = 1 / (near - far);

            this[0] = f / aspect;
            this.fill(0, 1, 4);
            this[5] = f;
            this.fill(0, 6, 9);
            this[10] = (far + near) * nf;
            this[11] = -1;
            this.fill(0, 12, 13);
            this[14] = 2 * far * near * nf;
            this[15] = 0;

            return this;
        }
    }, {
        key: "perspectiveFromFieldOfView",
        value: function perspectiveFromFieldOfView(fov, near, far) {
            var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
            var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
            var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
            var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
            var xScale = 2 / (leftTan + rightTan);
            var yScale = 2 / (upTan + downTan);

            this[0] = xScale;
            this.fill(0, 1, 4);
            this[5] = yScale;
            this.fill(0, 6, 7);
            this[8] = -(leftTan - rightTan) * xScale * 0.5;
            this[9] = (upTan - downTan) * yScale * 0.5;
            this[10] = far / (near - far);
            this[11] = -1.0;
            this.fill(0, 12, 13);
            this[14] = far * near / (near - far);
            this[15] = 0;

            return this;
        }
    }, {
        key: "ortho",
        value: function ortho(left, right, bottom, top, near, far) {
            var lr = 1 / (left - right);
            var bt = 1 / (bottom - top);
            var nf = 1 / (near - far);

            this[0] = -2 * lr;
            this.fill(0, 1, 4);
            this[5] = -2 * bt;
            this.fill(0, 6, 9);
            this[10] = 2 * nf;
            this[11] = 0;
            this[12] = (left + right) * lr;
            this[13] = (top + bottom) * bt;
            this[14] = (far + near) * nf;
            this[15] = 1;

            return this;
        }
    }, {
        key: "lookAt",
        value: function lookAt(eye, center, up) {
            var _eye = _slicedToArray(eye, 3),
                eyex = _eye[0],
                eyey = _eye[1],
                eyez = _eye[2];

            var _up = _slicedToArray(up, 3),
                upx = _up[0],
                upy = _up[1],
                upz = _up[2];

            var _center = _slicedToArray(center, 3),
                centerx = _center[0],
                centery = _center[1],
                centerz = _center[2];

            if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
                return this.identity();
            }

            var z0 = eyex - centerx;
            var z1 = eyey - centery;
            var z2 = eyez - centerz;

            var len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
            z0 *= len;
            z1 *= len;
            z2 *= len;

            var x0 = upy * z2 - upz * z1;
            var x1 = upz * z0 - upx * z2;
            var x2 = upx * z1 - upy * z0;

            len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
            if (!len) {
                x0 = 0;
                x1 = 0;
                x2 = 0;
            } else {
                len = 1 / len;
                x0 *= len;
                x1 *= len;
                x2 *= len;
            }

            var y0 = z1 * x2 - z2 * x1;
            var y1 = z2 * x0 - z0 * x2;
            var y2 = z0 * x1 - z1 * x0;

            len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
            if (!len) {
                y0 = 0;
                y1 = 0;
                y2 = 0;
            } else {
                len = 1 / len;
                y0 *= len;
                y1 *= len;
                y2 *= len;
            }

            this[0] = x0;
            this[1] = y0;
            this[2] = z0;
            this[3] = 0;
            this[4] = x1;
            this[5] = y1;
            this[6] = z1;
            this[7] = 0;
            this[8] = x2;
            this[9] = y2;
            this[10] = z2;
            this[11] = 0;
            this[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
            this[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
            this[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
            this[15] = 1;

            return this;
        }
    }, {
        key: "frob",
        value: function frob() {
            return Math.sqrt(Math.pow(this[0], 2) + Math.pow(this[1], 2) + Math.pow(this[2], 2) + Math.pow(this[3], 2) + Math.pow(this[4], 2) + Math.pow(this[5], 2) + Math.pow(this[6], 2) + Math.pow(this[7], 2) + Math.pow(this[8], 2) + Math.pow(this[9], 2) + Math.pow(this[10], 2) + Math.pow(this[11], 2) + Math.pow(this[12], 2) + Math.pow(this[13], 2) + Math.pow(this[14], 2) + Math.pow(this[15], 2));
        }
    }]);

    return Matrix4x4;
}(Float32Array);

exports.default = Matrix4x4;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Matrix4x = __webpack_require__(3);

var _Matrix4x2 = _interopRequireDefault(_Matrix4x);

var _Uniform2 = __webpack_require__(0);

var _Uniform3 = _interopRequireDefault(_Uniform2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
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

var Cam3D = function (_Uniform) {
    _inherits(Cam3D, _Uniform);

    function Cam3D(label) {
        _classCallCheck(this, Cam3D);

        var _this = _possibleConstructorReturn(this, (Cam3D.__proto__ || Object.getPrototypeOf(Cam3D)).call(this, label, 35676, new _Matrix4x2.default()));

        _this.fovy = 45;
        _this.near = 0.1;
        _this.far = 100;
        _this._matrix = new _Matrix4x2.default();

        _this.updated = true;
        return _this;
    }

    _createClass(Cam3D, [{
        key: 'update',
        value: function update(w, h) {
            this.data.set(this._matrix);
            this.data.perspective(this.fovy * Math.PI / 180, w / h, 0.1, 100.0);

            this.updated = false;
        }
    }, {
        key: 'matrix',
        get: function get() {
            this.updated = true;
            return this._matrix;
        }
    }]);

    return Cam3D;
}(_Uniform3.default);

exports.default = Cam3D;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* 
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

var _Buffer = __webpack_require__(2);

var _Buffer2 = _interopRequireDefault(_Buffer);

var _Attribute = __webpack_require__(1);

var _Attribute2 = _interopRequireDefault(_Attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Geom = function () {
    function Geom() {
        _classCallCheck(this, Geom);

        this.attributes = [];
        this.buffers = [];

        this.hasIndices = false;
        this.numItems = 0;
    }

    _createClass(Geom, [{
        key: 'isInitialized',
        value: function isInitialized() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var buffer = _step.value;

                    if (!buffer.isInitialized()) return false;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }
    }, {
        key: 'addVertices',
        value: function addVertices(label, vertices, dimension) {
            var attribute = new _Attribute2.default(label);
            attribute.setArray(new Float32Array(vertices), 34962 /* gl.ARRAY_BUFFER */);
            attribute.setItems(5126 /* gl.FLOAT */, dimension);

            this.attributes.push(attribute);

            if (this.numItems < 1) this.numItems = vertices.length / dimension;
        }
    }, {
        key: 'addIndices',
        value: function addIndices(indices) {
            this.hasIndices = true;

            var buffer = new _Buffer2.default();

            buffer.setArray(new Uint16Array(indices), 34963 /* gl.ELEMENT_ARRAY_BUFFER */);
            buffer.setItems(5125 /* gl.UNSIGNED_INT */, 1 /* dimension */);

            this.buffers.push(buffer);

            this.numItems = indices.length;
        }
    }, {
        key: 'init',
        value: function init(gl, program) {
            var success = true;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var attribute = _step2.value;

                    if (!attribute.isInitialized()) if (!attribute.init(gl, program)) success = false;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.buffers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var buffer = _step3.value;

                    if (!buffer.isInitialized()) if (!buffer.init(gl, program)) success = false;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return success;
        }
    }, {
        key: 'draw',
        value: function draw(gl, program) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.attributes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var attribute = _step4.value;

                    attribute.draw(gl, program);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.buffers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var buffer = _step5.value;

                    buffer.draw(gl, program);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }
    }, {
        key: 'display',
        value: function display(gl) {
            if (this.hasIndices) gl.drawElements(gl.TRIANGLES, this.numItems, gl.UNSIGNED_SHORT, 0);else gl.drawArrays(gl.TRIANGLES, 0, this.numItems);
        }
    }]);

    return Geom;
}();

exports.default = Geom;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* 
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

var _Matrix4x = __webpack_require__(3);

var _Matrix4x2 = _interopRequireDefault(_Matrix4x);

var _Uniform = __webpack_require__(0);

var _Uniform2 = _interopRequireDefault(_Uniform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mesh3D = function () {
    function Mesh3D(geom, program) {
        _classCallCheck(this, Mesh3D);

        this.geom = geom;
        this.program = program;

        var matrix = new _Matrix4x2.default().identity();
        var matrixU = new _Uniform2.default('uMVMatrix', 35676, matrix);

        this.uniforms = [matrixU];
        this.textures = [];

        this.matrixU = matrixU;
    }

    _createClass(Mesh3D, [{
        key: 'addUniform',
        value: function addUniform(uniform) {
            this.uniforms.push(uniform);
        }
    }, {
        key: 'addTexture',
        value: function addTexture(texture) {
            this.textures.push(texture);
        }
    }, {
        key: 'isInitialized',
        value: function isInitialized() {
            if (!this.program.isInitialized()) return false;

            if (!this.geom.isInitialized()) return false;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.textures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var texture = _step.value;

                    if (!texture.isInitialized()) return false;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }
    }, {
        key: 'init',
        value: function init(gl, globalUniforms) {
            var program = this.program;
            var allUniforms = [].concat(_toConsumableArray(this.uniforms), _toConsumableArray(globalUniforms));
            var success = true;

            if (!this.program.isInitialized()) if (this.program.init(gl, this.geom.attributes, allUniforms, this.textures)) success = false;

            if (!this.geom.isInitialized()) if (this.geom.init(gl, program)) success = false;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.textures[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var texture = _step2.value;

                    if (!texture.isInitialized()) if (!texture.init(gl, program)) success = false;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return success;
        }
    }, {
        key: 'draw',
        value: function draw(gl, globalUniforms) {
            var allUniforms = [].concat(_toConsumableArray(this.uniforms), _toConsumableArray(globalUniforms));
            var program = this.program;

            this.program.draw(gl);
            this.geom.draw(gl, program);

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = allUniforms[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var uniform = _step3.value;

                    uniform.draw(gl, program);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.textures[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var texture = _step4.value;

                    texture.draw(gl, program);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            this.geom.display(gl, program);
            // gl.drawArrays(gl.TRIANGLES, 0, pyramidVertexPositionBuffer.numItems)
        }
    }, {
        key: 'matrix',
        get: function get() {
            return this.matrixU.data;
        }
    }]);

    return Mesh3D;
}();

exports.default = Mesh3D;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var vs = '      \n    attribute vec3 aVertexPosition;\n    attribute vec4 aVertexColor;\n\n    uniform mat4 uMVMatrix;\n    uniform mat4 uPMatrix;\n\n    varying vec4 vColor;\n\n    void main(void) {\n        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n        vColor = aVertexColor;\n    }\n';

var fs = '\n    precision mediump float;\n\n    varying vec4 vColor;\n\n    void main(void) {\n        gl_FragColor = vColor;\n    }\n';

var num = 0;

var Program = function () {
    function Program() {
        var vertexShaderSrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vs;
        var fragmentShaderSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fs;

        _classCallCheck(this, Program);

        this.vertexShaderSrc = vertexShaderSrc;
        this.fragmentShaderSrc = fragmentShaderSrc;

        this.attribLocation = {};
        this.uniformLocation = {};
        this.textureLocation = {};

        this.id = ++num;
    }

    _createClass(Program, [{
        key: 'isInitialized',
        value: function isInitialized() {
            return !!this.pointer;
        }
    }, {
        key: 'getUniformLocation',
        value: function getUniformLocation(label) {
            if (this.uniformLocation.hasOwnProperty(label)) return this.uniformLocation[label];else console.error('The uniform location ' + label + ' don\'nt exist on this program');

            return null;
        }
    }, {
        key: 'getAttribLocation',
        value: function getAttribLocation(label) {
            if (this.attribLocation.hasOwnProperty(label)) return this.attribLocation[label];else console.error('The attribute location ' + label + ' don\'nt exist on this program');

            return null;
        }
    }, {
        key: 'getTextureLocation',
        value: function getTextureLocation(label) {
            if (this.textureLocation.hasOwnProperty(label)) return this.textureLocation[label];else console.error('The texture location ' + label + ' don\'nt exist on this program');

            return null;
        }
    }, {
        key: 'init',
        value: function init(gl, attributes, uniforms, textures) {
            this.vertexShader = this._createShader(gl, 35633 /* gl.VERTEX_SHADER */, this.vertexShaderSrc);
            this.fragmentShader = this._createShader(gl, 35632 /* gl.FRAGMENT_SHADER */, this.fragmentShaderSrc);

            var program = gl.createProgram();
            gl.attachShader(program, this.vertexShader);
            gl.attachShader(program, this.fragmentShader);
            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.error('Shader initialization error');

            gl.useProgram(program);

            // Link buffer / program
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var attribute = _step.value;

                    var attribLocation = gl.getAttribLocation(program, attribute.label);
                    gl.enableVertexAttribArray(attribLocation);
                    this.attribLocation[attribute.label] = attribLocation;
                }

                // Link uniform / program
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = uniforms[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var uniform = _step2.value;

                    var uniformLocation = gl.getUniformLocation(program, uniform.label);
                    this.uniformLocation[uniform.label] = uniformLocation;
                }

                // Link textures / program
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = textures[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var texture = _step3.value;

                    var textureLocation = program.samplerUniform = gl.getUniformLocation(program, texture.label);
                    this.textureLocation[texture.label] = textureLocation;
                    console.log(texture.label, textureLocation, textures);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            this.pointer = program;

            return true;
        }
    }, {
        key: 'draw',
        value: function draw(gl) {
            gl.useProgram(this.pointer);
        }
    }, {
        key: '_createShader',
        value: function _createShader(gl, type, src) {
            var shader = gl.createShader(type);
            gl.shaderSource(shader, src);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                return console.error('Une erreur est survenue au cours de la compilation du shader: ' + gl.getShaderInfoLog(shader));
            }

            return shader;
        }
    }]);

    return Program;
}();

exports.default = Program;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Scene = function () {
    function Scene(canvas, cam) {
        _classCallCheck(this, Scene);

        this.canvas = canvas;
        this.init(canvas);
        this.meshs = [];
        this.cam = cam;
        this.uniforms = [cam];
    }

    _createClass(Scene, [{
        key: '_addCamToMeshs',
        value: function _addCamToMeshs() {
            var cam = this.cam;
            this.uniforms.push(cam);
        }

        /*addCam(cam)
        {
            this.cam = cam
        }*/

    }, {
        key: 'addMesh',
        value: function addMesh(mesh) {
            this.meshs.push(mesh);

            if (!mesh.isInitialized()) mesh.init(this.gl, this.uniforms);
        }
    }, {
        key: 'rmMesh',
        value: function rmMesh(mesh) {
            var id = this.meshs.indexOf(mesh);
            if (id > -1) this.meshs.splice(id, 1);
        }
    }, {
        key: 'init',
        value: function init(canvas) {
            var gl = void 0;

            try {
                gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                gl.viewportWidth = canvas.width;
                gl.viewportHeight = canvas.height;
            } catch (e) {
                console.error('Could not initialise WebGL:', e.message);
            }

            if (!gl) {
                console.error('Could not initialise WebGL');
            }

            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.enable(gl.DEPTH_TEST);

            this.gl = gl;
        }
    }, {
        key: 'draw',
        value: function draw() {
            var gl = this.gl;

            gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            if (this.cam.updated) this.cam.update(gl.viewportWidth, gl.viewportHeight);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.meshs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var mesh = _step.value;

                    if (mesh.isInitialized()) mesh.draw(gl, this.uniforms);else mesh.init(gl, this.uniforms);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Scene;
}();

exports.default = Scene;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Texture = function () {
    function Texture(label) {
        _classCallCheck(this, Texture);

        this.label = label;

        this.onLoaded = function (texture) {
            console.log('Texture loaded:', texture.src);
        };

        this.pointer = null;
        this.parameters = {
            9729: 9987
        };
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


    _createClass(Texture, [{
        key: 'setParameters',
        value: function setParameters(target, pName, param) {}
    }, {
        key: 'isInitialized',
        value: function isInitialized() {
            return !!this.pointer;
        }
    }, {
        key: 'load',
        value: function load(URL, callback) {
            var _this = this;

            this.src = URL;

            var img = new Image();
            img.onload = function () {
                _this.img = img;
                _this.onLoaded(_this);
            };
            img.src = URL;
        }
    }, {
        key: '_isPowerOf2',
        value: function _isPowerOf2(val) {
            return (val & val - 1) == 0;
        }
    }, {
        key: 'init',
        value: function init(gl, program) {
            var texture = this.pointer || gl.createTexture();

            var img = this.img;
            if (!img) return false;

            // Loaded
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            if (this._isPowerOf2(img.width) && this._isPowerOf2(img.height)) {
                gl.generateMipmap(gl.TEXTURE_2D);
                // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            } else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            }

            gl.bindTexture(gl.TEXTURE_2D, null);

            this.pointer = texture;

            return true;
        }
    }, {
        key: 'draw',
        value: function draw(gl, program) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this.pointer);
            gl.uniform1i(program.getTextureLocation(this.label), 0);
        }
    }]);

    return Texture;
}();

exports.default = Texture;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Attribute = __webpack_require__(1);

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Uniform = __webpack_require__(0);

var _Uniform2 = _interopRequireDefault(_Uniform);

var _Program = __webpack_require__(7);

var _Program2 = _interopRequireDefault(_Program);

var _Geom = __webpack_require__(5);

var _Geom2 = _interopRequireDefault(_Geom);

var _Mesh3D = __webpack_require__(6);

var _Mesh3D2 = _interopRequireDefault(_Mesh3D);

var _Cam3D = __webpack_require__(4);

var _Cam3D2 = _interopRequireDefault(_Cam3D);

var _Scene = __webpack_require__(8);

var _Scene2 = _interopRequireDefault(_Scene);

var _Texture = __webpack_require__(9);

var _Texture2 = _interopRequireDefault(_Texture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var canvas = document.body.querySelector('canvas');

// Camera
var cam3D = new _Cam3D2.default('uPMatrix');
cam3D.matrix.translate([-1.5, 0.0, -7.0]);

// Scene
var scene = new _Scene2.default(canvas, cam3D);

// Programs
var colorProgram = new _Program2.default();

var fogVertexShader = '\n    attribute vec3 aVertexPosition;\n    attribute vec4 aVertexColor;\n\n    uniform mat4 uMVMatrix;\n    uniform mat4 uPMatrix;\n\n    varying vec4 vColor;\n\n    void main(void) {\n        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n        float zDepth = 0.2 * (8.0 - gl_Position.z);\n        vec4 modifyColor = vec4(aVertexColor.rgb * zDepth, aVertexColor.a);\n        vColor = modifyColor;\n    }\n';
var fogProgram = new _Program2.default(fogVertexShader);

// ----------------------------
//
//      PYRAMID RAINBOW
//
// ----------------------------

// Pyramid
var pyramidVertices = [
// Front face
0.0, 1.0, 0.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0,

// Right face
0.0, 1.0, 0.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,

// Back face
0.0, 1.0, 0.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0,

// Left face
0.0, 1.0, 0.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0];
var pyramidColors = [
// Front face
1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0,

// Right face
1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0,

// Back face
1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0,

// Left face
1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0];
var pyramidGeom = new _Geom2.default();
pyramidGeom.addVertices('aVertexPosition', pyramidVertices, 3);
pyramidGeom.addVertices('aVertexColor', pyramidColors, 4);

var pyramidMesh = new _Mesh3D2.default(pyramidGeom, colorProgram);
pyramidMesh.matrix.translate([-1.5, -1.5, -8.0]);
scene.addMesh(pyramidMesh);

// ----------------------------
//
//      CUBE RAINBOW
//
// ----------------------------


// Square
var cubeVertices = [
// Front face
-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

// Back face
-1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

// Top face
-1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

// Bottom face
-1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

// Right face
1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

// Left face
-1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0];
var cubeIndices = [0, 1, 2, 0, 2, 3, // Front face
4, 5, 6, 4, 6, 7, // Back face
8, 9, 10, 8, 10, 11, // Top face
12, 13, 14, 12, 14, 15, // Bottom face
16, 17, 18, 16, 18, 19, // Right face
20, 21, 22, 20, 22, 23 // Left face
];
var cubeColors = [[1.0, 0.0, 0.0, 1.0], // Front face
[1.0, 1.0, 0.0, 1.0], // Back face
[0.0, 1.0, 0.0, 1.0], // Top face
[1.0, 0.5, 0.5, 1.0], // Bottom face
[1.0, 0.0, 1.0, 1.0], // Right face
[0.0, 0.0, 1.0, 1.0] // Left face
];

var unpackedCubeColors = [];
for (var i in cubeColors) {
    var color = cubeColors[i];
    for (var j = 0; j < 4; j++) {
        unpackedCubeColors = unpackedCubeColors.concat(color);
    }
}

var cubeGeom = new _Geom2.default();
cubeGeom.addVertices('aVertexPosition', cubeVertices, 3);
cubeGeom.addVertices('aVertexColor', unpackedCubeColors, 4);
cubeGeom.addIndices(cubeIndices);

var cubeMesh = new _Mesh3D2.default(cubeGeom, fogProgram);
cubeMesh.matrix.translate([1.5, -1.5, -8.0]);
scene.addMesh(cubeMesh);

// ----------------------------
//
//      CUBE WOOD
//
// ----------------------------

var vertexTextureShader = '   \n    attribute vec3 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    uniform mat4 uMVMatrix;\n    uniform mat4 uPMatrix;\n\n    varying vec2 vTextureCoord;\n\n    void main(void) {\n        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n        vTextureCoord = aTextureCoord;\n    }';

var fragmentTextureShader = '\n    precision mediump float;\n\n    varying vec2 vTextureCoord;\n\n    uniform sampler2D uSampler;\n\n    void main(void) {\n        gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n    }';

var texturedProgram = new _Program2.default(vertexTextureShader, fragmentTextureShader);

var cubeUV = [
// Front face
0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,

// Back face
1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0,

// Top face
0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0,

// Bottom face
1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,

// Right face
1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0,

// Left face
0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];

var cubeTexture = new _Texture2.default('uSampler');
cubeTexture.load('cube-diffuse.jpg');

var cubeTexturedGeom = new _Geom2.default();
cubeTexturedGeom.addVertices('aVertexPosition', cubeVertices, 3);
cubeTexturedGeom.addVertices('aTextureCoord', cubeUV, 2);
cubeTexturedGeom.addIndices(cubeIndices);

var cubeTexturedMesh = new _Mesh3D2.default(cubeTexturedGeom, texturedProgram);
cubeTexturedMesh.addTexture(cubeTexture);
cubeTexturedMesh.matrix.translate([1.5, 1.5, -8.0]);
scene.addMesh(cubeTexturedMesh);

refresh();
function refresh() {
    pyramidMesh.matrix.rotate(0.005, [0, 1, 0]);
    cubeMesh.matrix.rotate(0.01, [0, 1, 0]);
    cubeTexturedMesh.matrix.rotate(-0.01, [0, 1, 0]);

    scene.draw();
    requestAnimationFrame(refresh);
}

/***/ })
/******/ ]);