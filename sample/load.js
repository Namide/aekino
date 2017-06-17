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
import PassManager from '../src/render/PassManager'


import GaussianBlurPass from '../src/shader/filter/GaussianBlurPass'
import FogPass from '../src/shader/filter/FogPass'
// import FXAAPass from '../src/shader/filter/FXAAPass'




import loadMesh from '../src/tool/loadMesh' 



// Use term "compile" not "init"

const canvas = document.body.querySelector('canvas')



// Scene
const scene = new Scene(canvas)
scene.bgColor = [0.0, 0.0, 0.1, 1.0]
scene.depthTest = true

let cam3D

const vertexShader = `      
    attribute vec3 aVertexPosition;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec4 vColor;

    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vColor = vec4(normalize(aVertexPosition), 1.0);
    }
`

const fragmentShader = `
    precision mediump float;

    varying vec4 vColor;

    void main(void) {
        gl_FragColor = vColor;
    }
`
function initdMesh3D(data)
{
    return new Mesh3D(new Geom(), new Program(vertexShader, fragmentShader))
}

loadMesh(
    'assets/suzanne.min.json',
    ({camera, mesh}) =>
    {
        cam3D = camera[0]


        for (const mesh3D of mesh)
        {
            scene.addMesh(mesh3D)
            console.log(mesh3D)
        }

        resize()
    },
    {
        initdMesh3D
    })




function resize()
{
    const winSize = [
        window.innerWidth,
        window.innerHeight
    ]
    
    scene.resize(winSize[0], winSize[1])

    canvas.width = winSize[0]
    canvas.height = winSize[1]

    cam3D.resize(...winSize)
}
window.onresize = resize




refresh()
function refresh()
{
    // Camera
    // cam3D.clear()
    // cam3D.translate([0, 0, -zoom])
    // cam3D.rotate(rotY, [1, 0, 0])
    // cam3D.rotate(rotX, [0, 1, 0])


    // Objects
    // pyramidMesh.rotateY(0.005)
    // pyramidMesh2.rotate(-0.005, [0, 1, 0])
    // cubeMesh.rotate(0.01, [0, 1, 0])
    // cubeTexturedMesh.rotate(-0.01, [0, 1, 0])
    // cubeTexturedMesh2.rotate(0.025, [0.72, -0.33, 0.5])
    
    if (cam3D)
    {
        cam3D.clear()

        // cam3D.translate([0, 0, -zoom])
        const x = 50 * Math.cos(Date.now() * 0.001)
        const y = 50 * Math.sin(Date.now() * 0.001)
        cam3D.lookAt([x, y, 5], [0, 0, 0], [0, 0, 1])
    }
    
    scene.draw()

    // console.timeEnd('draw')
    
    requestAnimationFrame(refresh)
}