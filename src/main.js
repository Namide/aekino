// http://glmatrix.net/
// http://nehe.gamedev.net/tutorial/your_first_polygon/13002/
// http://learningwebgl.com/blog/?p=28

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

import Buffer from './core/Buffer'
import Program from './core/Program'
import Geom from './core/Geom'
import Mesh from './core/Mesh'
import Cam from './core/Cam'

const canvas = document.body.querySelector('canvas')

const vertices = [
     0.0,  1.0,  0.0,
    -1.0, -1.0,  0.0,
     1.0, -1.0,  0.0
]
const geom = new Geom(vertices)
const program = new Program()
const mesh = new Mesh(geom, program)
mesh.translate([3.0, 0.0, 0.0])


console.log('test')
