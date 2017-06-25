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

import Uniform from '../src/data/uniform/Uniform'
import Transform3D from '../src/data/uniform/Transform3D'
import BackgroundTransform3D from '../src/data/uniform/BackgroundTransform3D'

import Attribute from '../src/data/core/Attribute'
import Program from '../src/shader/material/Program'
import Geom from '../src/data/geom/Geom'
import SmartTexture from '../src/data/texture/SmartTexture'

import Mesh from '../src/data/object/Mesh'
import Mesh2D from '../src/data/object/Mesh2D'
import Mesh3D from '../src/data/object/Mesh3D'
import Layer from '../src/data/object/Layer'
import Mask from '../src/data/object/Mask'
import Background3D from '../src/data/object/Background3D'
import Camera2D from '../src/data/uniform/Camera2D'
import Camera3D from '../src/data/uniform/Camera3D'
import Scene from '../src/data/object/Scene'
import Pass from '../src/shader/filter/Pass'
import Render from '../src/render/Render'


import GaussianBlurPass from '../src/shader/filter/GaussianBlurPass'
import FogPass from '../src/shader/filter/FogPass'
// import FXAAPass from '../src/shader/filter/FXAAPass'


// Use term "compile" not "init"

const canvas = document.body.querySelector('canvas')


// Camera
const cam3D = new Camera3D()
const cam2D = new Camera2D()
// cam3D.matrix.translate([0, 0, -7.0])


// Scene
const scene = new Scene()
scene.bgColor = [0.0, 0.0, 0.1, 1.0]
scene.depthTest = true


const vertexShader = `      
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

const fragmentShader = `
    precision mediump float;

    varying vec4 vColor;

    void main(void) {
        gl_FragColor = vColor;
    }
`



// Programs
const colorProgram = new Program(vertexShader, fragmentShader)

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
const fogProgram = new Program(fogVertexShader, fragmentShader)



// ----------------------------
//
//      PYRAMID RAINBOW (+ MASK + PLANE)
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

const pyramidMesh = new Mesh3D(pyramidGeom, colorProgram)
pyramidMesh.transform.translate([-1.5, -1.5, 0])
pyramidMesh.addGlobalUniform(cam3D)



// PLANE 2D

const planeVertexShader = `      
    attribute vec2 aVertexPosition;

    uniform mat3 uMVMatrix;
    uniform mat3 uPMatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        vec3 pos = uPMatrix * uMVMatrix * vec3(aVertexPosition, 0.0);
        gl_Position = vec4(pos.xy, 0.0, 1.0);
    }
`

const planeFragmentShader = `
    precision mediump float;

    uniform sampler2D uDiffuse1;

    void main(void) {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    }
`

const planeProgram = new Program(planeVertexShader, planeFragmentShader)

const planeVertices = [
   -1, -1,
   -1,  1,
    1, -1,

   -1,  1,
    1,  1,
    1, -1
]

const planeUV = [
    0.0, 0.0,
    0.0, 1.0,
    1.0, 0.0,

    0.0, 1.0,
    1.0, 1.0,
    1.0, 0.0
]

const planeGeom = new Geom()
planeGeom.addVertices('aVertexPosition', planeVertices, 2)

const plane = new Mesh2D(planeGeom, planeProgram)
plane.order = 1
plane.transform.scale([320, 320])
// plane.translate([160, 160])
plane.addGlobalUniform(cam2D)
// scene.addMesh(plane)








// MASK

const layer = new Layer()
layer.addMesh(pyramidMesh)
scene.addMesh(layer)

/*const vertexShaderMask = `      
    attribute vec3 aVertexPosition;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    }
`

const fragmentShaderMask = `
    precision mediump float;
    void main(void) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
`

const programMask = new Program(vertexShaderMask, fragmentShaderMask)
const maskMesh = new Mesh3D(pyramidGeom, programMask)
maskMesh.addGlobalUniform(cam3D)
maskMesh.translate([-1.5, -1.5, 0])
maskMesh.scale([0.5, 0.5, 0.5])*/
layer.setMask(new Mask(plane))



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

const cubeMesh = new Mesh3D(cubeGeom, fogProgram)
cubeMesh.transform.translate([1.5, -1.5, 0])
cubeMesh.addGlobalUniform(cam3D)
scene.addMesh(cubeMesh)




// ----------------------------
//
//      PYRAMID RAINBOW INVERT
//
// ----------------------------

const pyramidMesh2 = new Mesh3D(pyramidGeom, colorProgram)
pyramidMesh2.transform.translate([-1.5, 1.5, 0])
pyramidMesh2.transform.scale([1, -1, 1])
pyramidMesh2.addGlobalUniform(cam3D)

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
cubeTexture.addURL('assets/cube-diffuse.jpg')

const cubeTexture2 = new SmartTexture('uDiffuse2')
cubeTexture2.setParam(10240, 9728)  // Pixelise
cubeTexture2.setParam(10241, 9728)  // Pixelise
cubeTexture2.addURL('assets/cube-diffuse-2.png')

const cubeTexturedGeom = new Geom()
cubeTexturedGeom.addVertices('aVertexPosition', cubeVertices, 3)
cubeTexturedGeom.addVertices('aTextureCoord', cubeUV, 2)
cubeTexturedGeom.addIndices(cubeIndices)

const cubeTexturedMesh = new Mesh3D(cubeTexturedGeom, texturedProgram)
cubeTexturedMesh.addTexture(cubeTexture)
cubeTexturedMesh.addTexture(cubeTexture2)
cubeTexturedMesh.transform.translate([1.5, 1.5, 0])
cubeTexturedMesh.addGlobalUniform(cam3D)
scene.addMesh(cubeTexturedMesh)




// ----------------------------
//
//      CUBE WOOD 2
//
// ----------------------------

const cubeTexturedMesh2 = new Mesh3D(cubeTexturedGeom, texturedProgram)
cubeTexturedMesh2.addTexture(cubeTexture)
cubeTexturedMesh2.addTexture(cubeTexture2)
cubeTexturedMesh2.transform.translate([0, 0, -8.0])
cubeTexturedMesh2.addGlobalUniform(cam3D)
scene.addMesh(cubeTexturedMesh2)






// ----------------------------
//
//      SKYBOX
//
// ----------------------------

const skyboxVertexShader = `   
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec2 vTextureCoord;

    void main(void) {

        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vTextureCoord = aTextureCoord;
    }`

const skyboxFragmentShader = `
    precision mediump float;

    varying vec2 vTextureCoord;

    uniform sampler2D uDiffuse1;

    void main(void) {
        vec4 color1 = texture2D(uDiffuse1, vec2(vTextureCoord.s, vTextureCoord.t));
        gl_FragColor = color1;
    }`

const bgTransform3D = new BackgroundTransform3D('uPMatrix', cam3D, 1)

const skyboxProgram = new Program(skyboxVertexShader, skyboxFragmentShader)
const skybox = new Background3D(cubeTexturedGeom, skyboxProgram)
skybox.addTexture(cubeTexture)
// skybox.addTexture(cubeTexture2)
skybox.addUniform(bgTransform3D)
scene.addMesh(skybox)






// Optimize order by program (reduce calls)
scene.sort()













const render = new Render(canvas)
render.passEnabled = true
render.addScene(scene)
// render.resize(size[0] * resolution, size[1] * resolution)

const fogPass = new FogPass({
    minDepth: 0.5,
    maxDepth: 0.6,
    minPower: 0,
    maxPower: 0.5,
    depthCurve: 100,
    color: [0.9, 0.95, 1.0]
})
render.addPass(fogPass)

const gaussianOptions = {
    minDepth: 0.95,
    maxDepth: 1,
    samples: 20,
    xBlur: true,
    power: 1,
    depthCurve: 1
}
const gaussianBlurX = new GaussianBlurPass(gaussianOptions)
render.addPass(gaussianBlurX)

gaussianOptions.xBlur = false
const gaussianBlurY = new GaussianBlurPass(gaussianOptions)
render.addPass(gaussianBlurY)




















// CAMERA ROTATION

let rotX = 0
let rotY = 0
let zoom = 2.5

const winSize = [0, 0]
const mousePos = [0, 0]


document.body.addEventListener('mousedown', down)
window.addEventListener('wheel', wheel)

function wheel(event = null)
{
    let delta = 0
    if (event)
    {
        if (event.wheelDelta)
            delta = event.wheelDelta
        else if (event.detail)
            delta = -40 * event.detail
        else if (event.deltaY)
            delta = -40 * event.deltaY
    }
    
    zoom -= delta / 1000
    zoom = Math.min(Math.max(zoom, 0.37), 3)
    cam3D.fovy = zoom * 45
}


function down(event)
{   
    const body = document.body

    mousePos[0] = event.clientX
    mousePos[1] = event.clientY
    
    body.removeEventListener('mousemove', move)
    body.removeEventListener('mouseup', up)
    body.removeEventListener('mouseleave', up)
    
    body.addEventListener('mousemove', move)
    body.addEventListener('mouseup', up)
    body.addEventListener('mouseleave', up)
    
    body.classList.add('is-grabbing')
}

function move(event)
{
    const x = event.clientX
    const y = event.clientY
    
    const sx = (x - mousePos[0]) / winSize[0]
    const sy = (y - mousePos[1]) / winSize[1]
    
    mousePos[0] = x
    mousePos[1] = y
    
    rotX += sx * Math.PI * 2
    rotY += sy * Math.PI
    
    rotY = Math.max(Math.min(rotY, Math.PI * 0.3), -Math.PI * 0.3)
}

function up(event)
{
    const body = document.body

    body.removeEventListener('mousemove', move)
    body.removeEventListener('mouseup', up)
    body.removeEventListener('mouseleave', up)
    body.classList.remove('is-grabbing')
}

function resize()
{
    const resolution = 1

    winSize[0] = window.innerWidth
    winSize[1] = window.innerHeight

    render.resize(winSize[0] * resolution, winSize[1] * resolution)


    canvas.width = winSize[0] * resolution
    canvas.height = winSize[1] * resolution

    cam3D.resize(...winSize)
    cam2D.setArea(0, 0, ...winSize)
}

window.onresize = resize
resize()
wheel()













// debug
window.scene = scene
window.render = render

refresh()
function refresh()
{
    // Camera
    cam3D.clear()
    cam3D.translate([0, 0, -zoom])
    cam3D.rotate(rotY, [1, 0, 0])
    cam3D.rotate(rotX, [0, 1, 0])
    // cam3D.update()


    // Objects
    // skybox.rotateZ(0.001)
    pyramidMesh.transform.rotateY(0.005)
    pyramidMesh2.transform.rotate(-0.005, [0, 1, 0])
    cubeMesh.transform.rotate(0.01, [0, 1, 0])
    cubeTexturedMesh.transform.rotate(-0.01, [0, 1, 0])
    cubeTexturedMesh2.transform.rotate(0.025, [0.72, -0.33, 0.5])
    
    
    render.draw()

    // console.timeEnd('draw')
    
    requestAnimationFrame(refresh)
}
