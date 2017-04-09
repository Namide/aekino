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


import mat from 'gl-matrix/src/gl-matrix/mat4.js'
/*exports.glMatrix = require("./gl-matrix/common.js");
exports.mat2 = require("./gl-matrix/mat2.js");
exports.mat2d = require("./gl-matrix/mat2d.js");
exports.mat3 = require("./gl-matrix/mat3.js");
exports.mat4 = require("./gl-matrix/mat4.js");
exports.quat = require("./gl-matrix/quat.js");
exports.vec2 = require("./gl-matrix/vec2.js");
exports.vec3 = require("./gl-matrix/vec3.js");
exports.vec4 = require("./gl-matrix/vec4.js");*/

import Attribute from './core/Attribute'
import Uniform from './core/Uniform'
import Program from './core/Program'
import Geom from './core/Geom'
import Mesh3D from './core/Mesh3D'
import Cam3D from './core/Cam3D'
import Scene from './core/Scene'

const canvas = document.body.querySelector('canvas')


// Camera
const cam3D = new Cam3D()
cam3D.translate(-1.5, 0.0, -7.0)

// Scene
const scene = new Scene(canvas, cam3D)




// Shader
const program = new Program()

// Trianle
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
const pyramidGeom = new Geom(pyramidVertices)
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
const triangleAttributeColor = new Attribute('aVertexColor')
triangleAttributeColor.setArray(new Float32Array(pyramidColors))
triangleAttributeColor.setItems(5126, 4)
    
const pyramidMesh = new Mesh3D(pyramidGeom, program)
pyramidMesh.addAttribute(triangleAttributeColor)
pyramidMesh.translate(-1.5, 0.0, -8.0)
scene.addMesh(pyramidMesh)



// Square
/*const cubeVertices = [
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
const cubeGeom = new Geom(cubeVertices)
const cubeColors = [
    1.0, 0.0, 0.0, 1.0, // Front face
    1.0, 1.0, 0.0, 1.0, // Back face
    0.0, 1.0, 0.0, 1.0, // Top face
    1.0, 0.5, 0.5, 1.0, // Bottom face
    1.0, 0.0, 1.0, 1.0, // Right face
    0.0, 0.0, 1.0, 1.0  // Left face
]
let unpackedCubeColors = []
for (const color of cubeColors)
    for (let j = 0; j < 4; j++)
        unpackedCubeColors = unpackedCubeColors.concat(color)

const cubeAttributeColor = new Attribute('aVertexColor')
cubeAttributeColor.setArray(new Float32Array(unpackedCubeColors))
cubeAttributeColor.setItems(5126, 4)

const cubeMesh = new Mesh3D(cubeGeom, program)
cubeMesh.addAttribute(cubeAttributeColor)
cubeMesh.translate(3.0, 0.0, 0.0)
scene.addMesh(cubeMesh)*/



scene.draw()
