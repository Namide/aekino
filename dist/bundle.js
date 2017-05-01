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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
        value: function draw(gl, location) {
            switch (this.type) {
                case 35676:
                    // gl.FLOAT_MAT4
                    {
                        // const location = program.getUniformLocation(this.label)
                        gl.uniformMatrix4fv(location, false, this.data);
                        break;
                    }
                case 35665:
                    // gl.FLOAT_VEC3
                    {
                        // const location = program.getUniformLocation(this.label)
                        gl.uniform3f.apply(gl, [location].concat(_toConsumableArray(this.data)));
                        break;
                    }
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
        value: function draw(gl, location) {
            _get(Attribute.prototype.__proto__ || Object.getPrototypeOf(Attribute.prototype), 'draw', this).call(this, gl);
            // const location = program.getAttribLocation(this.label)
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
        value: function init(gl) {
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

var EPSILON = 0.000001;

// Improve performances and weight
function setMat(a, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {
    a[0] = m0;
    a[1] = m1;
    a[2] = m2;
    a[3] = m3;
    a[4] = m4;
    a[5] = m5;
    a[6] = m6;
    a[7] = m7;
    a[8] = m8;
    a[9] = m9;
    a[10] = m10;
    a[11] = m11;
    a[12] = m12;
    a[13] = m13;
    a[14] = m14;
    a[15] = m15;
}

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
            setMat(this, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

            return this;
        }
    }, {
        key: "add",
        value: function add(mat4x4) {
            this[0] += mat4x4[0];
            this[1] += mat4x4[1];
            this[2] += mat4x4[2];
            this[3] += mat4x4[3];
            this[4] += mat4x4[4];
            this[5] += mat4x4[5];
            this[6] += mat4x4[6];
            this[7] += mat4x4[7];
            this[8] += mat4x4[8];
            this[9] += mat4x4[9];
            this[10] += mat4x4[10];
            this[11] += mat4x4[11];
            this[12] += mat4x4[12];
            this[13] += mat4x4[13];
            this[14] += mat4x4[14];
            this[15] += mat4x4[15];

            return this;
        }
    }, {
        key: "subtract",
        value: function subtract(mat4x4) {
            this[0] -= mat4x4[0];
            this[1] -= mat4x4[1];
            this[2] -= mat4x4[2];
            this[3] -= mat4x4[3];
            this[4] -= mat4x4[4];
            this[5] -= mat4x4[5];
            this[6] -= mat4x4[6];
            this[7] -= mat4x4[7];
            this[8] -= mat4x4[8];
            this[9] -= mat4x4[9];
            this[10] -= mat4x4[10];
            this[11] -= mat4x4[11];
            this[12] -= mat4x4[12];
            this[13] -= mat4x4[13];
            this[14] -= mat4x4[14];
            this[15] -= mat4x4[15];

            return this;
        }
    }, {
        key: "multiplyScalar",
        value: function multiplyScalar(scalar) {
            this[0] *= scalar;
            this[1] *= scalar;
            this[2] *= scalar;
            this[3] *= scalar;
            this[4] *= scalar;
            this[5] *= scalar;
            this[6] *= scalar;
            this[7] *= scalar;
            this[8] *= scalar;
            this[9] *= scalar;
            this[10] *= scalar;
            this[11] *= scalar;
            this[12] *= scalar;
            this[13] *= scalar;
            this[14] *= scalar;
            this[15] *= scalar;

            return this;
        }
    }, {
        key: "multiplyScalarAndAdd",
        value: function multiplyScalarAndAdd(mat4x4, scalar) {
            this[0] += mat4x4[0] * scalar;
            this[1] += mat4x4[1] * scalar;
            this[2] += mat4x4[2] * scalar;
            this[3] += mat4x4[3] * scalar;
            this[4] += mat4x4[4] * scalar;
            this[5] += mat4x4[5] * scalar;
            this[6] += mat4x4[6] * scalar;
            this[7] += mat4x4[7] * scalar;
            this[8] += mat4x4[8] * scalar;
            this[9] += mat4x4[9] * scalar;
            this[10] += mat4x4[10] * scalar;
            this[11] += mat4x4[11] * scalar;
            this[12] += mat4x4[12] * scalar;
            this[13] += mat4x4[13] * scalar;
            this[14] += mat4x4[14] * scalar;
            this[15] += mat4x4[15] * scalar;

            return this;
        }
    }, {
        key: "exactEquals",
        value: function exactEquals(mat4x4) {
            return this[0] === mat4x4[0] && this[1] === mat4x4[1] && this[2] === mat4x4[2] && this[3] === mat4x4[3] && this[4] === mat4x4[4] && this[5] === mat4x4[5] && this[6] === mat4x4[6] && this[7] === mat4x4[7] && this[8] === mat4x4[8] && this[9] === mat4x4[9] && this[10] === mat4x4[10] && this[11] === mat4x4[11] && this[12] === mat4x4[12] && this[13] === mat4x4[13] && this[14] === mat4x4[14] && this[15] === mat4x4[15];
        }
    }, {
        key: "equals",
        value: function equals(mat4x4) {
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

            var _mat4x = _slicedToArray(mat4x4, 16),
                b0 = _mat4x[0],
                b1 = _mat4x[1],
                b2 = _mat4x[2],
                b3 = _mat4x[3],
                b4 = _mat4x[4],
                b5 = _mat4x[5],
                b6 = _mat4x[6],
                b7 = _mat4x[7],
                b8 = _mat4x[8],
                b9 = _mat4x[9],
                b10 = _mat4x[10],
                b11 = _mat4x[11],
                b12 = _mat4x[12],
                b13 = _mat4x[13],
                b14 = _mat4x[14],
                b15 = _mat4x[15];

            return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
        }
    }, {
        key: "transpose",
        value: function transpose(mat4x4) {
            if (mat4x4 === this) {
                var m1 = mat4x4[1];
                var m2 = mat4x4[2];
                var m3 = mat4x4[3];
                var m12 = mat4x4[6];
                var m13 = mat4x4[7];
                var m23 = mat4x4[11];

                this[1] = mat4x4[4];
                this[2] = mat4x4[8];
                this[3] = mat4x4[12];
                this[4] = m1;
                this[6] = mat4x4[9];
                this[7] = mat4x4[13];
                this[8] = m2;
                this[9] = m12;
                this[11] = mat4x4[14];
                this[12] = m3;
                this[13] = m13;
                this[14] = m23;
            } else {
                setMat(this, mat4x4[0], mat4x4[4], mat4x4[8], mat4x4[12], mat4x4[1], mat4x4[5], mat4x4[9], mat4x4[13], mat4x4[2], mat4x4[6], mat4x4[10], mat4x4[14], mat4x4[3], mat4x4[7], mat4x4[11], mat4x4[15]);
            }

            return this;
        }
    }, {
        key: "invert",
        value: function invert() {
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

            if (!det) return this;

            det = 1.0 / det;

            setMat(this, (a11 * b11 - a12 * b10 + a13 * b09) * det, (a02 * b10 - a01 * b11 - a03 * b09) * det, (a31 * b05 - a32 * b04 + a33 * b03) * det, (a22 * b04 - a21 * b05 - a23 * b03) * det, (a12 * b08 - a10 * b11 - a13 * b07) * det, (a00 * b11 - a02 * b08 + a03 * b07) * det, (a32 * b02 - a30 * b05 - a33 * b01) * det, (a20 * b05 - a22 * b02 + a23 * b01) * det, (a10 * b10 - a11 * b08 + a13 * b06) * det, (a01 * b08 - a00 * b10 - a03 * b06) * det, (a30 * b04 - a31 * b02 + a33 * b00) * det, (a21 * b02 - a20 * b04 - a23 * b00) * det, (a11 * b07 - a10 * b09 - a12 * b06) * det, (a00 * b09 - a01 * b07 + a02 * b06) * det, (a31 * b01 - a30 * b03 - a32 * b00) * det, (a20 * b03 - a21 * b01 + a22 * b00) * det);

            return this;
        }
    }, {
        key: "adjoint",
        value: function adjoint() {
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

            setMat(this, a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22), -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22)), a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12), -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12)), -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22)), a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22), -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12)), a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12), a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21), -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21)), a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11), -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11)), -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21)), a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21), -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11)), a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));

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

            var b00 = a00 * a11 - a01 * a10,
                b01 = a00 * a12 - a02 * a10,
                b02 = a00 * a13 - a03 * a10,
                b03 = a01 * a12 - a02 * a11,
                b04 = a01 * a13 - a03 * a11,
                b05 = a02 * a13 - a03 * a12,
                b06 = a20 * a31 - a21 * a30,
                b07 = a20 * a32 - a22 * a30,
                b08 = a20 * a33 - a23 * a30,
                b09 = a21 * a32 - a22 * a31,
                b10 = a21 * a33 - a23 * a31,
                b11 = a22 * a33 - a23 * a32;

            return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        }
    }, {
        key: "multiply",
        value: function multiply(mat4x4) {
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


            var _mat4x2 = _slicedToArray(mat4x4, 4),
                b0 = _mat4x2[0],
                b1 = _mat4x2[1],
                b2 = _mat4x2[2],
                b3 = _mat4x2[3];

            this[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

            b0 = mat4x4[4];
            b1 = mat4x4[5];
            b2 = mat4x4[6];
            b3 = mat4x4[7];

            this[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

            b0 = mat4x4[8];
            b1 = mat4x4[9];
            b2 = mat4x4[10];
            b3 = mat4x4[11];
            this[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

            b0 = mat4x4[12];
            b1 = mat4x4[13];
            b2 = mat4x4[14];
            b3 = mat4x4[15];
            this[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

            return this;
        }
    }, {
        key: "translate",
        value: function translate(_ref6) {
            var _ref7 = _slicedToArray(_ref6, 3),
                x = _ref7[0],
                y = _ref7[1],
                z = _ref7[2];

            this[12] = this[0] * x + this[4] * y + this[8] * z + this[12];
            this[13] = this[1] * x + this[5] * y + this[9] * z + this[13];
            this[14] = this[2] * x + this[6] * y + this[10] * z + this[14];
            this[15] = this[3] * x + this[7] * y + this[11] * z + this[15];

            return this;
        }
    }, {
        key: "scale",
        value: function scale(_ref8) {
            var _ref9 = _slicedToArray(_ref8, 3),
                x = _ref9[0],
                y = _ref9[1],
                z = _ref9[2];

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
        value: function rotate(rad, _ref10) {
            var _ref11 = _slicedToArray(_ref10, 3),
                x = _ref11[0],
                y = _ref11[1],
                z = _ref11[2];

            var len = Math.sqrt(x * x + y * y + z * z);

            if (Math.abs(len) > EPSILON) {
                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;

                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c;

                var _ref12 = _slicedToArray(this, 12),
                    a00 = _ref12[0],
                    a01 = _ref12[1],
                    _a = _ref12[2],
                    a03 = _ref12[3],
                    a10 = _ref12[4],
                    a11 = _ref12[5],
                    a12 = _ref12[6],
                    a13 = _ref12[7],
                    a20 = _ref12[8],
                    a21 = _ref12[9],
                    a22 = _ref12[10],
                    a23 = _ref12[11];

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

            var _ref13 = _slicedToArray(this, 8),
                a00 = _ref13[0],
                a01 = _ref13[1],
                a0 = _ref13[2],
                a03 = _ref13[3],
                a10 = _ref13[4],
                a11 = _ref13[5],
                a12 = _ref13[6],
                a13 = _ref13[7];

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
            setMat(this, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, vec3[0], vec3[1], vec3[2], 1);

            return this;
        }
    }, {
        key: "fromScaling",
        value: function fromScaling(vec3) {
            setMat(this, vec3[0], 0, 0, 0, 0, vec3[1], 0, 0, 0, 0, vec3[2], 0, 0, 0, 0, 1);

            return this;
        }
    }, {
        key: "fromRotation",
        value: function fromRotation(rad, _ref14) {
            var _ref15 = _slicedToArray(_ref14, 3),
                x = _ref15[0],
                y = _ref15[1],
                z = _ref15[2];

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
                setMat(this, x * x * t + c, y * x * t + z * s, z * x * t - y * s, 0, x * y * t - z * s, y * y * t + c, z * y * t + x * s, 0, x * z * t + y * s, y * z * t - x * s, z * z * t + c, 0, 0, 0, 0, 1);
            }

            return this;
        }
    }, {
        key: "fromXRotation",
        value: function fromXRotation(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            // Perform axis-specific matrix multiplication
            setMat(this, 1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1);

            return this;
        }
    }, {
        key: "fromYRotation",
        value: function fromYRotation(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            // Perform axis-specific matrix multiplication
            setMat(this, c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
            return this;
        }
    }, {
        key: "fromZRotation",
        value: function fromZRotation(rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);

            // Perform axis-specific matrix multiplication
            setMat(this, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

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

            setMat(this, 1 - yy - zz, yx + wz, zx - wy, 0, yx - wz, 1 - xx - zz, zy + wx, 0, zx + wy, zy - wx, 1 - xx - yy, 0, 0, 0, 0, 1);

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

            setMat(this, 1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, vec3[0], vec3[1], vec3[2], 1);

            return this;
        }
    }, {
        key: "fromRotationTranslationScale",
        value: function fromRotationTranslationScale(quat, vec3, _ref16) {
            var _ref17 = _slicedToArray(_ref16, 3),
                sx = _ref17[0],
                sy = _ref17[1],
                sz = _ref17[2];

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

            setMat(this, (1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0, (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0, (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0, vec3[0], vec3[1], vec3[2], 1);

            return this;
        }
    }, {
        key: "fromRotationTranslationScaleOrigin",
        value: function fromRotationTranslationScaleOrigin(rot, trans, scale, origin) {
            // Quaternion math
            var _rot = _slicedToArray(rot, 4),
                x = _rot[0],
                y = _rot[1],
                z = _rot[2],
                w = _rot[3];

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

            var _origin = _slicedToArray(origin, 3),
                ox = _origin[0],
                oy = _origin[1],
                oz = _origin[2];

            setMat(this, (1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0, (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0, (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0, trans[0] + ox - (this[0] * ox + this[4] * oy + this[8] * oz), trans[1] + oy - (this[1] * ox + this[5] * oy + this[9] * oz), trans[2] + oz - (this[2] * ox + this[6] * oy + this[10] * oz), 1);

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

            setMat(this, near * 2 * rl, 0, 0, 0, 0, near * 2 * tb, 0, 0, (right + left) * rl, (top + bottom) * tb, (far + near) * nf, -1, 0, 0, far * near * 2 * nf, 0);

            return this;
        }
    }, {
        key: "perspective",
        value: function perspective(fovy, aspect, near, far) {
            var f = 1.0 / Math.tan(fovy / 2);
            var nf = 1 / (near - far);

            setMat(this, f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0);

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

            setMat(this, xScale, 0, 0, 0, 0, yScale, 0, 0, -(leftTan - rightTan) * xScale * 0.5, (upTan - downTan) * yScale * 0.5, far / (near - far), -1.0, 0, 0, far * near / (near - far), 0);

            return this;
        }
    }, {
        key: "ortho",
        value: function ortho(left, right, bottom, top, near, far) {
            var lr = 1 / (left - right);
            var bt = 1 / (bottom - top);
            var nf = 1 / (near - far);

            setMat(this, -2 * lr, 0, 0, 0, 0, -2 * bt, 0, 0, 0, 0, 2 * nf, 0, (left + right) * lr, (top + bottom) * bt, (far + near) * nf, 1);

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

            setMat(this, x0, y0, z0, 0, x1, y1, z1, 0, x2, y2, z2, 0, -(x0 * eyex + x1 * eyey + x2 * eyez), -(y0 * eyex + y1 * eyey + y2 * eyez), -(z0 * eyex + z1 * eyey + z2 * eyez), 1);

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

    /*isInitialized()
    {
        for (const buffer of this.attributes)
            if (!buffer.isInitialized())
                return false
        
        return true
    }*/

    _createClass(Geom, [{
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
/* 5 */
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
        this.textureIndex = {};
        this.textureNum = 0;

        this.id = ++num;
    }

    _createClass(Program, [{
        key: 'isInitialized',
        value: function isInitialized() {
            return !!this.pointer;
        }
    }, {
        key: 'init',
        value: function init(gl) {
            this.vertexShader = this._createShader(gl, 35633 /* gl.VERTEX_SHADER */, this.vertexShaderSrc);
            this.fragmentShader = this._createShader(gl, 35632 /* gl.FRAGMENT_SHADER */, this.fragmentShaderSrc);

            var program = gl.createProgram();
            gl.attachShader(program, this.vertexShader);
            gl.attachShader(program, this.fragmentShader);
            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error('Shader initialization error');
                return false;
            }

            gl.useProgram(program);

            this.pointer = program;

            return true;
        }
    }, {
        key: 'getAttribLocation',
        value: function getAttribLocation(gl, attribute) {
            var label = attribute.label;
            if (!this.attribLocation.hasOwnProperty(label)) {
                var attribLocation = gl.getAttribLocation(this.pointer, label);
                gl.enableVertexAttribArray(attribLocation);
                this.attribLocation[label] = attribLocation;
                return attribLocation;
            }

            return this.attribLocation[label];
        }
    }, {
        key: 'getUniformLocation',
        value: function getUniformLocation(gl, uniform) {
            var label = uniform.label;
            if (!this.uniformLocation.hasOwnProperty(label)) {
                var uniformLocation = gl.getUniformLocation(this.pointer, label);
                this.uniformLocation[label] = uniformLocation;
                return uniformLocation;
            }

            return this.uniformLocation[label];
        }
    }, {
        key: 'getTextureLocationIndex',
        value: function getTextureLocationIndex(gl, texture) {
            var label = texture.label;
            if (!this.textureLocation.hasOwnProperty(label) || !this.textureIndex.hasOwnProperty(label)) {
                var textureLocation = gl.getUniformLocation(this.pointer, texture.label);
                this.textureLocation[label] = textureLocation;
                this.textureIndex[label] = this.textureNum;
                return [textureLocation, this.textureNum++];
            }

            return [this.textureLocation[label], this.textureIndex[label]];
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
/* 6 */
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
        _this.far = 1000;
        _this._matrix = new _Matrix4x2.default();

        _this.updated = true;
        return _this;
    }

    _createClass(Cam3D, [{
        key: 'update',
        value: function update(w, h) {
            this.data.perspective(this.fovy * Math.PI / 180, w / h, 0.1, 100.0);
            this.data.multiply(this._matrix);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var Mesh = function () {
    function Mesh(geom, program) {
        _classCallCheck(this, Mesh);

        this.geom = geom;
        this.program = program;

        this.uniforms = [];
        this.textures = [];

        this.localCalls = [];
        this.globalCalls = [];

        this._isInitialized = false;
    }

    _createClass(Mesh, [{
        key: "addUniform",
        value: function addUniform(uniform) {
            this.uniforms.push(uniform);
        }
    }, {
        key: "addTexture",
        value: function addTexture(texture) {
            this.textures.push(texture);
        }
    }, {
        key: "isInitialized",
        value: function isInitialized() {
            var success = this._isInitialized;

            if (success) return success;

            if (!this.program.isInitialized()) success = false;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.geom.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var attribute = _step.value;

                    if (!attribute.isInitialized()) success = false;
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

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.geom.buffers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var buffer = _step2.value;

                    if (!buffer.isInitialized()) success = false;
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
                for (var _iterator3 = this.textures[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var texture = _step3.value;

                    if (!texture.isInitialized()) success = false;
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

        // GET LOCATIONS (AND INDEX) AND SAVE IT FOR CALLS

    }, {
        key: "_setCalls",
        value: function _setCalls(gl, globalUniforms) {
            var program = this.program;

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.geom.attributes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var attribute = _step4.value;

                    var location = program.getAttribLocation(gl, attribute);
                    this.localCalls.push(attribute.draw.bind(attribute, gl, location));
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
                for (var _iterator5 = this.geom.buffers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var buffer = _step5.value;

                    this.localCalls.push(buffer.draw.bind(buffer, gl));
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

            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.uniforms[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var uniform = _step6.value;

                    var _location = program.getUniformLocation(gl, uniform);
                    this.localCalls.push(uniform.draw.bind(uniform, gl, _location));
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = this.textures[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var texture = _step7.value;

                    var _program$getTextureLo = program.getTextureLocationIndex(gl, texture),
                        _program$getTextureLo2 = _slicedToArray(_program$getTextureLo, 2),
                        _location2 = _program$getTextureLo2[0],
                        index = _program$getTextureLo2[1];

                    this.localCalls.push(texture.draw.bind(texture, gl, _location2, index));
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = globalUniforms[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var _uniform = _step8.value;

                    var _location3 = program.getUniformLocation(gl, _uniform);
                    this.globalCalls.push(_uniform.draw.bind(_uniform, gl, _location3));
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }
        }
    }, {
        key: "_initData",
        value: function _initData(gl) {
            var program = this.program;

            var success = true;

            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = this.geom.attributes[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var attribute = _step9.value;

                    if (!attribute.isInitialized()) if (!attribute.init(gl)) success = false;
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = this.geom.buffers[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var buffer = _step10.value;

                    if (!buffer.isInitialized()) if (!buffer.init(gl)) success = false;
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = this.textures[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var texture = _step11.value;

                    if (!texture.isInitialized()) if (!texture.init(gl)) success = false;
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }

            return success;
        }
    }, {
        key: "init",
        value: function init(gl, globalUniforms) {
            var program = this.program;
            var success = true;

            // Use program
            if (!this.program.isInitialized()) if (!this.program.init(gl)) success = false;else this.program.draw(gl);

            // Init all mesh data (textures, buffers, attributes, uniforms)
            if (!this._initData(gl)) success = false;

            // Store all calls (mesh data + global data)
            if (success && this.localCalls.length < 1) this._setCalls(gl, globalUniforms);

            this._isInitialized = success;
            return success;
        }
    }, {
        key: "draw",
        value: function draw(gl) {
            var sameProgram = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // Use program
            if (!sameProgram) this.program.draw(gl);

            // Call local
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
                for (var _iterator12 = this.localCalls[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var callback = _step12.value;

                    callback();
                } // Call global
            } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
                        _iterator12.return();
                    }
                } finally {
                    if (_didIteratorError12) {
                        throw _iteratorError12;
                    }
                }
            }

            if (!sameProgram) {
                var _iteratorNormalCompletion13 = true;
                var _didIteratorError13 = false;
                var _iteratorError13 = undefined;

                try {
                    for (var _iterator13 = this.globalCalls[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                        var _callback = _step13.value;

                        _callback();
                    }
                } catch (err) {
                    _didIteratorError13 = true;
                    _iteratorError13 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion13 && _iterator13.return) {
                            _iterator13.return();
                        }
                    } finally {
                        if (_didIteratorError13) {
                            throw _iteratorError13;
                        }
                    }
                }
            } // Draw mesh
            this.geom.display(gl);
        }
    }]);

    return Mesh;
}();

exports.default = Mesh;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

        this.depthTest = true;
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
        key: 'resize',
        value: function resize(w, h) {
            var gl = this.gl;
            gl.viewportWidth = w;
            gl.viewportHeight = h;
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

            this.gl = gl;
        }
    }, {
        key: 'draw',
        value: function draw() {
            var gl = this.gl;

            gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            if (this.cam.updated) this.cam.update(gl.viewportWidth, gl.viewportHeight);

            var lastProgram = null;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.meshs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var mesh = _step.value;

                    if (mesh.isInitialized()) {
                        mesh.draw(gl, mesh.program === lastProgram);
                        lastProgram = mesh.program;
                    } else {
                        mesh.init(gl, this.uniforms);
                        lastProgram = null;
                    }
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
    }, {
        key: 'depthTest',
        set: function set(depthTest) {
            var gl = this.gl;

            if (!!depthTest) gl.enable(gl.DEPTH_TEST);else gl.disable(gl.DEPTH_TEST);

            this._depthTest = !!depthTest;
        },
        get: function get() {
            return this._depthTest;
        }
    }, {
        key: 'bgColor',
        set: function set(_ref) {
            var _ref2 = _slicedToArray(_ref, 4),
                r = _ref2[0],
                g = _ref2[1],
                b = _ref2[2],
                _ref2$ = _ref2[3],
                a = _ref2$ === undefined ? 1 : _ref2$;

            this.gl.clearColor(r, g, b, a);
            this._bgColor = [r, g, b, a];
        },
        get: function get() {
            return this._bgColor;
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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Texture2 = __webpack_require__(12);

var _Texture3 = _interopRequireDefault(_Texture2);

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

function isMultOf(val, mult) {
    return Number.isInteger(val / mult);
}

var SmartTexture = function (_Texture) {
    _inherits(SmartTexture, _Texture);

    function SmartTexture(label) {
        _classCallCheck(this, SmartTexture);

        var _this = _possibleConstructorReturn(this, (SmartTexture.__proto__ || Object.getPrototypeOf(SmartTexture)).call(this, label));

        _this.srcs = [];
        return _this;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/


    _createClass(SmartTexture, [{
        key: 'addDxt5URL',
        value: function addDxt5URL(_ref) {
            var src = _ref.src,
                width = _ref.width,
                height = _ref.height,
                format = _ref.format,
                priority = _ref.priority;

            var byteLength = floor((width + 3) * 0.25) * floor((height + 3) * 0.25) * 16;
            var level = isMultOf(width, 4) && isMultOf(height, 4) ? 0 : 1;

            // var formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
        }
    }, {
        key: 'addURL',
        value: function addURL(URL) {
            var _this2 = this;

            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var imgData = {
                size: size,
                src: URL,
                img: null,
                priority: 0,
                init: null
            };

            imgData.init = function (gl) {
                gl.bindTexture(gl.TEXTURE_2D, _this2.pointer);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

                gl.texImage2D(gl.TEXTURE_2D, 0, 6408 /* gl.RGBA */, _this2.format, gl.UNSIGNED_BYTE, imgData.img);
                _Texture3.default.SETUP(gl, imgData.img);
                // gl.bindTexture(gl.TEXTURE_2D, null)
            };

            this.srcs.push(imgData);
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

    }, {
        key: 'init',
        value: function init(gl, program) {
            var _this3 = this;

            var success = _get(SmartTexture.prototype.__proto__ || Object.getPrototypeOf(SmartTexture.prototype), 'init', this).call(this, gl, program);

            var texture = this.pointer;

            var changeImg = function changeImg(newImg) {
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

                gl.texImage2D(gl.TEXTURE_2D, 0, newImg.internalformat, _this3.format, gl.UNSIGNED_BYTE, newImg.img);
                _Texture3.default.SETUP(gl, newImg.img);
                // gl.bindTexture(gl.TEXTURE_2D, null)
            };

            SmartTexture.START_LOAD(gl, this.srcs);
            return success;
        }
    }], [{
        key: 'START_LOAD',
        value: function START_LOAD(gl, srcs) {
            if (srcs.length > 0) {
                srcs.sort(function (a, b) {
                    return a.size === b.size ? a.size - b.size : a.priority - b.priority;
                });
                var srcsValid = srcs.filter(function (o) {
                    return o.size >= _Texture3.default.MAX_SIZE;
                });

                if (srcs.length > 1) {
                    var first = srcs[0];
                    var last = srcs[srcs.length - 1];

                    SmartTexture.LOAD(first, function () {
                        first.init(gl);
                        SmartTexture.LOAD(last, function () {
                            last.init(gl);
                        });
                    });
                } else if (srcs.length > 0) {
                    var imgData = srcs[0];
                    SmartTexture.LOAD(imgData, function () {
                        imgData.init(gl);
                    });
                } else {
                    console.warn('The GPU can\'nt load a texture with size > ', _Texture3.default.MAX_SIZE);
                }
            } else {
                console.warn('URL of your texture', this.label, 'not found: texture.addURL(URL, size = 0)');
            }
        }
    }, {
        key: 'LOAD',
        value: function LOAD(data, callback) {
            var img = new Image();
            img.onload = function () {
                callback(data);
            };
            data.img = img;

            img.src = data.src;
        }
    }]);

    return SmartTexture;
}(_Texture3.default);

exports.default = SmartTexture;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var UMat3D = function (_Uniform) {
    _inherits(UMat3D, _Uniform);

    function UMat3D(label) {
        _classCallCheck(this, UMat3D);

        return _possibleConstructorReturn(this, (UMat3D.__proto__ || Object.getPrototypeOf(UMat3D)).call(this, label, 35676 /* gl.FLOAT_MAT4 */, new _Matrix4x2.default().identity()));
    }

    return UMat3D;
}(_Uniform3.default);

exports.default = UMat3D;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Uniform = __webpack_require__(0);

var _Uniform2 = _interopRequireDefault(_Uniform);

var _UMat3D = __webpack_require__(10);

var _UMat3D2 = _interopRequireDefault(_UMat3D);

var _Attribute = __webpack_require__(1);

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Program = __webpack_require__(5);

var _Program2 = _interopRequireDefault(_Program);

var _Geom = __webpack_require__(4);

var _Geom2 = _interopRequireDefault(_Geom);

var _SmartTexture = __webpack_require__(9);

var _SmartTexture2 = _interopRequireDefault(_SmartTexture);

var _Mesh = __webpack_require__(7);

var _Mesh2 = _interopRequireDefault(_Mesh);

var _Cam3D = __webpack_require__(6);

var _Cam3D2 = _interopRequireDefault(_Cam3D);

var _Scene = __webpack_require__(8);

var _Scene2 = _interopRequireDefault(_Scene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.body.querySelector('canvas');

// Camera
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

var cam3D = new _Cam3D2.default('uPMatrix');
// cam3D.matrix.translate([-1.5, 0.0, -7.0])


// Scene
var scene = new _Scene2.default(canvas, cam3D);
scene.bgColor = [0.0, 0.0, 0.1, 1.0];
scene.depthTest = true;

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

var pyramidMesh = new _Mesh2.default(pyramidGeom, colorProgram);
var pyramidUniformMatrix = new _UMat3D2.default('uMVMatrix');
pyramidMesh.addUniform(pyramidUniformMatrix);
pyramidMesh.matrix = pyramidUniformMatrix.data;
pyramidMesh.matrix.translate([-1.5, -1.5, -8.0]);
scene.addMesh(pyramidMesh);

// ----------------------------
//
//      SAME PYRAMID
//
// ----------------------------

var pyramidMesh2 = new _Mesh2.default(pyramidGeom, colorProgram);
var pyramidUniformMatrix2 = new _UMat3D2.default('uMVMatrix');
pyramidMesh2.addUniform(pyramidUniformMatrix2);
pyramidMesh2.matrix = pyramidUniformMatrix2.data;
pyramidMesh2.matrix.translate([-1.5, 1.5, -8.0]);
pyramidMesh2.matrix.scale([1, -1, 1]);

scene.addMesh(pyramidMesh2);

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

var cubeMesh = new _Mesh2.default(cubeGeom, fogProgram);
var cubeUniformMatrix = new _UMat3D2.default('uMVMatrix');
cubeMesh.addUniform(cubeUniformMatrix);
cubeMesh.matrix = cubeUniformMatrix.data;
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

var cubeTexture = new _SmartTexture2.default('uSampler');
cubeTexture.addURL('cube-diffuse.jpg');

var cubeTexturedGeom = new _Geom2.default();
cubeTexturedGeom.addVertices('aVertexPosition', cubeVertices, 3);
cubeTexturedGeom.addVertices('aTextureCoord', cubeUV, 2);
cubeTexturedGeom.addIndices(cubeIndices);

var cubeTexturedMesh = new _Mesh2.default(cubeTexturedGeom, texturedProgram);
var cubeTexturedUniformMatrix = new _UMat3D2.default('uMVMatrix');
cubeTexturedMesh.addUniform(cubeTexturedUniformMatrix);
cubeTexturedMesh.matrix = cubeTexturedUniformMatrix.data;
cubeTexturedMesh.addTexture(cubeTexture);
cubeTexturedMesh.matrix.translate([1.5, 1.5, -8.0]);
scene.addMesh(cubeTexturedMesh);

refresh();
function refresh() {
    pyramidMesh.matrix.rotate(0.005, [0, 1, 0]);
    pyramidMesh2.matrix.rotate(-0.005, [0, 1, 0]);
    cubeMesh.matrix.rotate(0.01, [0, 1, 0]);
    cubeTexturedMesh.matrix.rotate(-0.01, [0, 1, 0]);

    scene.draw();
    requestAnimationFrame(refresh);
}

/***/ }),
/* 12 */
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
        this.color = [255, 255, 255, 255];

        this.pointer = null;
        this.parameters = {
            9729: 9987
        };

        this.setFormat();
    }

    /*
        6407    gl.RGB
        6408    gl.RGBA
    */


    _createClass(Texture, [{
        key: "setFormat",
        value: function setFormat() {
            var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6408;

            // this.internalformat = internalformat
            this.format = format;
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

    }, {
        key: "setParameters",
        value: function setParameters(target, pName, param) {}
    }, {
        key: "isInitialized",
        value: function isInitialized() {
            return !!this.pointer;
        }
    }, {
        key: "init",
        value: function init(gl) {
            var texture = gl.createTexture();

            if (!Texture._DATA_INITIALIZED) {
                Texture.SET_DATA(gl);
            }

            /*
            gl.getParameter(gl.MAX_TEXTURE_SIZE)
            gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
            gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
            */

            // Temporary texture (1 pixel)
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array(this.color));

            /*const location = program.getTextureLocation(this.label)
            const index = program.getTextureIndex(this.label)
            gl.uniform1i(location, index)*/

            this.pointer = texture;

            return true;
        }
    }, {
        key: "draw",
        value: function draw(gl, location, index) {
            // const index = program.getTextureIndex(this.label)
            gl.uniform1i(location, index); // Chaque frame ou chaque init ?
            gl.activeTexture(gl.TEXTURE0 + index);
            gl.bindTexture(gl.TEXTURE_2D, this.pointer);
            // gl.uniform1i(program.getTextureLocation(this.label), 0)
        }
    }], [{
        key: "IS_POWER_OF_2",
        value: function IS_POWER_OF_2(val) {
            return (val & val - 1) === 0;
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

    }, {
        key: "SET_DATA",
        value: function SET_DATA(gl) {
            Texture.MAX_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            Texture.FORMAT = {};

            /*
            https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc
            */
            var formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS);
            for (var i = 0; i < formats.length; i++) {
                Texture.FORMAT[formats[i]] = true;
                console.log(formats[i]);
            }

            Texture._DATA_INITIALIZED = true;
        }
    }, {
        key: "SETUP",
        value: function SETUP(gl, img) {
            if (Texture.IS_POWER_OF_2(img.width) && Texture.IS_POWER_OF_2(img.height)) {
                gl.generateMipmap(gl.TEXTURE_2D);
                // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            } else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            }
        }
    }]);

    return Texture;
}();

exports.default = Texture;

/***/ })
/******/ ]);