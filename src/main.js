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

import Uniform from './uniform/Uniform'
import UMat3D from './uniform/UMat3D'

import Attribute from './core/Attribute'
import Program from './core/Program'
import Geom from './core/Geom'
import Texture from './core/Texture'

import Mesh from './object/Mesh'
import Cam3D from './object/Cam3D'
import Scene from './object/Scene'


const canvas = document.body.querySelector('canvas')


// Camera
const cam3D = new Cam3D('uPMatrix')
cam3D.matrix.translate([-1.5, 0.0, -7.0])


// Scene
const scene = new Scene(canvas, cam3D)
scene.bgColor = [0.0, 0.0, 0.1, 1.0]
scene.depthTest = true



// Programs
const colorProgram = new Program()

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
const fogProgram = new Program(fogVertexShader)



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

const pyramidGeom = new Geom()
pyramidGeom.addVertices('aVertexPosition', pyramidVertices, 3)
pyramidGeom.addVertices('aVertexColor', pyramidColors, 4)
    
const pyramidMesh = new Mesh(pyramidGeom, colorProgram)
const pyramidUniformMatrix = new UMat3D('uMVMatrix')
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
{
    var color = cubeColors[i];
    for (let j = 0; j < 4; j++)
        unpackedCubeColors = unpackedCubeColors.concat(color)
}


const cubeGeom = new Geom()
cubeGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeGeom.addVertices('aVertexColor', unpackedCubeColors, 4)
cubeGeom.addIndices(cubeIndices)

const cubeMesh = new Mesh(cubeGeom, fogProgram)
const cubeUniformMatrix = new UMat3D('uMVMatrix')
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

const texturedProgram = new Program(vertexTextureShader, fragmentTextureShader)

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

const cubeTexture = new Texture('uSampler')
cubeTexture.load('cube-diffuse.jpg')

const cubeTexturedGeom = new Geom()
cubeTexturedGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeTexturedGeom.addVertices('aTextureCoord', cubeUV, 2)
cubeTexturedGeom.addIndices(cubeIndices)

const cubeTexturedMesh = new Mesh(cubeTexturedGeom, texturedProgram)
const cubeTexturedUniformMatrix = new UMat3D('uMVMatrix')
cubeTexturedMesh.addUniform(cubeTexturedUniformMatrix)
cubeTexturedMesh.matrix = cubeTexturedUniformMatrix.data
cubeTexturedMesh.addTexture(cubeTexture)
cubeTexturedMesh.matrix.translate([1.5, 1.5, -8.0])
scene.addMesh(cubeTexturedMesh)




refresh()
function refresh()
{
    pyramidMesh.matrix.rotate(0.005, [0, 1, 0])
    cubeMesh.matrix.rotate(0.01, [0, 1, 0])
    cubeTexturedMesh.matrix.rotate(-0.01, [0, 1, 0])
    
    scene.draw()
    requestAnimationFrame(refresh)
}

