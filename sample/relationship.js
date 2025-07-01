import Program from '../src/shader/material/Program'

import CubeGeom from '../src/data/geom/CubeGeom'
import SmoothCubeGeom from '../src/data/geom/SmoothCubeGeom'

import Mesh3D from '../src/data/object/Mesh3D'
import Camera3D from '../src/data/uniform/Camera3D'
import Scene from '../src/data/object/Scene'
import Render from '../src/render/Render'


const canvas = document.body.querySelector('canvas')


// Camera
const cam3D = new Camera3D()
cam3D.translate([0, 0, -10])


// Scene
const scene = new Scene()
scene.bgColor = [0.5, 0, 0.5, 1.0]
scene.depthTest = true


// Render
const render = new Render(canvas)
render.passEnabled = false
render.addScene(scene)


const vertexShader = `      
  attribute vec3 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  varying vec4 vColor;
  varying vec3 vPos;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vColor = aVertexColor;
    vPos = aVertexPosition;
  }
`

const fragmentShader = `
  precision mediump float;

  varying vec4 vColor;
  varying vec3 vPos;

  // https://stackoverflow.com/questions/5149544/can-i-generate-a-random-number-inside-a-pixel-shader
  float random( vec2 p ) // Version 2
  {
    // e^pi (Gelfond's constant)
    // 2^sqrt(2) (Gelfond–Schneider constant)
    vec2 r = vec2( 23.14069263277926, 2.665144142690225 );
    // return fract( cos( mod( 12345678., 256. * dot(p,r) ) ) ); // ver1
    return fract(cos(dot(p,r)) * 123456.); // ver2
  }

  void main(void)
  {
    vec4 noise = vec4(
      random(vPos.xy),
      random(vPos.yz),
      random(vPos.xz),
      0.0);
    gl_FragColor = vColor + noise * 0.001;
  }
`

const colorProgram = new Program(vertexShader, fragmentShader)


// Cube data
function getColor()
{
    return [Math.random(), Math.random(), Math.random(), 1.0]
}

const cubeColors = [
  getColor(), // Front face
  getColor(), // Back face
  getColor(), // Top face
  getColor(), // Bottom face
  getColor(), // Right face
  getColor()  // Left face
]

const smoothCubeColors = [
  getColor(), getColor(),
  getColor(), getColor(),
  getColor(), getColor(),
  getColor(), getColor()
]


// GEOMETRIES

const cubeGeom = new CubeGeom()
cubeGeom.addColors(...cubeColors)

const smoothCubeGeom = new SmoothCubeGeom()
smoothCubeGeom.addColors(...smoothCubeColors)


// Cube 1
const cube1 = new Mesh3D(smoothCubeGeom, colorProgram)
cube1.transform.scale([2, 2, 2])
cube1.addGlobalUniform(cam3D)
scene.addMesh(cube1)


// Cube 2


const cube2 = new Mesh3D(cubeGeom, colorProgram)
cube2.transform.translate([-1.5, 0, 0])
cube2.transform.scale([0.5, 0.5, 0.5])
cube2.transform.attach(cube1.transform)
cube2.addGlobalUniform(cam3D)
scene.addMesh(cube2)


// Cube 3
const cube3 = new Mesh3D(smoothCubeGeom, colorProgram)
cube3.transform.translate([0, 0, -1.5])
cube3.transform.scale([0.5, 0.5, 0.5])
cube3.transform.attach(cube2.transform)
cube3.addGlobalUniform(cam3D)
scene.addMesh(cube3)


// Resize
function resize()
{
  const resolution = 1
  const winSize = [window.innerWidth, window.innerHeight]
  render.resize(winSize[0] * resolution, winSize[1] * resolution)
  canvas.width = winSize[0] * resolution
  canvas.height = winSize[1] * resolution
  cam3D.resize(...winSize)
}

window.onresize = resize
resize()













// debug
window.scene = scene

refresh()
function refresh()
{
  cube1.transform.rotate(0.01, [0, 1, 0.5])
  cube2.transform.rotate(-0.1, [1.5, 0.1, 0.5])
  cube3.transform.rotate(0.1, [1, 0.5, -0.5])

  render.draw()

  requestAnimationFrame(refresh)
}
