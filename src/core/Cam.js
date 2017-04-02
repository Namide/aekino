import mat4 from 'gl-matrix/src/gl-matrix/mat4.js'

export default class Cam
{
    constructor()
    {
        this.near = 0.1
        this.far = 100
        this.matrix = mat4.create()
    }
    
    init(gl)
    {
        mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, this.matrix)
    }
}