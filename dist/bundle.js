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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
        var isArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, Uniform);

        this.label = label;
        this.type = type;
        this.data = data;
        // this.location = null

        this._init(type, isArray);
    }

    // Generate draw function


    _createClass(Uniform, [{
        key: '_init',
        value: function _init(type, isArray) {
            var _this = this;

            switch (this.type) {
                case 35676:
                    // gl.FLOAT_MAT4
                    {
                        this.draw = function (gl, location) {
                            gl.uniformMatrix4fv(location, false, _this.data);
                        };
                        break;
                    }
                case 35665:
                    // gl.FLOAT_VEC3
                    {
                        this.draw = function (gl, location) {
                            gl.uniform3f.apply(gl, [location].concat(_toConsumableArray(_this.data)));
                        };

                        break;
                    }
                case 5124:
                    // gl.INT
                    this.draw = function (gl, location) {
                        gl.uniform1i(location, _this.data);
                    };
                    break;

                case -1:
                    this.draw = function (gl, location) {
                        gl.uniform1fv(location, _this.data);
                    };
                    break;

                default:
                    console.error('Uniform type unknow: {label:', this.label, ', type:', type, '}');
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

var _Mesh2 = __webpack_require__(6);

var _Mesh3 = _interopRequireDefault(_Mesh2);

var _Geom = __webpack_require__(5);

var _Geom2 = _interopRequireDefault(_Geom);

var _Uniform = __webpack_require__(0);

var _Uniform2 = _interopRequireDefault(_Uniform);

var _TextureContainer = __webpack_require__(17);

var _TextureContainer2 = _interopRequireDefault(_TextureContainer);

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

// https://www.wanadev.fr/34-trucs-et-astuces-webgl/
var Pass = function (_Mesh) {
    _inherits(Pass, _Mesh);

    function Pass(program) {
        var vertexLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'aVertexPosition';
        var textureLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uSample';

        _classCallCheck(this, Pass);

        var geom = new _Geom2.default();
        var quadVertices = [1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0];
        geom.addVertices(vertexLabel, quadVertices, 2);

        return _possibleConstructorReturn(this, (Pass.__proto__ || Object.getPrototypeOf(Pass)).call(this, geom, program));
    }

    _createClass(Pass, [{
        key: 'resize',
        value: function resize(width, height) {
            if (this.uWidth) this.uWidth.data = width;

            if (this.uHeight) this.uHeight.data = height;
        }
    }, {
        key: 'useUWidth',
        value: function useUWidth(label, width) {
            var uniform = new _Uniform2.default(label, 5124 /* gl.INT */, width);
            this.uWidth = uniform;
            this.addUniform(uniform);
        }
    }, {
        key: 'useUHeight',
        value: function useUHeight(label, height) {
            var uniform = new _Uniform2.default(label, 5124 /* gl.INT */, height);
            this.uHeight = uniform;
            this.addUniform(uniform);
        }
    }, {
        key: 'useColorTexture',
        value: function useColorTexture(label) {
            var texture = new _TextureContainer2.default(label);
            this.inColorTexture = texture;
            this.addTexture(texture);
        }
    }, {
        key: 'useDepthTexture',
        value: function useDepthTexture(labelTexture, labelEnable) {
            var texture = new _TextureContainer2.default(labelTexture);
            this.inDepthTexture = texture;
            this.addTexture(texture);

            var detpthTextureEnable = new _Uniform2.default(labelEnable, 5124 /* gl.INT */, 1);
            this._inDetpthEnableUniform = detpthTextureEnable;
            this.addUniform(detpthTextureEnable);
        }

        /**
         * Enable or disable depth texture
         */

    }, {
        key: 'setDepthTexture',
        value: function setDepthTexture(enable, gl) {
            this.rmTexture(this.inDepthTexture);

            if (enable) this.addTexture(this.inDepthTexture);

            this._inDetpthEnableUniform.data = enable ? 1 : 0;

            var globalUniforms = this.globalUniforms;
            this.dispose();
            this.init(gl, globalUniforms);
        }
    }]);

    return Pass;
}(_Mesh3.default);

exports.default = Pass;

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
                var textureLocation = gl.getUniformLocation(this.pointer, label);
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
/* 3 */
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

var CallOptimizer = function () {
    function CallOptimizer() {
        _classCallCheck(this, CallOptimizer);

        this.lastTexture = null;
        this.lastProgram = null;
    }

    _createClass(CallOptimizer, [{
        key: "optimizeTexture",
        value: function optimizeTexture(texture) {
            var lastTexture = this.lastTexture;
            this.lastTexture = texture;

            return texture === lastTexture;
        }
    }, {
        key: "optimizeProgram",
        value: function optimizeProgram(program) {
            var lastProgram = this.lastProgram;
            this.lastProgram = program;

            return program === lastProgram;
        }
    }], [{
        key: "getInstance",
        value: function getInstance(gl) {
            var i = CallOptimizer.glList.indexOf(gl);
            if (i < 0) {
                var co = new CallOptimizer();

                CallOptimizer.glList.push(gl);
                CallOptimizer.list.push(co);

                return co;
            }

            return CallOptimizer.list[i];
        }
    }]);

    return CallOptimizer;
}();

CallOptimizer.glList = [];
CallOptimizer.list = [];

exports.default = CallOptimizer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Buffer2 = __webpack_require__(7);

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

var _Buffer = __webpack_require__(7);

var _Buffer2 = _interopRequireDefault(_Buffer);

var _Attribute = __webpack_require__(4);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _CallOptimizer = __webpack_require__(3);

var _CallOptimizer2 = _interopRequireDefault(_CallOptimizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mesh = function () {
    function Mesh(geom, program) {
        _classCallCheck(this, Mesh);

        this.geom = geom;
        this.program = program;

        this.uniforms = [];
        this.globalUniforms = [];
        this.textures = [];

        this.localCalls = [];
        this.globalCalls = [];

        this.order = 0;

        this._isInitialized = false;
    }

    _createClass(Mesh, [{
        key: 'addUniform',
        value: function addUniform(uniform) {
            this.uniforms.push(uniform);
        }
    }, {
        key: 'rmUniform',
        value: function rmUniform(uniform) {
            var i = this.uniforms.indexOf(uniform);
            if (i > -1) this.uniforms.splice(i, 1);
        }
    }, {
        key: 'addTexture',
        value: function addTexture(texture) {
            this.textures.push(texture);
        }
    }, {
        key: 'rmTexture',
        value: function rmTexture(texture) {
            var i = this.textures.indexOf(texture);
            if (i > -1) this.textures.splice(i, 1);
        }
    }, {
        key: 'isInitialized',
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
        key: '_setCalls',
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
        key: '_initData',
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
        key: 'dispose',
        value: function dispose() {
            this._isInitialized = false;
            this.localCalls.length = 0;
        }
    }, {
        key: 'init',
        value: function init(gl, globalUniforms) {
            var program = this.program;
            var success = true;

            // Use program
            if (!this.program.isInitialized()) {
                if (!this.program.init(gl)) success = false;
            } else {
                this.program.draw(gl);
            }

            // Init all mesh data (textures, buffers, attributes, uniforms)
            if (!this._initData(gl)) success = false;

            // Store all calls (mesh data + global data)
            if (success && this.localCalls.length < 1) this._setCalls(gl, globalUniforms);

            // Save global uniforms
            this.globalUniforms = [].concat(_toConsumableArray(globalUniforms));

            this._isInitialized = success;
            return success;
        }
    }, {
        key: 'draw',
        value: function draw(gl) {
            var customCalls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            var callOptimizer = _CallOptimizer2.default.getInstance(gl);

            // Use program, if ok call globals
            var program = this.program;
            var optimizeProgram = callOptimizer.optimizeProgram(program);
            if (!optimizeProgram) {
                this.program.draw(gl);

                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                    for (var _iterator12 = this.globalCalls[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                        var callback = _step12.value;

                        callback();
                    }
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
            }

            // Call local
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
                for (var _iterator13 = this.localCalls[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var _callback = _step13.value;

                    _callback();
                } // Call local
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

            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
                for (var _iterator14 = customCalls[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                    var _callback2 = _step14.value;

                    _callback2();
                } // Draw mesh
            } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion14 && _iterator14.return) {
                        _iterator14.return();
                    }
                } finally {
                    if (_didIteratorError14) {
                        throw _iteratorError14;
                    }
                }
            }

            this.geom.display(gl);
        }
    }]);

    return Mesh;
}();

exports.default = Mesh;

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _CallOptimizer = __webpack_require__(3);

var _CallOptimizer2 = _interopRequireDefault(_CallOptimizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Texture = function () {
    function Texture(label) {
        _classCallCheck(this, Texture);

        this.label = label;
        this.mipmap = true;

        this.img = null;
        this.width = null;
        this.height = null;

        this.pointer = null;
        this.parameters = [
            // [9729 /* gl.LINEAR */, 9987 /* gl.LINEAR_MIPMAP_LINEAR */]
        ];

        this.setType();
        this.setInternalFormat();
        this.setFormat();
        this.setTarget();
    }

    _createClass(Texture, [{
        key: 'resize',
        value: function resize(width, height) {
            var gl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            this.width = width;
            this.height = height;

            if (gl) {
                gl.bindTexture(this.target, this.pointer);
                gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img);
            } else {
                this.updated = true;
            }
        }
    }, {
        key: 'setTempColor',
        value: function setTempColor(color) {
            this.setImg(new Uint8Array(color), 1, 1);
        }
    }, {
        key: 'setImg',
        value: function setImg() {
            var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Uint8Array([255, 255, 255, 255]);
            var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            this.img = img;
            this.width = width;
            this.height = height;
        }

        /*
            5121    gl.UNSIGNED_BYTE
            5123    gl.UNSIGNED_SHORT
        */

    }, {
        key: 'setType',
        value: function setType() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5121;

            this.type = type;
        }

        /*
            6407    gl.RGB
            6408    gl.RGBA
            6402    gl.DEPTH_COMPONENT
        */

    }, {
        key: 'setInternalFormat',
        value: function setInternalFormat() {
            var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6408;

            this.internalFormat = format;
        }

        /*
            6407    gl.RGB
            6408    gl.RGBA
            6402    gl.DEPTH_COMPONENT
        */

    }, {
        key: 'setFormat',
        value: function setFormat() {
            var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6408;

            // this.internalformat = internalformat
            this.format = format;
        }

        /*
            3553    gl.TEXTURE_2D           A two-dimensional texture.
            34067   gl.TEXTURE_CUBE_MAP     A cube-mapped texture.
        */

    }, {
        key: 'setTarget',
        value: function setTarget() {
            var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3553;

            this.target = target;
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
        key: 'setParam',
        value: function setParam(label, value) {
            var i = this.parameters.find(function (p) {
                return p[0] === label;
            });

            if (i > -1) this.parameters[i][1] = value;else this.parameters.push([label, value]);
        }
    }, {
        key: 'isInitialized',
        value: function isInitialized() {
            return !!this.pointer;
        }
    }, {
        key: 'setDefaultParams',
        value: function setDefaultParams(gl) {
            if (this.mipmap) {
                // this.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR)
                this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            } else {
                this.setParam(gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                this.setParam(gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                // this.setParam(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
                this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            }
        }
    }, {
        key: 'initParams',
        value: function initParams(gl) {
            if (this.mipmap) {
                var img = this.img;
                if (img === null) {
                    console.warn('You need an image to set the parameters of texture');
                } else if (Texture.IS_POWER_OF_2(img.width) && Texture.IS_POWER_OF_2(img.height)) {
                    gl.generateMipmap(this.target);
                } else {
                    this.mipmap = false;
                    console.warn('You need a power of 2 for the size of the mipmaped texture');
                }
            }

            if (this.parameters.length < 1) this.setDefaultParams(gl);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.parameters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        pname = _step$value[0],
                        param = _step$value[1];

                    gl.texParameteri(this.target, pname, param);
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
        key: 'init',
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

            gl.bindTexture(this.target, texture);
            gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img);
            this.initParams(gl);

            /*const location = program.getTextureLocation(this.label)
            const index = program.getTextureIndex(this.label)
            gl.uniform1i(location, index)*/

            this.pointer = texture;

            return true;
        }
    }, {
        key: 'draw',
        value: function draw(gl, location, index) {
            var callOptimizer = _CallOptimizer2.default.getInstance(gl);
            var optimizeTexture = callOptimizer.optimizeTexture(this);
            if (!optimizeTexture) {
                gl.uniform1i(location, index);
                gl.activeTexture(gl.TEXTURE0 + index);
                gl.bindTexture(this.target, this.pointer);

                if (this.updated) {
                    gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img);
                    this.updated = false;
                }
            }

            /*if (this === Texture.last)
                return false*/

            // const index = program.getTextureIndex(this.label)

            // gl.uniform1i(program.getTextureLocation(this.label), 0)

            /*Texture.last = this
            return true*/
        }
    }, {
        key: 'free',
        value: function free(gl) {
            gl.bindTexture(gl.TEXTURE_2D, null);
        }
    }], [{
        key: 'IS_POWER_OF_2',
        value: function IS_POWER_OF_2(val) {
            return (val & val - 1) === 0;
        }
    }, {
        key: 'SET_DATA',
        value: function SET_DATA(gl) {
            Texture.MAX_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            Texture.FORMAT = {};

            /*
            https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc
            */
            var formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS);
            for (var i = 0; i < formats.length; i++) {
                Texture.FORMAT[formats[i]] = true;
            }Texture._DATA_INITIALIZED = true;
        }
    }]);

    return Texture;
}();

exports.default = Texture;

/***/ }),
/* 9 */
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

var Matrix4 = function (_Float32Array) {
    _inherits(Matrix4, _Float32Array);

    function Matrix4() {
        _classCallCheck(this, Matrix4);

        var _this = _possibleConstructorReturn(this, (Matrix4.__proto__ || Object.getPrototypeOf(Matrix4)).call(this, 16));

        _this[0] = 1;
        _this[5] = 1;
        _this[10] = 1;
        _this[15] = 1;
        return _this;
    }

    _createClass(Matrix4, [{
        key: "clone",
        value: function clone() {
            var clone = new Matrix4();
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

    return Matrix4;
}(Float32Array);

exports.default = Matrix4;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Matrix = __webpack_require__(9);

var _Matrix2 = _interopRequireDefault(_Matrix);

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

var Camera3D = function (_Uniform) {
    _inherits(Camera3D, _Uniform);

    function Camera3D(label) {
        _classCallCheck(this, Camera3D);

        var _this = _possibleConstructorReturn(this, (Camera3D.__proto__ || Object.getPrototypeOf(Camera3D)).call(this, label, 35676, new _Matrix2.default()));

        _this.fovy = 45;
        _this.near = 0.1;
        _this.far = 1000;
        _this._matrix = new _Matrix2.default();

        _this.updated = true;
        return _this;
    }

    _createClass(Camera3D, [{
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

    return Camera3D;
}(_Uniform3.default);

exports.default = Camera3D;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _CallOptimizer = __webpack_require__(3);

var _CallOptimizer2 = _interopRequireDefault(_CallOptimizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
    function Scene(canvas, cam) {
        _classCallCheck(this, Scene);

        this.canvas = canvas;
        this.init(canvas);
        this.meshs = [];
        this.cam = cam;
        this.uniforms = [cam];
        this.depthTest = true;
        this.sortCompare = function (mesh1, mesh2) {
            return mesh1.program.id - mesh2.program.id;
        };

        this.resize(canvas.width, canvas.height);
    }

    _createClass(Scene, [{
        key: '_addCamToMeshs',
        value: function _addCamToMeshs() {
            var cam = this.cam;
            this.uniforms.push(cam);
        }
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
        key: 'sort',
        value: function sort() {
            this.meshs.sort(this.sortCompare);
        }
    }, {
        key: 'resize',
        value: function resize(w, h) {
            /*const gl = this.gl
            gl.viewportWidth = w
            gl.viewportHeight = h*/
            this.width = w;
            this.height = h;
        }
    }, {
        key: 'init',
        value: function init(canvas) {
            var gl = void 0;

            try {
                gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                // gl.viewportWidth = canvas.width
                // gl.viewportHeight = canvas.height
                // console.log(gl.viewportWidth)
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

            gl.viewport(0, 0, this.width, this.height);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            if (this.cam.updated) this.cam.update(this.width, this.height);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.meshs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var mesh = _step.value;

                    if (mesh.isInitialized()) mesh.draw(gl);else mesh.init(gl, this.uniforms);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Texture2 = __webpack_require__(8);

var _Texture3 = _interopRequireDefault(_Texture2);

var _parseDds = __webpack_require__(22);

var _parseDds2 = _interopRequireDefault(_parseDds);

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

        _this.setTempColor([255, 255, 255, 255]);
        return _this;
    }

    _createClass(SmartTexture, [{
        key: 'setTempColor',
        value: function setTempColor(color) {
            this.setImg(new Uint8Array(color), 1, 1);
        }

        // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

    }, {
        key: 'addDDSURL',
        value: function addDDSURL(URL, size) {
            var _this2 = this;

            var imgData = {
                size: size,
                src: URL,
                img: null,
                isImage: false,
                priority: 1,
                isValid: function isValid() {
                    return true;
                },
                init: null
            };

            imgData.init = function (gl) {
                var dds = (0, _parseDds2.default)(imgData.img);

                // console.log(dds.format)  // 'dxt5' 
                // console.log(dds.shape)   // [ width, height ] 
                // console.log(dds.images)  // [ ... mipmap level data ... ]

                var image = dds.images[0];
                var arrBufferView = new Uint8Array(imgData.img, image.offset, image.length);

                var ext = gl.getExtension('WEBGL_compressed_texture_s3tc') || gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
                gl.bindTexture(gl.TEXTURE_2D, _this2.pointer);

                gl.compressedTexImage2D(gl.TEXTURE_2D, 0, // ? dds.images.length - 1,
                ext.COMPRESSED_RGBA_S3TC_DXT5_EXT, dds.shape[0], dds.shape[1], 0, arrBufferView);

                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

                _this2.mipmap = false;
                _this2.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                _this2.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                _this2.initParams(gl);
            };

            this.srcs.push(imgData);
        }
    }, {
        key: 'addURL',
        value: function addURL(URL) {
            var _this3 = this;

            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var imgData = {
                size: size,
                src: URL,
                img: null,
                priority: 0,
                isImage: true,
                isValid: function isValid() {
                    return true;
                },
                init: null
            };

            imgData.init = function (gl) {
                gl.bindTexture(gl.TEXTURE_2D, _this3.pointer);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

                gl.texImage2D(gl.TEXTURE_2D, 0, 6408 /* gl.RGBA */, _this3.format, gl.UNSIGNED_BYTE, imgData.img);
                // Texture.SETUP(gl, imgData.img)
                // Texture.SETUP(gl, imgData.img)
                // gl.bindTexture(gl.TEXTURE_2D, null)

                _this3.img = imgData.img;

                // this.mipmap = false
                // this.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR)
                // this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR)
                _this3.initParams(gl);
            };

            this.srcs.push(imgData);
        }
    }, {
        key: 'init',
        value: function init(gl, program) {
            var success = _get(SmartTexture.prototype.__proto__ || Object.getPrototypeOf(SmartTexture.prototype), 'init', this).call(this, gl, program);
            var texture = this.pointer;

            /* const changeImg = imgData =>
            {
                gl.bindTexture(gl.TEXTURE_2D, texture)
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
                  gl.texImage2D(gl.TEXTURE_2D, 0, imgData.internalformat, this.format, gl.UNSIGNED_BYTE, imgData.img)
                
                this.img = imgData.img
                Texture.SETUP(gl, imgData.img)
                // gl.bindTexture(gl.TEXTURE_2D, null)
            }*/

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
                var srcsValid = srcs.filter(function (imgData) {
                    return imgData.size >= _Texture3.default.MAX_SIZE && imgData.isValid(gl);
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
                console.warn('URL of your smart texture not found');
            }
        }
    }, {
        key: 'LOAD',
        value: function LOAD(data, callback) {
            if (data.isImage) {
                var img = new Image();
                img.onload = function () {
                    callback(data);
                };
                data.img = img;

                // console.log('LOAD', data.src)
                img.src = data.src;
            } else {
                var request = new XMLHttpRequest();
                request.responseType = 'arraybuffer';
                request.open('GET', data.src, true);
                request.onreadystatechange = function (event) {
                    if (request.readyState === XMLHttpRequest.DONE) {
                        if (request.status === 200) {
                            data.img = request.response;
                            callback(data);
                        } else {
                            console.error('fail to load image ', data.src, 'status:', request.status, 'statuc text:', request.statusText);
                        }
                    }
                };
                request.send();
            }
        }
    }]);

    return SmartTexture;
}(_Texture3.default);

exports.default = SmartTexture;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Matrix = __webpack_require__(9);

var _Matrix2 = _interopRequireDefault(_Matrix);

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

var Transform3D = function (_Uniform) {
    _inherits(Transform3D, _Uniform);

    function Transform3D(label) {
        _classCallCheck(this, Transform3D);

        return _possibleConstructorReturn(this, (Transform3D.__proto__ || Object.getPrototypeOf(Transform3D)).call(this, label, 35676 /* gl.FLOAT_MAT4 */, new _Matrix2.default().identity()));
    }

    return Transform3D;
}(_Uniform3.default);

exports.default = Transform3D;

/***/ }),
/* 14 */
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

var _ScreenRecorder = __webpack_require__(21);

var _ScreenRecorder2 = _interopRequireDefault(_ScreenRecorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/
var PassManager = function () {
    function PassManager(scene) {
        _classCallCheck(this, PassManager);

        this.screenRecorder = new _ScreenRecorder2.default(scene.width, scene.height, true, true);

        this.scene = scene;
        this.passList = [];
        this.isEnable = false;

        this.init(scene.gl);
    }

    _createClass(PassManager, [{
        key: 'isInitialized',
        value: function isInitialized() {
            return this.screenRecorder.isInitialized();
        }
    }, {
        key: 'resize',
        value: function resize(width, height) {
            this.scene.resize(width, height);
            this.screenRecorder.resize(width, height);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.passList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var pass = _step.value;

                    pass.resize(width, height);
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
        key: '_disableDepthInTexture',
        value: function _disableDepthInTexture(pass, gl) {
            if (pass.inDepthTexture) pass.setDepthTexture(false, gl);
        }
    }, {
        key: 'init',
        value: function init(gl) {
            this.screenRecorder.init(gl);

            if (!this.screenRecorder.depthTexture) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.passList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _pass = _step2.value;

                        this._disableDepthInTexture(_pass, gl);
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
            }return true;
        }
    }, {
        key: 'addPass',
        value: function addPass(pass) {
            pass.init(this.scene.gl, []);

            if (this.screenRecorder.isInitialized() && !this.screenRecorder.depthTexture) this._disableDepthInTexture(pass, this.scene.gl);

            if (pass.uWidth) pass.uWidth.data = this.scene.width;

            if (pass.uHeight) pass.uHeight.data = this.scene.height;

            this.passList.push(pass);

            this.isEnable = true;
        }
    }, {
        key: 'removePass',
        value: function removePass(pass) {
            var i = this.passList.indexOf(pass);

            if (i > -1) this.passList.splice(i, 1);

            this.isEnable = this.passList.length > 0;
        }

        // http://stackoverflow.com/questions/29578535/webgl-binding-of-a-framebuffer-and-renderbuffer

    }, {
        key: 'draw',
        value: function draw() {
            var gl = this.scene.gl;
            var passNumber = this.passList.length;

            if (passNumber > 0) {
                this.screenRecorder.start(gl, true);
                this.scene.draw();
                this.screenRecorder.stop(gl);
                this.screenRecorder.pingpong();

                for (var i = 0; i < passNumber; i++) {
                    var pass = this.passList[i];
                    var last = i > passNumber - 2;

                    if (!last) this.screenRecorder.start(gl, false);

                    this.screenRecorder.pingpong();

                    if (pass.inColorTexture) pass.inColorTexture.setTexture(this.screenRecorder.colorTexture);

                    if (pass.inDepthTexture && this.screenRecorder.depthTexture) pass.inDepthTexture.setTexture(this.screenRecorder.depthTexture);

                    pass.draw(gl);

                    this.screenRecorder.stop(gl);
                }
            } else {
                this.scene.draw();
            }
        }
    }]);

    return PassManager;
}();

exports.default = PassManager;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pass2 = __webpack_require__(1);

var _Pass3 = _interopRequireDefault(_Pass2);

var _Program = __webpack_require__(2);

var _Program2 = _interopRequireDefault(_Program);

var _Uniform = __webpack_require__(0);

var _Uniform2 = _interopRequireDefault(_Uniform);

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

var VERTEX_SHADER = '\n    attribute vec3 aVertexPosition;\n    varying vec2 vTextureCoord;\n\n    void main(void)\n    {\n        vTextureCoord = vec2(aVertexPosition.x * 0.5 + 0.5, aVertexPosition.y * 0.5 + 0.5);\n        gl_Position = vec4(aVertexPosition, 1.0);\n    }';

var FRAGMENT_SHADER = '\n    precision mediump float;\n    varying vec2 vTextureCoord;\n    uniform sampler2D uColor;\n    uniform sampler2D uDepth;\n\n    uniform vec3 uColorFog;\n    \n    uniform int uDepthEnable;\n\n    void main(void)\n    {\n        $chunkcall\n        gl_FragColor = color;\n    }';

function f(num) {
    return Number.isInteger(num) ? num.toFixed(1) : num;
}

var FogPass = function (_Pass) {
    _inherits(FogPass, _Pass);

    function FogPass(_ref) {
        var _ref$minDepth = _ref.minDepth,
            minDepth = _ref$minDepth === undefined ? 0.1 : _ref$minDepth,
            _ref$maxDepth = _ref.maxDepth,
            maxDepth = _ref$maxDepth === undefined ? 0.2 : _ref$maxDepth,
            _ref$minPower = _ref.minPower,
            minPower = _ref$minPower === undefined ? 0.2 : _ref$minPower,
            _ref$maxPower = _ref.maxPower,
            maxPower = _ref$maxPower === undefined ? 1 : _ref$maxPower,
            _ref$depthCurve = _ref.depthCurve,
            depthCurve = _ref$depthCurve === undefined ? 100 : _ref$depthCurve,
            _ref$color = _ref.color,
            color = _ref$color === undefined ? [1.0, 1.0, 1.0] : _ref$color;

        _classCallCheck(this, FogPass);

        var _this = _possibleConstructorReturn(this, (FogPass.__proto__ || Object.getPrototypeOf(FogPass)).call(this, null, 'aVertexPosition', 'uColor'));

        _this.useColorTexture('uColor');
        _this.useDepthTexture('uDepth', 'uDepthEnable');

        var uColor = new _Uniform2.default('uColorFog', 35665 /* gl.FLOAT_VEC3 */, color);
        _this.addUniform(uColor);

        var fragmentShader = _this._initFragmentShader(minDepth, maxDepth, minPower, maxPower, depthCurve);

        _this.program = new _Program2.default(VERTEX_SHADER, fragmentShader);
        return _this;
    }

    _createClass(FogPass, [{
        key: '_initFragmentShader',
        value: function _initFragmentShader(minDepth, maxDepth, minPower, maxPower, depthCurve) {
            var chunkCall = '\n            float depthValue = 0.0;\n            if (uDepthEnable >= 0) {\n                vec4 depth = texture2D(uDepth, vTextureCoord.xy);\n                depthValue = pow(depth.x, ' + f(depthCurve) + ');\n                depthValue = (depthValue - ' + f(minDepth) + ') / ' + f(maxDepth - minDepth) + ';\n                depthValue = clamp(depthValue, ' + f(minPower) + ', ' + f(maxPower) + ');\n            }\n            vec4 originalColor = texture2D(uColor, vTextureCoord.xy); \n            vec4 color = vec4(mix(originalColor.xyz, uColorFog, depthValue), originalColor.w);\n        ';
            // vec4(mix(color.xyz, bg, depthValue), 1.0);

            var fs = FRAGMENT_SHADER.replace('$chunkcall', chunkCall);

            return fs;
        }
    }]);

    return FogPass;
}(_Pass3.default);

exports.default = FogPass;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pass2 = __webpack_require__(1);

var _Pass3 = _interopRequireDefault(_Pass2);

var _Program = __webpack_require__(2);

var _Program2 = _interopRequireDefault(_Program);

var _Uniform = __webpack_require__(0);

var _Uniform2 = _interopRequireDefault(_Uniform);

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

var VERTEX_SHADER = '\n    attribute vec3 aVertexPosition;\n    varying vec2 vTextureCoord;\n\n    void main(void)\n    {\n        vTextureCoord = vec2(aVertexPosition.x * 0.5 + 0.5, aVertexPosition.y * 0.5 + 0.5);\n        gl_Position = vec4(aVertexPosition, 1.0);\n    }';

var FRAGMENT_SHADER = '\n    precision mediump float;\n    varying vec2 vTextureCoord;\n    uniform sampler2D uColor;\n    uniform sampler2D uDepth;\n    uniform int uSize;\n    uniform int uDepthEnable;\n\n    $chunkfct\n\n    void main(void)\n    {\n        $chunkcall\n        gl_FragColor = color;\n    }';

function f(num) {
    return Number.isInteger(num) ? num.toFixed(1) : num;
}

// https://www.wanadev.fr/34-trucs-et-astuces-webgl/

var GaussianBlurPass = function (_Pass) {
    _inherits(GaussianBlurPass, _Pass);

    function GaussianBlurPass(_ref) {
        var _ref$minDepth = _ref.minDepth,
            minDepth = _ref$minDepth === undefined ? 0.1 : _ref$minDepth,
            _ref$maxDepth = _ref.maxDepth,
            maxDepth = _ref$maxDepth === undefined ? 0.2 : _ref$maxDepth,
            _ref$samples = _ref.samples,
            samples = _ref$samples === undefined ? 5 : _ref$samples,
            _ref$xBlur = _ref.xBlur,
            xBlur = _ref$xBlur === undefined ? true : _ref$xBlur,
            _ref$power = _ref.power,
            power = _ref$power === undefined ? 1 : _ref$power,
            _ref$depthCurve = _ref.depthCurve,
            depthCurve = _ref$depthCurve === undefined ? 100 : _ref$depthCurve;

        _classCallCheck(this, GaussianBlurPass);

        var _this = _possibleConstructorReturn(this, (GaussianBlurPass.__proto__ || Object.getPrototypeOf(GaussianBlurPass)).call(this, null, 'aVertexPosition', 'uColor'));

        _this.power = power;
        _this.xBlur = xBlur;
        _this.depthCurve = depthCurve;
        _this.useColorTexture('uColor');
        _this.useDepthTexture('uDepth', 'uDepthEnable');

        var fragmentShader = _this._initFragmentShader(minDepth, maxDepth, samples);
        _this.program = new _Program2.default(VERTEX_SHADER, fragmentShader);

        if (xBlur) _this.useUWidth('uSize', 1);else _this.useUHeight('uSize', 1);
        return _this;
    }

    _createClass(GaussianBlurPass, [{
        key: '_initFragmentShader',
        value: function _initFragmentShader() {
            var minDepth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
            var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
            var samples = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

            var xBlur = this.xBlur;
            var powerStr = f(this.power);
            var kernels = [];
            for (var i = 0; i < samples; i++) {
                var kernel = this._getKernels(i + 1);
                // const uKernel = new Uniform('uKernel' + (i - 1), )
                kernels.push(kernel);
            }

            var chunkFct = '';
            for (var _i = 0; _i < kernels.length; _i++) {
                var _kernel = kernels[_i];
                chunkFct += '\n            vec4 blur' + (_i + 1) + '(sampler2D i, vec2 uv) {\n                vec2 m;\n                vec4 color = texture2D(i, uv) * ' + f(_kernel[0]) + ';';

                for (var j = 1; j < _kernel.length; j++) {
                    chunkFct += '\n                m = ' + (xBlur ? 'vec2(' + j + '.0 * ' + powerStr + ' / float(uSize), 0.0)' : 'vec2(0.0, ' + j + '.0 * ' + powerStr + ' / float(uSize))') + ';\n                color += texture2D(i, uv + m) * ' + f(_kernel[j]) + ';\n                color += texture2D(i, uv - m) * ' + f(_kernel[j]) + ';';
                }

                chunkFct += 'return color; }';
            }

            var chunkCall = '\n            float depthValue = 0.0;\n            vec4 color;\n            if (uDepthEnable >= 0) {\n                vec4 depth = texture2D(uDepth, vTextureCoord.xy);\n                depthValue = pow(depth.x, ' + f(this.depthCurve) + ');\n                \n                int blurPower = int(floor(0.5 + (depthValue - ' + f(minDepth) + ') * ' + f(samples) + ' / ' + f(maxDepth - minDepth) + '));   \n        ';

            for (var _i2 = 0; _i2 < samples; _i2++) {
                var condition = 'blurPower' + (_i2 > samples - 2 ? ' >= ' + _i2 : _i2 < 1 ? ' < 1' : ' == ' + _i2);

                chunkCall += (_i2 > 0 ? ' else if' : 'if') + ' ( ' + condition + ') {\n                color = blur' + (_i2 + 1) + '(uColor, vTextureCoord.xy);\n            }';
            }
            chunkCall += '\n        } else {\n            color = texture2D(uColor, vTextureCoord.xy);\n        }\n        ';

            var fs = FRAGMENT_SHADER.replace('$chunkfct', chunkFct).replace('$chunkcall', chunkCall);

            return fs;
        }
    }, {
        key: '_getKernels',
        value: function _getKernels(max) {
            var list = [];
            var sum = 0;
            for (var i = 1; i < max + 2; i++) {
                // y = exp(-(x*6)^2)
                // x -> [0, 1]
                // y -> [0, 1]
                var a = (i - 1) * 3 / max;
                var val = Math.exp(-a * a);
                sum += i < 2 ? val : val + val;
                list.push(val);
            }

            for (var _i3 = 0; _i3 < list.length; _i3++) {
                list[_i3] /= sum;
            } /* let test = list[0]
              for (let i = 1; i < list.length; i++)
                  test += list[i] * 2
              console.log(test)*/

            return list;
        }
    }]);

    return GaussianBlurPass;
}(_Pass3.default);

exports.default = GaussianBlurPass;

/***/ }),
/* 17 */
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

var TextureContainer = function () {
    function TextureContainer(label) {
        _classCallCheck(this, TextureContainer);

        this.label = label;
    }

    _createClass(TextureContainer, [{
        key: "isInitialized",
        value: function isInitialized() {
            return true;
        }
    }, {
        key: "init",
        value: function init(gl) {
            return true;
        }
    }, {
        key: "setTexture",
        value: function setTexture(texture) {
            this.pointer = texture.pointer;
            this.target = texture.target;
        }
    }, {
        key: "draw",
        value: function draw(gl, location, index) {
            gl.uniform1i(location, index);
            gl.activeTexture(gl.TEXTURE0 + index);
            gl.bindTexture(this.target, this.pointer);

            // console.log('CONT -', this.label)
            // this.texture.draw(gl, location, index)
            // console.log('- CONT')
        }
    }]);

    return TextureContainer;
}();

exports.default = TextureContainer;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Uniform = __webpack_require__(0);

var _Uniform2 = _interopRequireDefault(_Uniform);

var _Transform3D = __webpack_require__(13);

var _Transform3D2 = _interopRequireDefault(_Transform3D);

var _Attribute = __webpack_require__(4);

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Program = __webpack_require__(2);

var _Program2 = _interopRequireDefault(_Program);

var _Geom = __webpack_require__(5);

var _Geom2 = _interopRequireDefault(_Geom);

var _SmartTexture = __webpack_require__(12);

var _SmartTexture2 = _interopRequireDefault(_SmartTexture);

var _Mesh = __webpack_require__(6);

var _Mesh2 = _interopRequireDefault(_Mesh);

var _Camera3D = __webpack_require__(10);

var _Camera3D2 = _interopRequireDefault(_Camera3D);

var _Scene = __webpack_require__(11);

var _Scene2 = _interopRequireDefault(_Scene);

var _Pass = __webpack_require__(1);

var _Pass2 = _interopRequireDefault(_Pass);

var _PassManager = __webpack_require__(14);

var _PassManager2 = _interopRequireDefault(_PassManager);

var _GaussianBlurPass = __webpack_require__(16);

var _GaussianBlurPass2 = _interopRequireDefault(_GaussianBlurPass);

var _FogPass = __webpack_require__(15);

var _FogPass2 = _interopRequireDefault(_FogPass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import FXAAPass from './shader/filter/FXAAPass'


// Use term "compile" not "init"

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

var cam3D = new _Camera3D2.default('uPMatrix');
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
var pyramidUniformMatrix = new _Transform3D2.default('uMVMatrix');
pyramidMesh.addUniform(pyramidUniformMatrix);
pyramidMesh.matrix = pyramidUniformMatrix.data;
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
    for (var j = 0; j < 4; j++) {
        unpackedCubeColors = unpackedCubeColors.concat(cubeColors[i]);
    }
}var cubeGeom = new _Geom2.default();
cubeGeom.addVertices('aVertexPosition', cubeVertices, 3);
cubeGeom.addVertices('aVertexColor', unpackedCubeColors, 4);
cubeGeom.addIndices(cubeIndices);

var cubeMesh = new _Mesh2.default(cubeGeom, fogProgram);
var cubeUniformMatrix = new _Transform3D2.default('uMVMatrix');
cubeMesh.addUniform(cubeUniformMatrix);
cubeMesh.matrix = cubeUniformMatrix.data;
cubeMesh.matrix.translate([1.5, -1.5, -8.0]);
scene.addMesh(cubeMesh);

// ----------------------------
//
//      PYRAMID RAINBOW INVERT
//
// ----------------------------

var pyramidMesh2 = new _Mesh2.default(pyramidGeom, colorProgram);
var pyramidUniformMatrix2 = new _Transform3D2.default('uMVMatrix');
pyramidMesh2.addUniform(pyramidUniformMatrix2);
pyramidMesh2.matrix = pyramidUniformMatrix2.data;
pyramidMesh2.matrix.translate([-1.5, 1.5, -8.0]);
pyramidMesh2.matrix.scale([1, -1, 1]);

scene.addMesh(pyramidMesh2);

// ----------------------------
//
//      CUBE WOOD
//
// ----------------------------

var vertexTextureShader = '   \n    attribute vec3 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    uniform mat4 uMVMatrix;\n    uniform mat4 uPMatrix;\n\n    varying vec2 vTextureCoord;\n\n    void main(void) {\n        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n        vTextureCoord = aTextureCoord;\n    }';

var fragmentTextureShader = '\n    precision mediump float;\n\n    varying vec2 vTextureCoord;\n\n    uniform sampler2D uDiffuse1;\n    uniform sampler2D uDiffuse2;\n\n    void main(void) {\n        vec4 color1 = texture2D(uDiffuse1, vec2(vTextureCoord.s, vTextureCoord.t));\n        vec4 color2 = texture2D(uDiffuse2, vec2(vTextureCoord.s, vTextureCoord.t));\n        float power = ((sin(vTextureCoord.s * 3.1415)) * (sin(vTextureCoord.t * 3.1415)));\n        gl_FragColor = mix(color1, color2, power);\n    }';

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

var cubeTexture = new _SmartTexture2.default('uDiffuse1');
cubeTexture.addURL('cube-diffuse.jpg');

var cubeTexture2 = new _SmartTexture2.default('uDiffuse2');
cubeTexture2.setParam(10240, 9728); // Pixelise
cubeTexture2.setParam(10241, 9728); // Pixelise
cubeTexture2.addURL('cube-diffuse-2.png');

var cubeTexturedGeom = new _Geom2.default();
cubeTexturedGeom.addVertices('aVertexPosition', cubeVertices, 3);
cubeTexturedGeom.addVertices('aTextureCoord', cubeUV, 2);
cubeTexturedGeom.addIndices(cubeIndices);

var cubeTexturedMesh = new _Mesh2.default(cubeTexturedGeom, texturedProgram);
var cubeTexturedUniformMatrix = new _Transform3D2.default('uMVMatrix');
cubeTexturedMesh.addUniform(cubeTexturedUniformMatrix);
cubeTexturedMesh.matrix = cubeTexturedUniformMatrix.data;
cubeTexturedMesh.addTexture(cubeTexture);
cubeTexturedMesh.addTexture(cubeTexture2);
cubeTexturedMesh.matrix.translate([1.5, 1.5, -8.0]);
scene.addMesh(cubeTexturedMesh);

// ----------------------------
//
//      CUBE WOOD 2
//
// ----------------------------

var cubeTexturedMesh2 = new _Mesh2.default(cubeTexturedGeom, texturedProgram);
var cubeTexturedUniformMatrix2 = new _Transform3D2.default('uMVMatrix');
cubeTexturedMesh2.addUniform(cubeTexturedUniformMatrix2);
cubeTexturedMesh2.matrix = cubeTexturedUniformMatrix2.data;
cubeTexturedMesh2.addTexture(cubeTexture);
cubeTexturedMesh2.addTexture(cubeTexture2);
cubeTexturedMesh2.matrix.translate([0, 0, -15.0]);
scene.addMesh(cubeTexturedMesh2);

// Optimize order by program (reduce calls)
scene.sort();

var PASS_ENABLE = true;

var passManager = void 0;
if (PASS_ENABLE) {
    passManager = new _PassManager2.default(scene);
    // passManager.resize(size[0] * resolution, size[1] * resolution)

    var fogPass = new _FogPass2.default({
        minDepth: 0.5,
        maxDepth: 0.6,
        minPower: 0,
        maxPower: 1,
        depthCurve: 100,
        color: [0.9, 0.95, 1.0]
    });
    passManager.addPass(fogPass);

    var gaussianOptions = {
        minDepth: 0.52,
        maxDepth: 0.7,
        samples: 20,
        xBlur: true,
        power: 1,
        depthCurve: 50
    };
    var gaussianBlurX = new _GaussianBlurPass2.default(gaussianOptions);
    passManager.addPass(gaussianBlurX);

    gaussianOptions.xBlur = false;
    var gaussianBlurY = new _GaussianBlurPass2.default(gaussianOptions);
    passManager.addPass(gaussianBlurY);
}

var resize = function resize() {
    var size = [window.innerWidth, window.innerHeight];
    var resolution = 1;

    if (PASS_ENABLE) passManager.resize(size[0] * resolution, size[1] * resolution);else scene.resize(size[0] * resolution, size[1] * resolution);

    canvas.width = size[0] * resolution;
    canvas.height = size[1] * resolution;
    canvas.style.width = size[0] + 'px';
    canvas.style.height = size[1] + 'px';

    cam3D.update.apply(cam3D, size);
};
window.onresize = resize;
resize();

// debug
window.scene = scene;
window.passManager = passManager;

refresh();
function refresh() {
    // console.time('draw')
    pyramidMesh.matrix.rotate(0.005, [0, 1, 0]);
    pyramidMesh2.matrix.rotate(-0.005, [0, 1, 0]);
    cubeMesh.matrix.rotate(0.01, [0, 1, 0]);
    cubeTexturedMesh.matrix.rotate(-0.01, [0, 1, 0]);
    cubeTexturedMesh2.matrix.rotate(0.025, [0.72, -0.33, 0.5]);

    if (PASS_ENABLE) passManager.draw();else scene.draw();

    // console.timeEnd('draw')

    requestAnimationFrame(refresh);
}

/***/ }),
/* 19 */
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

var FrameBuffer = function () {
    function FrameBuffer(width, height) {
        _classCallCheck(this, FrameBuffer);

        this.pointer = null;
    }

    _createClass(FrameBuffer, [{
        key: "isInitialized",
        value: function isInitialized() {
            return !!this.pointer;
        }
    }, {
        key: "init",
        value: function init(gl) {
            var frameBuffer = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);

            this.pointer = frameBuffer;

            return true;
        }
    }, {
        key: "bind",
        value: function bind(gl) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.pointer);
        }
    }, {
        key: "free",
        value: function free(gl) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
    }]);

    return FrameBuffer;
}();

exports.default = FrameBuffer;

/***/ }),
/* 20 */
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

var RenderBuffer = function () {
    function RenderBuffer(width, height) {
        _classCallCheck(this, RenderBuffer);

        this.pointer = null;
        this.width = width;
        this.height = height;
    }

    _createClass(RenderBuffer, [{
        key: "resize",
        value: function resize(width, height) {
            this.width = width;
            this.height = height;

            this.updated = true;
        }
    }, {
        key: "isInitialized",
        value: function isInitialized() {
            return !!this.pointer;
        }
    }, {
        key: "init",
        value: function init(gl) {
            var renderBuffer = gl.createRenderbuffer();
            gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);

            this.pointer = renderBuffer;
        }
    }, {
        key: "bind",
        value: function bind(gl) {
            gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);

            if (this.updated) {
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);
                this.updated = false;
            }
        }
    }]);

    return RenderBuffer;
}();

exports.default = RenderBuffer;

/***/ }),
/* 21 */
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

var _Texture = __webpack_require__(8);

var _Texture2 = _interopRequireDefault(_Texture);

var _RenderBuffer = __webpack_require__(20);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _FrameBuffer = __webpack_require__(19);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScreenRecorder = function () {
    function ScreenRecorder(width, height) {
        var captureDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var recordDepth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, ScreenRecorder);

        this.captureDepth = captureDepth;
        this.recordDepth = recordDepth;

        this.width = width;
        this.height = height;

        this.updated = false;

        this._pingpong = false;
        this._colorTextures = [this._genColorTexture('frameBufferColor0', width, height), this._genColorTexture('frameBufferColor1', width, height)];

        this.frameBuffer = new _FrameBuffer2.default();
        // this.frameBufferIndex = new FrameBuffer()

        // this.pointer = null
    }

    _createClass(ScreenRecorder, [{
        key: '_genDepthTexture',
        value: function _genDepthTexture(label, width, height) {
            var depthTexture = new _Texture2.default();

            depthTexture.mipmap = false;
            depthTexture.setInternalFormat(6402);
            depthTexture.setFormat(6402);
            depthTexture.setType(5123);

            // gl.TEXTURE_WRAP_S , gl.CLAMP_TO_EDGE
            depthTexture.setParam(10242, 33071);

            // gl.TEXTURE_WRAP_T , gl.CLAMP_TO_EDGE
            depthTexture.setParam(10243, 33071);

            // gl.TEXTURE_MIN_FILTER , gl.NEAREST
            depthTexture.setParam(10241, 9728);

            // gl.TEXTURE_MAG_FILTER , gl.NEAREST
            depthTexture.setParam(10240, 9728);

            depthTexture.setImg(null, width, height);

            return depthTexture;
        }
    }, {
        key: '_genColorTexture',
        value: function _genColorTexture(label, width, height) {
            var colorTexture = new _Texture2.default(label);

            colorTexture.mipmap = false;

            // Delete linear filter
            if (false) {
                // gl.TEXTURE_WRAP_S , gl.CLAMP_TO_EDGE
                colorTexture.setParam(10242, 33071);

                // gl.TEXTURE_WRAP_T , gl.CLAMP_TO_EDGE
                colorTexture.setParam(10243, 33071);

                // gl.TEXTURE_MIN_FILTER , gl.NEAREST
                colorTexture.setParam(10241, 9728);

                // gl.TEXTURE_MAG_FILTER , gl.NEAREST
                colorTexture.setParam(10240, 9728);
            }

            colorTexture.setImg(null, width, height);

            return colorTexture;
        }
    }, {
        key: 'pingpong',
        value: function pingpong() {
            this._pingpong = !this._pingpong;
        }
    }, {
        key: 'resize',
        value: function resize(width, height) {
            this.width = width;
            this.height = height;

            this.updated = true;
        }
    }, {
        key: 'isInitialized',
        value: function isInitialized() {
            return !!this.frameBuffer.pointer;
        }
    }, {
        key: 'init',
        value: function init(gl) {
            if (!ScreenRecorder._DATA_INITIALIZED) {
                ScreenRecorder.SET_DATA(gl);
            }

            if (this.recordDepth) {
                if (!ScreenRecorder.WEBGL_depth_texture) {
                    console.warn('WEBGL_depth_texture Extension not available!');
                    this.recordDepth = false;
                } else {
                    this.depthTexture = this._genDepthTexture('frameBufferDepth', this.width, this.height);
                    this.depthTexture.init(gl);
                }
            }

            if (this.captureDepth) {
                this.renderBuffer = new _RenderBuffer2.default(this.width, this.height);
                this.renderBuffer.init(gl);
            }

            this.frameBuffer.init(gl);

            this.pingpong();
            this.colorTexture.init(gl);

            this.pingpong();
            this.colorTexture.init(gl);

            // gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture.pointer, 0)


            if (this.depthTexture) gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture.pointer, 0);else if (this.renderBuffer) gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer.pointer);

            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);

            return true;
        }

        /*draw(gl)
        {
            this.texture.draw(gl)
        }*/

    }, {
        key: '_update',
        value: function _update(gl) {
            var width = this.width;
            var height = this.height;

            this.pingpong();
            this.colorTexture.resize(width, height, gl);

            this.pingpong();
            this.colorTexture.resize(width, height, gl);

            if (this.depthTexture) this.depthTexture.resize(width, height, gl);

            if (this.renderBuffer) this.renderBuffer.resize(width, height, gl);

            this.updated = false;
        }
    }, {
        key: 'start',
        value: function start(gl) {
            var captureDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.updated) this._update(gl);

            this.frameBuffer.bind(gl);

            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture.pointer, 0);

            if (this.depthTexture) gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, captureDepth ? this.depthTexture.pointer : null, 0);else if (this.renderBuffer) gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, captureDepth ? this.renderBuffer.pointer : null);

            // this.frameBufferIndex.bind(gl)
        }
    }, {
        key: 'stop',
        value: function stop(gl) {
            this.frameBuffer.free(gl);
            // this.frameBufferIndex.free(gl)
        }

        /* draw(gl, location, index)
        {
            
        }*/

    }, {
        key: 'colorTexture',
        get: function get() {
            return this._colorTextures[this._pingpong ? 1 : 0];
        }
    }], [{
        key: 'SET_DATA',
        value: function SET_DATA(gl) {
            ScreenRecorder.WEBGL_depth_texture = gl.getExtension('WEBGL_depth_texture') || gl.getExtension('WEBKIT_WEBGL_depth_texture') || gl.getExtension('MOZ_WEBGL_depth_texture');

            ScreenRecorder._DATA_INITIALIZED = true;
        }
    }]);

    return ScreenRecorder;
}();

exports.default = ScreenRecorder;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// All values and structures referenced from:
// http://msdn.microsoft.com/en-us/library/bb943991.aspx/
//
// DX10 Cubemap support based on
// https://github.com/dariomanesku/cmft/issues/7#issuecomment-69516844
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb943983(v=vs.85).aspx
// https://github.com/playcanvas/engine/blob/master/src/resources/resources_texture.js

var DDS_MAGIC = 0x20534444
var DDSD_MIPMAPCOUNT = 0x20000
var DDPF_FOURCC = 0x4

var FOURCC_DXT1 = fourCCToInt32('DXT1')
var FOURCC_DXT3 = fourCCToInt32('DXT3')
var FOURCC_DXT5 = fourCCToInt32('DXT5')
var FOURCC_DX10 = fourCCToInt32('DX10')
var FOURCC_FP32F = 116 // DXGI_FORMAT_R32G32B32A32_FLOAT

var DDSCAPS2_CUBEMAP = 0x200
var D3D10_RESOURCE_DIMENSION_TEXTURE2D = 3
var DXGI_FORMAT_R32G32B32A32_FLOAT = 2

// The header length in 32 bit ints
var headerLengthInt = 31

// Offsets into the header array
var off_magic = 0
var off_size = 1
var off_flags = 2
var off_height = 3
var off_width = 4
var off_mipmapCount = 7
var off_pfFlags = 20
var off_pfFourCC = 21
var off_caps2 = 28

module.exports = parseHeaders

function parseHeaders (arrayBuffer) {
  var header = new Int32Array(arrayBuffer, 0, headerLengthInt)

  if (header[off_magic] !== DDS_MAGIC) {
    throw new Error('Invalid magic number in DDS header')
  }

  if (!header[off_pfFlags] & DDPF_FOURCC) {
    throw new Error('Unsupported format, must contain a FourCC code')
  }

  var blockBytes
  var format
  var fourCC = header[off_pfFourCC]
  switch (fourCC) {
    case FOURCC_DXT1:
      blockBytes = 8
      format = 'dxt1'
      break
    case FOURCC_DXT3:
      blockBytes = 16
      format = 'dxt3'
      break
    case FOURCC_DXT5:
      blockBytes = 16
      format = 'dxt5'
      break
    case FOURCC_FP32F:
      format = 'rgba32f'
      break
    case FOURCC_DX10:
      var dx10Header = new Uint32Array(arrayBuffer.slice(128, 128 + 20))
      format = dx10Header[0]
      var resourceDimension = dx10Header[1]
      var miscFlag = dx10Header[2]
      var arraySize = dx10Header[3]
      var miscFlags2 = dx10Header[4]

      if (resourceDimension === D3D10_RESOURCE_DIMENSION_TEXTURE2D && format === DXGI_FORMAT_R32G32B32A32_FLOAT) {
        format = 'rgba32f'
      } else {
        throw new Error('Unsupported DX10 texture format ' + format)
      }
      break
    default:
      throw new Error('Unsupported FourCC code: ' + int32ToFourCC(fourCC))
  }

  var flags = header[off_flags]
  var mipmapCount = 1

  if (flags & DDSD_MIPMAPCOUNT) {
    mipmapCount = Math.max(1, header[off_mipmapCount])
  }

  var cubemap = false
  var caps2 = header[off_caps2]
  if (caps2 & DDSCAPS2_CUBEMAP) {
    cubemap = true
  }

  var width = header[off_width]
  var height = header[off_height]
  var dataOffset = header[off_size] + 4
  var texWidth = width
  var texHeight = height
  var images = []
  var dataLength

  if (fourCC === FOURCC_DX10) {
    dataOffset += 20
  }

  if (cubemap) {
    for (var f = 0; f < 6; f++) {
      if (format !== 'rgba32f') {
        throw new Error('Only RGBA32f cubemaps are supported')
      }
      var bpp = 4 * 32 / 8

      width = texWidth
      height = texHeight

      // cubemap should have all mipmap levels defined
      // Math.log2(width) + 1
      var requiredMipLevels = Math.log(width) / Math.log(2) + 1

      for (var i = 0; i < requiredMipLevels; i++) {
        dataLength = width * height * bpp
        images.push({
          offset: dataOffset,
          length: dataLength,
          shape: [ width, height ]
        })
        // Reuse data from the previous level if we are beyond mipmapCount
        // This is hack for CMFT not publishing full mipmap chain https://github.com/dariomanesku/cmft/issues/10
        if (i < mipmapCount) {
          dataOffset += dataLength
        }
        width = Math.floor(width / 2)
        height = Math.floor(height / 2)
      }
    }
  } else {
    for (var i = 0; i < mipmapCount; i++) {
      dataLength = Math.max(4, width) / 4 * Math.max(4, height) / 4 * blockBytes

      images.push({
        offset: dataOffset,
        length: dataLength,
        shape: [ width, height ]
      })
      dataOffset += dataLength
      width = Math.floor(width / 2)
      height = Math.floor(height / 2)
    }
  }

  return {
    shape: [ texWidth, texHeight ],
    images: images,
    format: format,
    flags: flags,
    cubemap: cubemap
  }
}

function fourCCToInt32 (value) {
  return value.charCodeAt(0) +
    (value.charCodeAt(1) << 8) +
    (value.charCodeAt(2) << 16) +
    (value.charCodeAt(3) << 24)
}

function int32ToFourCC (value) {
  return String.fromCharCode(
    value & 0xff,
    (value >> 8) & 0xff,
    (value >> 16) & 0xff,
    (value >> 24) & 0xff
  )
}


/***/ })
/******/ ]);