import mat4 from 'gl-matrix/src/gl-matrix/mat4.js'

export default class Camera
{
    constructor(program)
    {
        this.matrix = mat4.create()
        this.buffers = []
        this.program = program
        
        mat4.identity(this.matrix)
    }
    
    translate(pos)
    {
        mat4.translate(this.matrix, this.matrix, pos)
    }
    
    addBuffer(buffer)
    {
        this.buffers.push(buffer)
    }
    
    init(gl)
    {
        /*for(const buffer from this.buffers)
        {
            if (!buffer.isInitialized())
            {
                buffer.init(gl)                
            }
        }*/
    }
}