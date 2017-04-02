import Buffer from './Buffer'

export default class Geom
{
    constructor(vertices)
    {
        const buffer =  new Buffer(
            'aVertexPosition',
            new Float32Array(vertices)
        )
        buffer.setItem(5126 /* gl.FLOAT */, 3, 4)
        
        this.buffer = buffer
    }
    
    draw(gl)
    {
        gl.drawArrays(gl.TRIANGLES, 0, this.buffer.numItems)
    }
}