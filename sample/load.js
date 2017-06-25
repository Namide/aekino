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

import Program from '../src/shader/material/Program'
import Geom from '../src/data/geom/Geom'
import SmartTexture from '../src/data/texture/SmartTexture'
import Mesh3D from '../src/data/object/Mesh3D'
import Scene from '../src/data/object/Scene'
import Render from '../src/render/Render'

import loadMesh from '../src/tool/loadMesh' 


const canvas = document.body.querySelector('canvas')


const scene = new Scene()
scene.bgColor = [1.0, 1.0, 1.0, 1.0]
scene.depthTest = true


// Render
const render = new Render(canvas)
render.passEnabled = false
render.addScene(scene)


let cam3D

const vertexShader = `      
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec4 vColor;
    varying vec2 vTextureCoord;

    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vColor = vec4(normalize(aVertexPosition), 1.0);
        vTextureCoord = aTextureCoord;
    }
`

const vertexStaticShader = `      
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uPMatrix;

    varying vec4 vColor;
    varying vec2 vTextureCoord;

    void main(void) {
        gl_Position = uPMatrix * vec4(aVertexPosition, 1.0);
        vColor = vec4(normalize(aVertexPosition), 1.0);
        vTextureCoord = aTextureCoord;
    }
`

const fragmentShader = `
    precision mediump float;

    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uDiffuse;

    void main(void) {
        vec4 color = texture2D(uDiffuse, vec2(vTextureCoord.s, vTextureCoord.t));
        gl_FragColor = color;
    }
`

const planeText = new SmartTexture('uDiffuse')
planeText.addURL('assets/suzanne-plane-diffuse.jpg')

const suzanneText = new SmartTexture('uDiffuse')
suzanneText.addURL('assets/suzanne-diffuse.jpg')

const cubeText = new SmartTexture('uDiffuse')
cubeText.addURL('assets/suzanne-cube-diffuse.jpg')

function initdMesh(data)
{
    let mesh

    switch(data.name)
    {
        case 'Suzanne':

            mesh = new Mesh3D(new Geom(), new Program(vertexStaticShader, fragmentShader))
            mesh.addTexture(suzanneText)
            break

        case 'Cube':

            mesh = new Mesh3D(new Geom(), new Program(vertexShader, fragmentShader))
            mesh.addTexture(cubeText)
            break

        case 'Plane':

            mesh = new Mesh3D(new Geom(), new Program(vertexShader, fragmentShader))
            mesh.addTexture(planeText)
            break

        default:

            throw new Error('Mesh unexpected ' + data.name)
    }

    return mesh
}

loadMesh(
    'assets/suzanne.min.json',
    ({camera, mesh}) =>
    {
        cam3D = camera[0]

        for (const mesh3D of mesh)
        {
            scene.addMesh(mesh3D)
        }

        resize()
    },
    {
        initdMesh
    },
    )




function resize()
{
    const winSize = [
        window.innerWidth,
        window.innerHeight
    ]
    
    render.resize(winSize[0], winSize[1])

    canvas.width = winSize[0]
    canvas.height = winSize[1]

    cam3D.resize(...winSize)
}
window.onresize = resize




refresh()
function refresh()
{  
    if (cam3D)
    {
        cam3D.clear()

        const x = 15 * Math.cos(Date.now() * 0.001)
        const y = 15 * Math.sin(Date.now() * 0.001)
        cam3D.lookAt([x, 10, y], [0, 0, 0], [0, 1, 0])
    }
    
    render.draw()
    
    requestAnimationFrame(refresh)
}