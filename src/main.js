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

import Uniform from './data/uniform/Uniform'
import Transform3D from './data/uniform/Transform3D'

import Attribute from './data/core/Attribute'
import Program from './shader/material/Program'
import Geom from './data/geom/Geom'
import SmartTexture from './data/texture/SmartTexture'

import Mesh from './data/object/Mesh'
import Camera3D from './data/object/Camera3D'
import Scene from './data/object/Scene'
import Pass from './shader/filter/Pass'
import PassManager from './render/PassManager'


import GaussianBlurPass from './shader/filter/GaussianBlurPass'
import FogPass from './shader/filter/FogPass'
// import FXAAPass from './shader/filter/FXAAPass'



// Use term "compile" not "init"

const canvas = document.body.querySelector('canvas')


// Camera
const cam3D = new Camera3D('uPMatrix')
// cam3D.matrix.translate([-1.5, 0.0, -7.0])


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
const pyramidUniformMatrix = new Transform3D('uMVMatrix')
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


const cubeGeom = new Geom()
cubeGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeGeom.addVertices('aVertexColor', unpackedCubeColors, 4)
cubeGeom.addIndices(cubeIndices)

const cubeMesh = new Mesh(cubeGeom, fogProgram)
const cubeUniformMatrix = new Transform3D('uMVMatrix')
cubeMesh.addUniform(cubeUniformMatrix)
cubeMesh.matrix = cubeUniformMatrix.data
cubeMesh.matrix.translate([1.5, -1.5, -8.0])
scene.addMesh(cubeMesh)




// ----------------------------
//
//      PYRAMID RAINBOW INVERT
//
// ----------------------------

const pyramidMesh2 = new Mesh(pyramidGeom, colorProgram)
const pyramidUniformMatrix2 = new Transform3D('uMVMatrix')
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

const cubeTexture = new SmartTexture('uDiffuse1')
cubeTexture.addURL('cube-diffuse.jpg')

const cubeTexture2 = new SmartTexture('uDiffuse2')
cubeTexture2.setParam(10240, 9728)  // Pixelise
cubeTexture2.setParam(10241, 9728)  // Pixelise
cubeTexture2.addURL('cube-diffuse-2.png')

const cubeTexturedGeom = new Geom()
cubeTexturedGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeTexturedGeom.addVertices('aTextureCoord', cubeUV, 2)
cubeTexturedGeom.addIndices(cubeIndices)

const cubeTexturedMesh = new Mesh(cubeTexturedGeom, texturedProgram)
const cubeTexturedUniformMatrix = new Transform3D('uMVMatrix')
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

const cubeTexturedMesh2 = new Mesh(cubeTexturedGeom, texturedProgram)
const cubeTexturedUniformMatrix2 = new Transform3D('uMVMatrix')
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
    passManager = new PassManager(scene)
    // passManager.resize(size[0] * resolution, size[1] * resolution)
    
    const fogPass = new FogPass({
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
    const gaussianBlurX = new GaussianBlurPass(gaussianOptions)
    passManager.addPass(gaussianBlurX)
    
    gaussianOptions.xBlur = false
    const gaussianBlurY = new GaussianBlurPass(gaussianOptions)
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
