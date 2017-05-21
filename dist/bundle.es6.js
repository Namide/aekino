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
    constructor(label, type, data, isArray = false)
    {
        this.label = label
        this.type = type
        this.data = data
        // this.location = null
        
        this._init(type, isArray)
    }
    
    // Generate draw function
    _init(type, isArray)
    {
        switch(this.type)
        {
            case 35676: // gl.FLOAT_MAT4
            {
                this.draw = (gl, location) =>
                {
                    gl.uniformMatrix4fv(location, false, this.data)
                }
                break
            }
            case 35665: // gl.FLOAT_VEC3
            {
                this.draw = (gl, location) =>
                {
                    gl.uniform3f(location, ...this.data)
                }
                
                break
            }
            case 5124 : // gl.INT
                this.draw = (gl, location) =>
                {
                    gl.uniform1i(location, this.data)
                }
                break
                
            case -1 :
                this.draw = (gl, location) =>
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Uniform;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_object_Mesh__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_geom_Geom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_uniform_Uniform__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_texture_TextureContainer__ = __webpack_require__(17);
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






// https://www.wanadev.fr/34-trucs-et-astuces-webgl/
class Pass extends __WEBPACK_IMPORTED_MODULE_0__data_object_Mesh__["a" /* default */]
{
    constructor(program, vertexLabel = 'aVertexPosition', textureLabel = 'uSample')
    {
        const geom = new __WEBPACK_IMPORTED_MODULE_1__data_geom_Geom__["a" /* default */]()
        const quadVertices = [
             1.0, 1.0,
            -1.0, 1.0,
            -1.0, -1.0,
            -1.0, -1.0,
             1.0, -1.0,
             1.0, 1.0
        ]
        geom.addVertices(vertexLabel, quadVertices, 2)
        
        super(geom, program)
    }

    resize(width, height)
    {
        if (this.uWidth)
            this.uWidth.data = width
        
        if (this.uHeight)
            this.uHeight.data = height
    }
    
    useUWidth(label, width)
    {
        const uniform = new __WEBPACK_IMPORTED_MODULE_2__data_uniform_Uniform__["a" /* default */](label, 5124 /* gl.INT */, width)
        this.uWidth = uniform
        this.addUniform(uniform)
    }
    
    useUHeight(label, height)
    {
        const uniform = new __WEBPACK_IMPORTED_MODULE_2__data_uniform_Uniform__["a" /* default */](label, 5124 /* gl.INT */, height)
        this.uHeight = uniform
        this.addUniform(uniform)
    }
    
    useColorTexture(label)
    {
        const texture = new __WEBPACK_IMPORTED_MODULE_3__data_texture_TextureContainer__["a" /* default */](label)
        this.inColorTexture = texture
        this.addTexture(texture)
    }
    
    useDepthTexture(labelTexture, labelEnable)
    {
        const texture = new __WEBPACK_IMPORTED_MODULE_3__data_texture_TextureContainer__["a" /* default */](labelTexture)
        this.inDepthTexture = texture
        this.addTexture(texture)
        
        const detpthTextureEnable = new __WEBPACK_IMPORTED_MODULE_2__data_uniform_Uniform__["a" /* default */](labelEnable, 5124 /* gl.INT */, 1)
        this._inDetpthEnableUniform = detpthTextureEnable
        this.addUniform(detpthTextureEnable)
    }
    
    /**
     * Enable or disable depth texture
     */
    setDepthTexture(enable, gl)
    {
        this.rmTexture(this.inDepthTexture)
        
        if (enable)
            this.addTexture(this.inDepthTexture)
            
        this._inDetpthEnableUniform.data = enable ? 1 : 0
        
        const globalUniforms = this.globalUniforms
        this.dispose()
        this.init(gl, globalUniforms)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pass;


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
            const textureLocation = gl.getUniformLocation(this.pointer, label)
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
/* 3 */
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

class CallOptimizer
{
    constructor()
    {
        this.lastTexture = null
        this.lastProgram = null
    }
    
    optimizeTexture(texture)
    {
        const lastTexture = this.lastTexture
        this.lastTexture = texture
        
        return texture === lastTexture
    }
    
    optimizeProgram(program)
    {
        const lastProgram = this.lastProgram
        this.lastProgram = program
        
        return program === lastProgram
    }
    
    static getInstance(gl)
    {
        const i = CallOptimizer.glList.indexOf(gl)
        if (i < 0)
        {
            const co = new CallOptimizer()
            
            CallOptimizer.glList.push(gl)
            CallOptimizer.list.push(co)
            
            return co
        }
        
        return CallOptimizer.list[i]
    }
}

CallOptimizer.glList = []
CallOptimizer.list = []


/* harmony default export */ __webpack_exports__["a"] = (CallOptimizer);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Buffer__ = __webpack_require__(7);
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
        gl.vertexAttribPointer(location, this.itemSize, this.itemType, false, 0, 0)
    }

    copy(attribute = new Attribute(this.label))
    {
        attribute.label = this.label
        super.copy(attribute)

        return attribute
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Attribute;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Buffer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Attribute__ = __webpack_require__(4);
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
        const attribute = new __WEBPACK_IMPORTED_MODULE_1__core_Attribute__["a" /* default */](label)
        attribute.setArray(new Float32Array(vertices), 34962 /* gl.ARRAY_BUFFER */)
        attribute.setItems(5126 /* gl.FLOAT */, dimension)
        
        this.attributes.push(attribute)
        
        if (this.numItems < 1)
            this.numItems = vertices.length / dimension
    }
    
    addIndices(indices)
    {
        this.hasIndices = true
        
        const buffer = new __WEBPACK_IMPORTED_MODULE_0__core_Buffer__["a" /* default */]()
        
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_CallOptimizer__ = __webpack_require__(3);
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
        this.globalUniforms = []
        this.textures = []
        
        this.localCalls = []
        this.globalCalls = []
        
        this.order = 0
        
        this._isInitialized = false
    }
    
    addUniform(uniform)
    {
        this.uniforms.push(uniform)
    }
    
    rmUniform(uniform)
    {
        const i = this.uniforms.indexOf(uniform)
        if (i > -1)
            this.uniforms.splice(i, 1)
    }
    
    addTexture(texture)
    {
        this.textures.push(texture)
    }
    
    rmTexture(texture)
    {
        const i = this.textures.indexOf(texture)
        if (i > -1)
            this.textures.splice(i, 1)
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
    
    dispose()
    {
        this._isInitialized = false
        this.localCalls.length = 0
    }
    
    init(gl, globalUniforms)
    {
        const program = this.program
        let success = true

        // Use program
        if (!this.program.isInitialized())
        {
            if (!this.program.init(gl))
                success = false
        }
        else
        {
            this.program.draw(gl)
        }
        
        
        // Init all mesh data (textures, buffers, attributes, uniforms)
        if (!this._initData(gl))
            success = false
        
        
        // Store all calls (mesh data + global data)
        if (success && this.localCalls.length < 1)
            this._setCalls(gl, globalUniforms)
        
        
        // Save global uniforms
        this.globalUniforms = [...globalUniforms]
            
        
        this._isInitialized = success
        return success
    }
    
    draw(gl, customCalls = [])
    {
        const callOptimizer = __WEBPACK_IMPORTED_MODULE_0__render_CallOptimizer__["a" /* default */].getInstance(gl)

        // Use program, if ok call globals
        const program = this.program
        const optimizeProgram = callOptimizer.optimizeProgram(program)
        if (!optimizeProgram)
        {
            this.program.draw(gl)
            
            for(const callback of this.globalCalls)
                callback()
        }
        
        // Call local
        for(const callback of this.localCalls)
            callback()
        
        // Call local
        for(const callback of customCalls)
            callback()    
   
        // Draw mesh
        this.geom.display(gl)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mesh;



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

class Buffer
{
    constructor()
    {
        this.pointer = null
        this.gl = null

        this.arrayType = 34962
        this.data = null
        this.arrayUsage = 35044
    }
    
    isInitialized()
    {
        return !!this.pointer
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
    setArray(data, type = this.arrayType, usage = this.arrayUsage)
    {
        this.arrayType = type
        this.data = data
        this.arrayUsage = usage

        const gl = this.gl
        if (gl)
        {
            gl.bindBuffer(type, this.pointer)
            gl.bufferData(type, data, arrayUsage)
        }
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
        const buffer = gl.createBuffer()
        gl.bindBuffer(this.arrayType, buffer)
        gl.bufferData(this.arrayType, this.data, this.arrayUsage)
        
        this.pointer = buffer
        this.gl = gl

        return true
    }
    
    draw(gl)
    {
        gl.bindBuffer(this.arrayType, this.pointer)
    }

    copy(buffer = new Buffer())
    {
        buffer.setArray(this.data, this.arrayType, this.arrayUsage)
        buffer.setItems(this.itemType, this.itemSize)

        return buffer
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Buffer;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_CallOptimizer__ = __webpack_require__(3);
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
        this.mipmap = true
        
        this.img = null
        this.width = null
        this.height = null
        
        this.pointer = null
        this.parameters = [
            // [9729 /* gl.LINEAR */, 9987 /* gl.LINEAR_MIPMAP_LINEAR */]
        ]
        
        this.setType()
        this.setInternalFormat()
        this.setFormat()
        this.setTarget()
    }
    
    resize(width, height, gl = null)
    {
        this.width = width
        this.height = height
        
        if (gl)
        {
            gl.bindTexture(this.target, this.pointer)
            gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img)
        }
        else
        {
            this.updated = true
        }
    }
    
    setTempColor(color)
    {
        this.setImg(new Uint8Array(color), 1, 1)
    }
    
    
    
    setImg(img = new Uint8Array([255, 255, 255, 255]), width = 1, height = 1)
    {
        this.img = img
        this.width = width
        this.height = height
    }
    
    /*
        5121    gl.UNSIGNED_BYTE
        5123    gl.UNSIGNED_SHORT
    */
    setType(type = 5121)
    {
        this.type = type
    }
    
    /*
        6407    gl.RGB
        6408    gl.RGBA
        6402    gl.DEPTH_COMPONENT
    */
    setInternalFormat(format = 6408)
    {
        this.internalFormat = format
    }
    
    /*
        6407    gl.RGB
        6408    gl.RGBA
        6402    gl.DEPTH_COMPONENT
    */
    setFormat(format = 6408)
    {
        // this.internalformat = internalformat
        this.format = format
    }
    
    /*
        3553    gl.TEXTURE_2D           A two-dimensional texture.
        34067   gl.TEXTURE_CUBE_MAP     A cube-mapped texture.
    */
    setTarget(target = 3553)
    {
        this.target = target
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
    setParam(label, value)
    {
        const i = this.parameters.find(p => p[0] === label)

        if (i > -1)
            this.parameters[i][1] = value
        else
            this.parameters.push([label, value])
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    static IS_POWER_OF_2(val)
    {
        return (val & (val - 1)) === 0
    }
    
    static SET_DATA(gl)
    {
        Texture.MAX_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE)
        Texture.FORMAT = { }

        /*
        https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc
        */
        const formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
        for (let i = 0; i < formats.length; i++)
            Texture.FORMAT[formats[i]] = true

        Texture._DATA_INITIALIZED = true
    }
    
    setDefaultParams(gl)
    {
        if (this.mipmap)
        {
            // this.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        }
        else
        {
            this.setParam(gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            this.setParam(gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
            // this.setParam(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        }
    }
    
    initParams(gl)
    {
        if (this.mipmap)
        {
            const img = this.img
            if (img === null)
            {
                console.warn('You need an image to set the parameters of texture')
            }
            else if (Texture.IS_POWER_OF_2(img.width) && Texture.IS_POWER_OF_2(img.height))
            {
                gl.generateMipmap(this.target)
            }
            else
            {
                this.mipmap = false
                console.warn('You need a power of 2 for the size of the mipmaped texture')
            }
        }
        
        if (this.parameters.length < 1)
            this.setDefaultParams(gl)
        
        for (const [pname, param] of this.parameters)
            gl.texParameteri(this.target, pname, param)
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
        
        
        gl.bindTexture(this.target, texture)
        gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img)
        this.initParams(gl)
        
        /*const location = program.getTextureLocation(this.label)
        const index = program.getTextureIndex(this.label)
        gl.uniform1i(location, index)*/
        
        this.pointer = texture
        
        return true
    }
    
    draw(gl, location, index)
    {
        const callOptimizer = __WEBPACK_IMPORTED_MODULE_0__render_CallOptimizer__["a" /* default */].getInstance(gl)
        const optimizeTexture = callOptimizer.optimizeTexture(this)
        if (!optimizeTexture)
        {
            gl.uniform1i(location, index)
            gl.activeTexture(gl.TEXTURE0 + index)
            gl.bindTexture(this.target, this.pointer)

            if (this.updated)
            {
                gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.img)
                this.updated = false
            }
        }
        

        
        /*if (this === Texture.last)
            return false*/
        
        // const index = program.getTextureIndex(this.label)
            
        // gl.uniform1i(program.getTextureLocation(this.label), 0)
        
        /*Texture.last = this
        return true*/
    }
    
    free(gl)
    {
        gl.bindTexture(gl.TEXTURE_2D, null)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Texture;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const EPSILON = 0.000001

// Improve performances and weight
function setMat(a, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15)
{
    a[0] = m0
    a[1] = m1
    a[2] = m2
    a[3] = m3
    a[4] = m4
    a[5] = m5
    a[6] = m6
    a[7] = m7
    a[8] = m8
    a[9] = m9
    a[10] = m10
    a[11] = m11
    a[12] = m12
    a[13] = m13
    a[14] = m14
    a[15] = m15
}

class Matrix4 extends Float32Array
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
        const clone = new Matrix4()
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
        setMat(this, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)

        return this
    }

    add(mat4x4)
    {
        this[0] += mat4x4[0]
        this[1] += mat4x4[1]
        this[2] += mat4x4[2]
        this[3] += mat4x4[3]
        this[4] += mat4x4[4]
        this[5] += mat4x4[5]
        this[6] += mat4x4[6]
        this[7] += mat4x4[7]
        this[8] += mat4x4[8]
        this[9] += mat4x4[9]
        this[10] += mat4x4[10]
        this[11] += mat4x4[11]
        this[12] += mat4x4[12]
        this[13] += mat4x4[13]
        this[14] += mat4x4[14]
        this[15] += mat4x4[15]

        return this
    }

    subtract(mat4x4)
    {
        this[0] -= mat4x4[0]
        this[1] -= mat4x4[1]
        this[2] -= mat4x4[2]
        this[3] -= mat4x4[3]
        this[4] -= mat4x4[4]
        this[5] -= mat4x4[5]
        this[6] -= mat4x4[6]
        this[7] -= mat4x4[7]
        this[8] -= mat4x4[8]
        this[9] -= mat4x4[9]
        this[10] -= mat4x4[10]
        this[11] -= mat4x4[11]
        this[12] -= mat4x4[12]
        this[13] -= mat4x4[13]
        this[14] -= mat4x4[14]
        this[15] -= mat4x4[15]

        return this
    }

    multiplyScalar(scalar)
    {
        this[0] *= scalar
        this[1] *= scalar
        this[2] *= scalar
        this[3] *= scalar
        this[4] *= scalar
        this[5] *= scalar
        this[6] *= scalar
        this[7] *= scalar
        this[8] *= scalar
        this[9] *= scalar
        this[10] *= scalar
        this[11] *= scalar
        this[12] *= scalar
        this[13] *= scalar
        this[14] *= scalar
        this[15] *= scalar

        return this
    }

    multiplyScalarAndAdd(mat4x4, scalar)
    {
        this[0] += mat4x4[0] * scalar
        this[1] += mat4x4[1] * scalar
        this[2] += mat4x4[2] * scalar
        this[3] += mat4x4[3] * scalar
        this[4] += mat4x4[4] * scalar
        this[5] += mat4x4[5] * scalar
        this[6] += mat4x4[6] * scalar
        this[7] += mat4x4[7] * scalar
        this[8] += mat4x4[8] * scalar
        this[9] += mat4x4[9] * scalar
        this[10] += mat4x4[10] * scalar
        this[11] += mat4x4[11] * scalar
        this[12] += mat4x4[12] * scalar
        this[13] += mat4x4[13] * scalar
        this[14] += mat4x4[14] * scalar
        this[15] += mat4x4[15] * scalar

        return this
    }

    exactEquals(mat4x4)
    {
        return this[0] === mat4x4[0] && this[1] === mat4x4[1] && this[2] === mat4x4[2] && this[3] === mat4x4[3] && this[4] === mat4x4[4] && this[5] === mat4x4[5] && this[6] === mat4x4[6] && this[7] === mat4x4[7] && this[8] === mat4x4[8] && this[9] === mat4x4[9] && this[10] === mat4x4[10] && this[11] === mat4x4[11] && this[12] === mat4x4[12] && this[13] === mat4x4[13] && this[14] === mat4x4[14] && this[15] === mat4x4[15]
    }

    equals(mat4x4)
    {
        const [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15] = this
        const [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15] = mat4x4

        return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0))
            && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1))
            && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2))
            && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3))
            && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4))
            && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5))
            && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6))
            && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7))
            && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8))
            && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9))
            && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10))
            && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11))
            && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12))
            && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13))
            && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14))
            && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15)))
    }

    transpose(mat4x4)
    {
        if (mat4x4 === this)
        {
            const m1 = mat4x4[1]
            const m2 = mat4x4[2]
            const m3 = mat4x4[3]
            const m12 = mat4x4[6]
            const m13 = mat4x4[7]
            const m23 = mat4x4[11]
            
            this[1] = mat4x4[4]
            this[2] = mat4x4[8]
            this[3] = mat4x4[12]
            this[4] = m1
            this[6] = mat4x4[9]
            this[7] = mat4x4[13]
            this[8] = m2
            this[9] = m12
            this[11] = mat4x4[14]
            this[12] = m3
            this[13] = m13
            this[14] = m23
        }
        else
        {
            setMat(this, mat4x4[0], mat4x4[4], mat4x4[8], mat4x4[12], mat4x4[1], mat4x4[5], mat4x4[9], mat4x4[13], mat4x4[2], mat4x4[6], mat4x4[10], mat4x4[14], mat4x4[3], mat4x4[7], mat4x4[11], mat4x4[15])
        }

        return this
    }

    invert()
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
            return this

        det = 1.0 / det

        setMat(
            this, 
            (a11 * b11 - a12 * b10 + a13 * b09) * det,
            (a02 * b10 - a01 * b11 - a03 * b09) * det,
            (a31 * b05 - a32 * b04 + a33 * b03) * det,
            (a22 * b04 - a21 * b05 - a23 * b03) * det,
            (a12 * b08 - a10 * b11 - a13 * b07) * det,
            (a00 * b11 - a02 * b08 + a03 * b07) * det,
            (a32 * b02 - a30 * b05 - a33 * b01) * det,
            (a20 * b05 - a22 * b02 + a23 * b01) * det,
            (a10 * b10 - a11 * b08 + a13 * b06) * det,
            (a01 * b08 - a00 * b10 - a03 * b06) * det,
            (a30 * b04 - a31 * b02 + a33 * b00) * det,
            (a21 * b02 - a20 * b04 - a23 * b00) * det,
            (a11 * b07 - a10 * b09 - a12 * b06) * det,
            (a00 * b09 - a01 * b07 + a02 * b06) * det,
            (a31 * b01 - a30 * b03 - a32 * b00) * det,
            (a20 * b03 - a21 * b01 + a22 * b00) * det
        )

        return this
    }

    adjoint()
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = this

        setMat(
             this, 
             (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22)),
            -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22)),
             (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12)),
            -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12)),
            -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22)),
             (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22)),
            -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12)),
             (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12)),
             (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21)),
            -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21)),
             (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11)),
            -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11)),
            -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21)),
             (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21)),
            -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11)),
             (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11))
        )
        
        return this
    }

    determinant()
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = this

        const b00 = a00 * a11 - a01 * a10,
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
              b11 = a22 * a33 - a23 * a32

        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06
    }

    multiply(mat4x4)
    {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22,  a23,  a30,  a31,  a32,  a33] = this

        // Cache only the current line of the second matrix
        let [b0, b1, b2, b3] = mat4x4
        this[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4x4[4]
        b1 = mat4x4[5]
        b2 = mat4x4[6]
        b3 = mat4x4[7]

        this[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4x4[8]
        b1 = mat4x4[9]
        b2 = mat4x4[10]
        b3 = mat4x4[11]
        this[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        b0 = mat4x4[12]
        b1 = mat4x4[13]
        b2 = mat4x4[14]
        b3 = mat4x4[15]
        this[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
        this[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
        this[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
        this[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

        return this
    }

    translate([x, y, z])
    {
        this[12] = this[0] * x + this[4] * y + this[8] * z + this[12]
        this[13] = this[1] * x + this[5] * y + this[9] * z + this[13]
        this[14] = this[2] * x + this[6] * y + this[10] * z + this[14]
        this[15] = this[3] * x + this[7] * y + this[11] * z + this[15]

        return this
    }

    scale([x, y, z])
    {
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

    rotate(rad, [x, y, z])
    {
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
        setMat(this, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, vec3[0], vec3[1], vec3[2], 1)

        return this
    }

    fromScaling(vec3)
    {
        setMat(this, vec3[0], 0, 0, 0, 0, vec3[1], 0, 0, 0, 0, vec3[2], 0, 0, 0, 0, 1)

        return this
    }

    fromRotation(rad, [x, y, z])
    {
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
            setMat(
                this, 
                x * x * t + c,
                y * x * t + z * s,
                z * x * t - y * s,
                0,
                x * y * t - z * s,
                y * y * t + c,
                z * y * t + x * s,
                0,
                x * z * t + y * s,
                y * z * t - x * s,
                z * z * t + c,
                0,
                0,
                0,
                0,
                1
            )
        }

        return this
    }

    fromXRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        setMat(this, 1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1)

        return this
    }

    fromYRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        setMat(this, c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1)
        return this
    }

    fromZRotation(rad)
    {
        const s = Math.sin(rad)
        const c = Math.cos(rad)

        // Perform axis-specific matrix multiplication
        setMat(this, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)

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

        setMat(this, 1 - yy - zz, yx + wz, zx - wy, 0, yx - wz, 1 - xx - zz, zy + wx, 0, zx + wy, zy - wx, 1 - xx - yy, 0, 0, 0, 0, 1)

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

        setMat(this, 1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, vec3[0], vec3[1], vec3[2], 1)

        return this
    }

    fromRotationTranslationScale(quat, vec3, [sx, sy, sz])
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

        setMat(this, (1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0, (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0, (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0, vec3[0], vec3[1], vec3[2], 1)

        return this
    }

    fromRotationTranslationScaleOrigin(rot, trans, scale, origin)
    {
        // Quaternion math
        const [x, y, z, w] = rot
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

        setMat(
            this, 
            (1 - (yy + zz)) * sx,
            (xy + wz) * sx,
            (xz - wy) * sx,
            0,
            (xy - wz) * sy,
            (1 - (xx + zz)) * sy,
            (yz + wx) * sy,
            0,
            (xz + wy) * sz,
            (yz - wx) * sz,
            (1 - (xx + yy)) * sz,
            0,
            trans[0] + ox - (this[0] * ox + this[4] * oy + this[8] * oz),
            trans[1] + oy - (this[1] * ox + this[5] * oy + this[9] * oz),
            trans[2] + oz - (this[2] * ox + this[6] * oy + this[10] * oz),
            1
        )

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

        setMat(
            this, 
            (near * 2) * rl,
            0,
            0,
            0,
            0,
            (near * 2) * tb,
            0,
            0,
            (right + left) * rl,
            (top + bottom) * tb,
            (far + near) * nf,
            -1,
            0,
            0,
            (far * near * 2) * nf,
            0
        )

        return this
    }

    perspective(fovy, aspect, near, far)
    {
        const f = 1.0 / Math.tan(fovy / 2)
        const nf = 1 / (near - far)

        setMat(this, f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, (2 * far * near) * nf, 0)

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

        setMat(
            this, 
            xScale,
            0,
            0,
            0,
            0,
            yScale,
            0,
            0,
            -(leftTan - rightTan) * xScale * 0.5,
            (upTan - downTan) * yScale * 0.5,
            far / (near - far),
            -1.0,
            0,
            0,
            (far * near) / (near - far),
            0
        )

        return this
    }

    ortho(left, right, bottom, top, near, far)
    {
        const lr = 1 / (left - right)
        const bt = 1 / (bottom - top)
        const nf = 1 / (near - far)

        setMat(
            this, 
            -2 * lr,
            0,
            0,
            0,
            0,
            -2 * bt,
            0,
            0,
            0,
            0,
            2 * nf,
            0,
            (left + right) * lr,
            (top + bottom) * bt,
            (far + near) * nf,
            1
        )

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

        setMat(
            this, 
            x0,
            y0,
            z0,
            0,
            x1,
            y1,
            z1,
            0,
            x2,
            y2,
            z2,
            0,
            -(x0 * eyex + x1 * eyey + x2 * eyez),
            -(y0 * eyex + y1 * eyey + y2 * eyez),
            -(z0 * eyex + z1 * eyey + z2 * eyez),
            1
        )
        

        return this
    }

    frob()
    {
        return (Math.sqrt(Math.pow(this[0], 2) + Math.pow(this[1], 2) + Math.pow(this[2], 2) + Math.pow(this[3], 2) + Math.pow(this[4], 2) + Math.pow(this[5], 2) + Math.pow(this[6], 2) + Math.pow(this[7], 2) + Math.pow(this[8], 2) + Math.pow(this[9], 2) + Math.pow(this[10], 2) + Math.pow(this[11], 2) + Math.pow(this[12], 2) + Math.pow(this[13], 2) + Math.pow(this[14], 2) + Math.pow(this[15], 2)))
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Matrix4;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__ = __webpack_require__(9);
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





class Camera3D extends __WEBPACK_IMPORTED_MODULE_1__uniform_Uniform__["a" /* default */]
{
    constructor(label)
    {
        super(label, 35676, new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* default */]())
       
        this.fovy = 45
        this.near = 0.1
        this.far = 1000
        this._matrix = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* default */]()
        
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera3D;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_CallOptimizer__ = __webpack_require__(3);
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
        this.sortCompare = (mesh1, mesh2) =>
        {
            return mesh1.program.id - mesh2.program.id
        }
        
        this.resize(canvas.width, canvas.height)
    }
    
    _addCamToMeshs()
    {
        const cam = this.cam
        this.uniforms.push(cam)
    }
        
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
    
    sort()
    {
        this.meshs.sort(this.sortCompare)
    }
    
    resize(w, h)
    {
        /*const gl = this.gl
        gl.viewportWidth = w
        gl.viewportHeight = h*/
        this.width = w
        this.height = h
    }
    
    init(canvas)
    {
        let gl
        
        try
        {
            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
            // gl.viewportWidth = canvas.width
            // gl.viewportHeight = canvas.height
            // console.log(gl.viewportWidth)
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

        gl.viewport(0, 0, this.width, this.height)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        
        
        if (this.cam.updated)
            this.cam.update(this.width, this.height)
        
        for (const mesh of this.meshs)
        {
            if (mesh.isInitialized())
                mesh.draw(gl)
            else
                mesh.init(gl, this.uniforms)
        }        
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Texture__ = __webpack_require__(8);
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
        
        this.setTempColor([255, 255, 255, 255])
    }
    
    setTempColor(color)
    {
        this.setImg(new Uint8Array(color), 1, 1)
    }
    
    addURL(URL, size = 0)
    {
        const imgData = {
            size,
            src: URL,
            img: null,
            priority: 0,
            isImage: true,
            isValid: () => true,
            init: null
        }
        
        imgData.init = gl =>
        {
            gl.bindTexture(gl.TEXTURE_2D, this.pointer)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

            gl.texImage2D(gl.TEXTURE_2D, 0, 6408 /* gl.RGBA */, this.format, gl.UNSIGNED_BYTE, imgData.img)
            // Texture.SETUP(gl, imgData.img)
            // Texture.SETUP(gl, imgData.img)
            // gl.bindTexture(gl.TEXTURE_2D, null)
            
            this.img = imgData.img
            
            
            // this.mipmap = false
            // this.setParam(gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            // this.setParam(gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            this.initParams(gl)
        }
        
        this.srcs.push(imgData)
    }
    
    static START_LOAD(gl, srcs)
    {
        if (srcs.length > 0)
        {
            srcs.sort((a, b) => (a.size === b.size ? (a.size - b.size) : (a.priority - b.priority)))
            const srcsValid = srcs.filter(imgData => (imgData.size >= __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].MAX_SIZE && imgData.isValid(gl)))
            
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
            console.warn('URL of your smart texture not found')
        }
    }
    
    static LOAD(data, callback)
    {
        if (data.isImage)
        {
            const img = new Image()
            img.onload = () =>
            {
                callback(data)
            }
            data.img = img

            // console.log('LOAD', data.src)
            img.src = data.src
        }
        else
        {
            const request = new XMLHttpRequest()
            request.responseType = 'arraybuffer'
            request.open('GET', data.src, true)
            request.onreadystatechange = event =>
            {
                if (request.readyState === XMLHttpRequest.DONE)
                {
                    if (request.status === 200)
                    {
                        data.img = request.response
                        callback(data)
                    }
                    else
                    {
                        console.error('fail to load image ', data.src, 'status:', request.status, 'statuc text:', request.statusText)
                    }
                }
            }
            request.send()
        }
    }
    
    init(gl, program)
    {
        const success = super.init(gl, program)     
        const texture = this.pointer
        
        /* const changeImg = imgData =>
        {
            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

            gl.texImage2D(gl.TEXTURE_2D, 0, imgData.internalformat, this.format, gl.UNSIGNED_BYTE, imgData.img)
            
            this.img = imgData.img
            Texture.SETUP(gl, imgData.img)
            // gl.bindTexture(gl.TEXTURE_2D, null)
        }*/
        
        SmartTexture.START_LOAD(gl, this.srcs)
        return success
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SmartTexture;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__ = __webpack_require__(9);
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





class Transform3D extends __WEBPACK_IMPORTED_MODULE_1__uniform_Uniform__["a" /* default */]
{
    constructor(label)
    {
        super(label, 35676 /* gl.FLOAT_MAT4 */, new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* default */]().identity())
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Transform3D;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScreenRecorder__ = __webpack_require__(21);
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




// https://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/
class PassManager
{
    constructor(scene)
    {
        this.screenRecorder = new __WEBPACK_IMPORTED_MODULE_0__ScreenRecorder__["a" /* default */](scene.width, scene.height, true, true)
        
        this.scene = scene
        this.passList = []
        this.isEnable = false
        
        this.init(scene.gl)
    }
    
    isInitialized()
    {
        return this.screenRecorder.isInitialized()
    }
    
    resize(width, height)
    {
        this.scene.resize(width, height)
        this.screenRecorder.resize(width, height)
        
        for (const pass of this.passList)
            pass.resize(width, height)
    }
    
    _disableDepthInTexture(pass, gl)
    {
        if (pass.inDepthTexture)
            pass.setDepthTexture(false, gl)
    }
    
    init(gl)
    {
        this.screenRecorder.init(gl)
        
        if (!this.screenRecorder.depthTexture)
            for (const pass of this.passList)
                this._disableDepthInTexture(pass, gl)

        return true
    }
    
    addPass(pass)
    {
        pass.init(this.scene.gl, [])
        
        if (this.screenRecorder.isInitialized() && !this.screenRecorder.depthTexture)
            this._disableDepthInTexture(pass, this.scene.gl)
        
        if (pass.uWidth)
            pass.uWidth.data = this.scene.width

        if (pass.uHeight)
            pass.uHeight.data = this.scene.height
        
            
        this.passList.push(pass)
        

        this.isEnable = true
    }
    
    removePass(pass)
    {
        const i = this.passList.indexOf(pass)
        
        if (i > -1)
            this.passList.splice(i, 1)
        
        this.isEnable = this.passList.length > 0
    }
    
    // http://stackoverflow.com/questions/29578535/webgl-binding-of-a-framebuffer-and-renderbuffer
    draw()
    {
        const gl = this.scene.gl
        const passNumber = this.passList.length
        
        if (passNumber > 0)
        {
            this.screenRecorder.start(gl, true)
            this.scene.draw()
            this.screenRecorder.stop(gl)
            this.screenRecorder.pingpong()

            for (let i = 0; i < passNumber; i++)
            {
                const pass = this.passList[i]
                const last = i > (passNumber - 2)

                if (!last)
                    this.screenRecorder.start(gl, false)

                this.screenRecorder.pingpong()

                if (pass.inColorTexture)
                    pass.inColorTexture.setTexture(this.screenRecorder.colorTexture)


                if (pass.inDepthTexture && this.screenRecorder.depthTexture)
                    pass.inDepthTexture.setTexture(this.screenRecorder.depthTexture)

                pass.draw(gl)


                this.screenRecorder.stop(gl)
            }
        }
        else
        {
            this.scene.draw()
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PassManager;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_Program__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_uniform_Uniform__ = __webpack_require__(0);
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





const VERTEX_SHADER = `
    attribute vec3 aVertexPosition;
    varying vec2 vTextureCoord;

    void main(void)
    {
        vTextureCoord = vec2(aVertexPosition.x * 0.5 + 0.5, aVertexPosition.y * 0.5 + 0.5);
        gl_Position = vec4(aVertexPosition, 1.0);
    }`

const FRAGMENT_SHADER = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uColor;
    uniform sampler2D uDepth;

    uniform vec3 uColorFog;
    
    uniform int uDepthEnable;

    void main(void)
    {
        $chunkcall
        gl_FragColor = color;
    }`

function f(num)
{
    return Number.isInteger(num) ? num.toFixed(1) : num
}

class FogPass extends __WEBPACK_IMPORTED_MODULE_0__Pass__["a" /* default */]
{
    constructor({
        minDepth = 0.1,
        maxDepth = 0.2,
        minPower = 0.2,
        maxPower = 1,
        depthCurve = 100,
        color = [1.0, 1.0, 1.0]})
    {
        super(null, 'aVertexPosition', 'uColor')
        
        
        this.useColorTexture('uColor')
        this.useDepthTexture('uDepth', 'uDepthEnable')
        
        const uColor = new __WEBPACK_IMPORTED_MODULE_2__data_uniform_Uniform__["a" /* default */]('uColorFog', 35665 /* gl.FLOAT_VEC3 */, color )
        this.addUniform(uColor)
        
        const fragmentShader = this._initFragmentShader(minDepth, maxDepth, minPower, maxPower, depthCurve)
        
        this.program = new __WEBPACK_IMPORTED_MODULE_1__material_Program__["a" /* default */](VERTEX_SHADER, fragmentShader)
    }
    
    
    
    _initFragmentShader(minDepth, maxDepth, minPower, maxPower, depthCurve)
    {
        let chunkCall = `
            float depthValue = 0.0;
            if (uDepthEnable >= 0) {
                vec4 depth = texture2D(uDepth, vTextureCoord.xy);
                depthValue = pow(depth.x, ${f(depthCurve)});
                depthValue = (depthValue - ${f(minDepth)}) / ${f(maxDepth - minDepth)};
                depthValue = clamp(depthValue, ${f(minPower)}, ${f(maxPower)});
            }
            vec4 originalColor = texture2D(uColor, vTextureCoord.xy); 
            vec4 color = vec4(mix(originalColor.xyz, uColorFog, depthValue), originalColor.w);
        `
         // vec4(mix(color.xyz, bg, depthValue), 1.0);
        
        const fs = FRAGMENT_SHADER.replace('$chunkcall', chunkCall)
        
        return fs
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FogPass;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_Program__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_uniform_Uniform__ = __webpack_require__(0);
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





const VERTEX_SHADER = `
    attribute vec3 aVertexPosition;
    varying vec2 vTextureCoord;

    void main(void)
    {
        vTextureCoord = vec2(aVertexPosition.x * 0.5 + 0.5, aVertexPosition.y * 0.5 + 0.5);
        gl_Position = vec4(aVertexPosition, 1.0);
    }`

const FRAGMENT_SHADER = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uColor;
    uniform sampler2D uDepth;
    uniform int uSize;
    uniform int uDepthEnable;

    $chunkfct

    void main(void)
    {
        $chunkcall
        gl_FragColor = color;
    }`

function f(num)
{
    return Number.isInteger(num) ? num.toFixed(1) : num
}

// https://www.wanadev.fr/34-trucs-et-astuces-webgl/
class GaussianBlurPass extends __WEBPACK_IMPORTED_MODULE_0__Pass__["a" /* default */]
{
    constructor({
        minDepth = 0.1,
        maxDepth = 0.2,
        samples = 5,
        xBlur = true,
        power = 1,
        depthCurve = 100 })
    {
        super(null, 'aVertexPosition', 'uColor')
        
        this.power = power
        this.xBlur = xBlur
        this.depthCurve = depthCurve
        this.useColorTexture('uColor')
        this.useDepthTexture('uDepth', 'uDepthEnable')
        
        const fragmentShader = this._initFragmentShader(minDepth, maxDepth, samples)
        this.program = new __WEBPACK_IMPORTED_MODULE_1__material_Program__["a" /* default */](VERTEX_SHADER, fragmentShader)
        
        if (xBlur)
            this.useUWidth('uSize', 1)
        else
            this.useUHeight('uSize', 1)
    }
    
    
    
    _initFragmentShader(minDepth = 0.1, maxDepth = 0.3, samples = 5)
    {
        const xBlur = this.xBlur
        const powerStr = f(this.power)
        const kernels = []
        for (let i = 0; i < samples; i++)
        {
            const kernel = this._getKernels(i + 1)
            // const uKernel = new Uniform('uKernel' + (i - 1), )
            kernels.push(kernel)
        }
        
        let chunkFct = ''
        for (let i = 0; i < kernels.length; i++)
        {
            const kernel = kernels[i]
            chunkFct += `
            vec4 blur${i + 1}(sampler2D i, vec2 uv) {
                vec2 m;
                vec4 color = texture2D(i, uv) * ${f(kernel[0])};`

            for (let j = 1; j < kernel.length; j++)
            {
                chunkFct += `
                m = ${xBlur ? 'vec2(' + j + '.0 * ' + powerStr + ' / float(uSize), 0.0)' : ('vec2(0.0, ' + j + '.0 * ' + powerStr + ' / float(uSize))')};
                color += texture2D(i, uv + m) * ${ f(kernel[j]) };
                color += texture2D(i, uv - m) * ${ f(kernel[j]) };`
            }
            
            chunkFct += 'return color; }'
            
        }
        
        
        let chunkCall = `
            float depthValue = 0.0;
            vec4 color;
            if (uDepthEnable >= 0) {
                vec4 depth = texture2D(uDepth, vTextureCoord.xy);
                depthValue = pow(depth.x, ${f(this.depthCurve)});
                
                int blurPower = int(floor(0.5 + (depthValue - ${f(minDepth)}) * ${f(samples)} / ${f(maxDepth - minDepth)}));   
        `

        for (let i = 0; i < samples; i++)
        {
            const condition = 'blurPower' + ((i > samples - 2 ) ? (' >= ' + i ) : (i < 1) ? (' < 1') : (' == ' + i) );
            
            chunkCall += `${i > 0 ? ' else if' : 'if'} ( ${condition}) {
                color = blur${i + 1}(uColor, vTextureCoord.xy);
            }`
        }
        chunkCall += `
        } else {
            color = texture2D(uColor, vTextureCoord.xy);
        }
        `
        
        
        const fs = FRAGMENT_SHADER.replace('$chunkfct', chunkFct).replace('$chunkcall', chunkCall)
        
        return fs
    }
    
    _getKernels(max)
    {
        const list = []
        let sum = 0
        for (let i = 1; i < max + 2; i++)
        {
            // y = exp(-(x*6)^2)
            // x -> [0, 1]
            // y -> [0, 1]
            const a = (i - 1) * 3 / max            
            const val = Math.exp(-a * a)
            sum += (i < 2) ? val : (val + val)
            list.push(val)
        }
        
        
        
        for (let i = 0; i < list.length; i++)
            list[i] /= sum
            
        /* let test = list[0]
        for (let i = 1; i < list.length; i++)
            test += list[i] * 2
        console.log(test)*/
        
        return list
    }
    
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GaussianBlurPass;


/***/ }),
/* 17 */
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

class TextureContainer
{
    constructor(label)
    {
        this.label = label
    }

    isInitialized()
    {
        return true
    }

    init(gl)
    {
        return true
    }

    setTexture(texture)
    {
        this.pointer = texture.pointer
        this.target = texture.target
    }
    
    draw(gl, location, index)
    {
        gl.uniform1i(location, index)
        gl.activeTexture(gl.TEXTURE0 + index)
        gl.bindTexture(this.target, this.pointer)
        
        // console.log('CONT -', this.label)
        // this.texture.draw(gl, location, index)
        // console.log('- CONT')
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextureContainer;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_uniform_Uniform__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_uniform_Transform3D__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_core_Attribute__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader_material_Program__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_geom_Geom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_texture_SmartTexture__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_object_Mesh__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_object_Camera3D__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_object_Scene__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shader_filter_Pass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__render_PassManager__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shader_filter_GaussianBlurPass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shader_filter_FogPass__ = __webpack_require__(15);
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


















// import FXAAPass from './shader/filter/FXAAPass'



// Use term "compile" not "init"

const canvas = document.body.querySelector('canvas')


// Camera
const cam3D = new __WEBPACK_IMPORTED_MODULE_7__data_object_Camera3D__["a" /* default */]('uPMatrix')
// cam3D.matrix.translate([-1.5, 0.0, -7.0])


// Scene
const scene = new __WEBPACK_IMPORTED_MODULE_8__data_object_Scene__["a" /* default */](canvas, cam3D)
scene.bgColor = [0.0, 0.0, 0.1, 1.0]
scene.depthTest = true



// Programs
const colorProgram = new __WEBPACK_IMPORTED_MODULE_3__shader_material_Program__["a" /* default */]()

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
const fogProgram = new __WEBPACK_IMPORTED_MODULE_3__shader_material_Program__["a" /* default */](fogVertexShader)



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

const pyramidGeom = new __WEBPACK_IMPORTED_MODULE_4__data_geom_Geom__["a" /* default */]()
pyramidGeom.addVertices('aVertexPosition', pyramidVertices, 3)
pyramidGeom.addVertices('aVertexColor', pyramidColors, 4)
    
const pyramidMesh = new __WEBPACK_IMPORTED_MODULE_6__data_object_Mesh__["a" /* default */](pyramidGeom, colorProgram)
const pyramidUniformMatrix = new __WEBPACK_IMPORTED_MODULE_1__data_uniform_Transform3D__["a" /* default */]('uMVMatrix')
pyramidMesh.addUniform(pyramidUniformMatrix)
pyramidMesh.matrix = pyramidUniformMatrix.data
pyramidMesh.matrix.translate([-1.5, -1.5, -8.0])
scene.addMesh(pyramidMesh)




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
    for (let j = 0; j < 4; j++)
        unpackedCubeColors = unpackedCubeColors.concat(cubeColors[i])


const cubeGeom = new __WEBPACK_IMPORTED_MODULE_4__data_geom_Geom__["a" /* default */]()
cubeGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeGeom.addVertices('aVertexColor', unpackedCubeColors, 4)
cubeGeom.addIndices(cubeIndices)

const cubeMesh = new __WEBPACK_IMPORTED_MODULE_6__data_object_Mesh__["a" /* default */](cubeGeom, fogProgram)
const cubeUniformMatrix = new __WEBPACK_IMPORTED_MODULE_1__data_uniform_Transform3D__["a" /* default */]('uMVMatrix')
cubeMesh.addUniform(cubeUniformMatrix)
cubeMesh.matrix = cubeUniformMatrix.data
cubeMesh.matrix.translate([1.5, -1.5, -8.0])
scene.addMesh(cubeMesh)




// ----------------------------
//
//      PYRAMID RAINBOW INVERT
//
// ----------------------------

const pyramidMesh2 = new __WEBPACK_IMPORTED_MODULE_6__data_object_Mesh__["a" /* default */](pyramidGeom, colorProgram)
const pyramidUniformMatrix2 = new __WEBPACK_IMPORTED_MODULE_1__data_uniform_Transform3D__["a" /* default */]('uMVMatrix')
pyramidMesh2.addUniform(pyramidUniformMatrix2)
pyramidMesh2.matrix = pyramidUniformMatrix2.data
pyramidMesh2.matrix.translate([-1.5, 1.5, -8.0])
pyramidMesh2.matrix.scale([1, -1, 1])

scene.addMesh(pyramidMesh2)




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

    uniform sampler2D uDiffuse1;
    uniform sampler2D uDiffuse2;

    void main(void) {
        vec4 color1 = texture2D(uDiffuse1, vec2(vTextureCoord.s, vTextureCoord.t));
        vec4 color2 = texture2D(uDiffuse2, vec2(vTextureCoord.s, vTextureCoord.t));
        float power = ((sin(vTextureCoord.s * 3.1415)) * (sin(vTextureCoord.t * 3.1415)));
        gl_FragColor = mix(color1, color2, power);
    }`

const texturedProgram = new __WEBPACK_IMPORTED_MODULE_3__shader_material_Program__["a" /* default */](vertexTextureShader, fragmentTextureShader)

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

const cubeTexture = new __WEBPACK_IMPORTED_MODULE_5__data_texture_SmartTexture__["a" /* default */]('uDiffuse1')
cubeTexture.addURL('cube-diffuse.jpg')

const cubeTexture2 = new __WEBPACK_IMPORTED_MODULE_5__data_texture_SmartTexture__["a" /* default */]('uDiffuse2')
cubeTexture2.setParam(10240, 9728)  // Pixelise
cubeTexture2.setParam(10241, 9728)  // Pixelise
cubeTexture2.addURL('cube-diffuse-2.png')

const cubeTexturedGeom = new __WEBPACK_IMPORTED_MODULE_4__data_geom_Geom__["a" /* default */]()
cubeTexturedGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeTexturedGeom.addVertices('aTextureCoord', cubeUV, 2)
cubeTexturedGeom.addIndices(cubeIndices)

const cubeTexturedMesh = new __WEBPACK_IMPORTED_MODULE_6__data_object_Mesh__["a" /* default */](cubeTexturedGeom, texturedProgram)
const cubeTexturedUniformMatrix = new __WEBPACK_IMPORTED_MODULE_1__data_uniform_Transform3D__["a" /* default */]('uMVMatrix')
cubeTexturedMesh.addUniform(cubeTexturedUniformMatrix)
cubeTexturedMesh.matrix = cubeTexturedUniformMatrix.data
cubeTexturedMesh.addTexture(cubeTexture)
cubeTexturedMesh.addTexture(cubeTexture2)
cubeTexturedMesh.matrix.translate([1.5, 1.5, -8.0])
scene.addMesh(cubeTexturedMesh)




// ----------------------------
//
//      CUBE WOOD 2
//
// ----------------------------

const cubeTexturedMesh2 = new __WEBPACK_IMPORTED_MODULE_6__data_object_Mesh__["a" /* default */](cubeTexturedGeom, texturedProgram)
const cubeTexturedUniformMatrix2 = new __WEBPACK_IMPORTED_MODULE_1__data_uniform_Transform3D__["a" /* default */]('uMVMatrix')
cubeTexturedMesh2.addUniform(cubeTexturedUniformMatrix2)
cubeTexturedMesh2.matrix = cubeTexturedUniformMatrix2.data
cubeTexturedMesh2.addTexture(cubeTexture)
cubeTexturedMesh2.addTexture(cubeTexture2)
cubeTexturedMesh2.matrix.translate([0, 0, -15.0])
scene.addMesh(cubeTexturedMesh2)



// Optimize order by program (reduce calls)
scene.sort()












const PASS_ENABLE = true

let passManager
if (PASS_ENABLE)
{
    passManager = new __WEBPACK_IMPORTED_MODULE_10__render_PassManager__["a" /* default */](scene)
    // passManager.resize(size[0] * resolution, size[1] * resolution)
    
    const fogPass = new __WEBPACK_IMPORTED_MODULE_12__shader_filter_FogPass__["a" /* default */]({
        minDepth: 0.5,
        maxDepth: 0.6,
        minPower: 0,
        maxPower: 1,
        depthCurve: 100,
        color: [0.9, 0.95, 1.0]
    })
    passManager.addPass(fogPass)
    
    const gaussianOptions = {
        minDepth: 0.52,
        maxDepth: 0.7,
        samples: 20,
        xBlur: true,
        power: 1,
        depthCurve: 50
    }
    const gaussianBlurX = new __WEBPACK_IMPORTED_MODULE_11__shader_filter_GaussianBlurPass__["a" /* default */](gaussianOptions)
    passManager.addPass(gaussianBlurX)
    
    gaussianOptions.xBlur = false
    const gaussianBlurY = new __WEBPACK_IMPORTED_MODULE_11__shader_filter_GaussianBlurPass__["a" /* default */](gaussianOptions)
    passManager.addPass(gaussianBlurY)
}




const resize = () =>
{
    const size = [window.innerWidth, window.innerHeight]
    const resolution = 1

    if (PASS_ENABLE)
        passManager.resize(size[0] * resolution, size[1] * resolution)
    else
        scene.resize(size[0] * resolution, size[1] * resolution)

    canvas.width = size[0] * resolution
    canvas.height = size[1] * resolution
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    cam3D.update(...size)
}
window.onresize = resize
resize()






// debug
window.scene = scene
window.passManager = passManager

refresh()
function refresh()
{    
    // console.time('draw')
    pyramidMesh.matrix.rotate(0.005, [0, 1, 0])
    pyramidMesh2.matrix.rotate(-0.005, [0, 1, 0])
    cubeMesh.matrix.rotate(0.01, [0, 1, 0])
    cubeTexturedMesh.matrix.rotate(-0.01, [0, 1, 0])
    cubeTexturedMesh2.matrix.rotate(0.025, [0.72, -0.33, 0.5])
    
    
    if (PASS_ENABLE)
        passManager.draw()
    else
        scene.draw()

    
    // console.timeEnd('draw')
    
    requestAnimationFrame(refresh)
}


/***/ }),
/* 19 */
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

class FrameBuffer
{
    constructor(width, height)
    {
        this.pointer = null
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    init(gl)
    {
        const frameBuffer = gl.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer)
        
        this.pointer = frameBuffer
        
        return true
    }
    
    bind(gl)
    {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.pointer)
    }
    
    free(gl)
    {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FrameBuffer;


/***/ }),
/* 20 */
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

class RenderBuffer
{
    constructor(width, height)
    {
        this.pointer = null
        this.width = width
        this.height = height
    }
    
    resize(width, height)
    {
        this.width = width
        this.height = height
        
        this.updated = true
    }
    
    isInitialized()
    {
        return !!this.pointer
    }
    
    init(gl)
    {
        const renderBuffer = gl.createRenderbuffer()
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height)
        
        this.pointer = renderBuffer
    }
    
    bind(gl)
    {
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer)
        
        if (this.updated)
        {
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height)
            this.updated = false
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderBuffer;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_texture_Texture__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RenderBuffer__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FrameBuffer__ = __webpack_require__(19);
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





class ScreenRecorder
{
    constructor(width, height, captureDepth = true, recordDepth = false)
    {
        this.captureDepth = captureDepth
        this.recordDepth = recordDepth
        
        this.width = width
        this.height = height
        
        this.updated = false

        this._pingpong = false
        this._colorTextures = [
            this._genColorTexture('frameBufferColor0', width, height),
            this._genColorTexture('frameBufferColor1', width, height)
        ]
        
        
        
        this.frameBuffer = new __WEBPACK_IMPORTED_MODULE_2__FrameBuffer__["a" /* default */]()
        // this.frameBufferIndex = new FrameBuffer()
        
        // this.pointer = null
    }
    
    _genDepthTexture(label, width, height)
    {
        const depthTexture = new __WEBPACK_IMPORTED_MODULE_0__data_texture_Texture__["a" /* default */]()
        
        depthTexture.mipmap = false
        depthTexture.setInternalFormat(6402)
        depthTexture.setFormat(6402)
        depthTexture.setType(5123)
        
        // gl.TEXTURE_WRAP_S , gl.CLAMP_TO_EDGE
        depthTexture.setParam(10242, 33071)
        
        // gl.TEXTURE_WRAP_T , gl.CLAMP_TO_EDGE
        depthTexture.setParam(10243, 33071)
        
        // gl.TEXTURE_MIN_FILTER , gl.NEAREST
        depthTexture.setParam(10241, 9728)
        
        // gl.TEXTURE_MAG_FILTER , gl.NEAREST
        depthTexture.setParam(10240, 9728)
        
        depthTexture.setImg(null, width, height)
        
        return depthTexture
    }
    
    _genColorTexture(label, width, height)
    {
        const colorTexture = new __WEBPACK_IMPORTED_MODULE_0__data_texture_Texture__["a" /* default */](label)
        
        colorTexture.mipmap = false
        
        // Delete linear filter
        if (false)
        {
            // gl.TEXTURE_WRAP_S , gl.CLAMP_TO_EDGE
            colorTexture.setParam(10242, 33071)
            
            // gl.TEXTURE_WRAP_T , gl.CLAMP_TO_EDGE
            colorTexture.setParam(10243, 33071)
            
            // gl.TEXTURE_MIN_FILTER , gl.NEAREST
            colorTexture.setParam(10241, 9728)
            
            // gl.TEXTURE_MAG_FILTER , gl.NEAREST
            colorTexture.setParam(10240, 9728)
        }
        
        colorTexture.setImg(null, width, height)
        
        return colorTexture
    }
    
    pingpong()
    {
        this._pingpong = !this._pingpong
    }
    
    get colorTexture()
    {
        return this._colorTextures[this._pingpong ? 1 : 0]
    }
    
    resize(width, height)
    {
        this.width = width
        this.height = height

        this.updated = true
    }
    
    isInitialized()
    {
        return !!this.frameBuffer.pointer
    }
    
    static SET_DATA(gl)
    {
        ScreenRecorder.WEBGL_depth_texture = gl.getExtension( 'WEBGL_depth_texture' ) ||
            gl.getExtension( 'WEBKIT_WEBGL_depth_texture' ) ||
            gl.getExtension( 'MOZ_WEBGL_depth_texture' )

        ScreenRecorder._DATA_INITIALIZED = true
    }
    
    init(gl)
    {
        if (!ScreenRecorder._DATA_INITIALIZED)
        {
            ScreenRecorder.SET_DATA(gl)
        }
        
        if (this.recordDepth)
        {
            if (!ScreenRecorder.WEBGL_depth_texture)
            { 
                console.warn('WEBGL_depth_texture Extension not available!')
                this.recordDepth = false
            }
            else
            {
                this.depthTexture = this._genDepthTexture('frameBufferDepth', this.width, this.height)
                this.depthTexture.init(gl)
            }
        }
        
        if (this.captureDepth)
        {
            this.renderBuffer = new __WEBPACK_IMPORTED_MODULE_1__RenderBuffer__["a" /* default */](this.width, this.height)
            this.renderBuffer.init(gl)
        }
        
        this.frameBuffer.init(gl)
        
        this.pingpong()
        this.colorTexture.init(gl)
        
        this.pingpong()
        this.colorTexture.init(gl)
        
        
        // gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture.pointer, 0)
        
        
        if (this.depthTexture)
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture.pointer, 0)
        else if (this.renderBuffer)
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer.pointer)
        
        
        gl.bindTexture(gl.TEXTURE_2D, null)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        gl.bindRenderbuffer(gl.RENDERBUFFER, null)
        
        return true
    }

    /*draw(gl)
    {
        this.texture.draw(gl)
    }*/

    _update(gl)
    {
        const width = this.width
        const height = this.height

        this.pingpong()
        this.colorTexture.resize(width, height, gl)
        
        this.pingpong()
        this.colorTexture.resize(width, height, gl)
        
        
        if (this.depthTexture)
            this.depthTexture.resize(width, height, gl)
        
        if (this.renderBuffer)
            this.renderBuffer.resize(width, height, gl)

        this.updated = false
    }
    
    start(gl, captureDepth = true)
    {
        if (this.updated)
            this._update(gl)


        this.frameBuffer.bind(gl)
        
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture.pointer, 0)
        
        
        if (this.depthTexture)
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, captureDepth ? this.depthTexture.pointer : null, 0)
        else if (this.renderBuffer)
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, captureDepth ? this.renderBuffer.pointer : null)
        
            
        // this.frameBufferIndex.bind(gl)
    }
    
    stop(gl)
    {
        this.frameBuffer.free(gl)
        // this.frameBufferIndex.free(gl)
    }
    
    /* draw(gl, location, index)
    {
        
    }*/
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreenRecorder;


/***/ })
/******/ ]);