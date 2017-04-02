
const vs = `      
    attribute vec3 aVertexPosition;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    }
`

const fs = `      
    void main(void) {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    }
`

export default class Program
{
    constructor()
    {
        
    }
    
    init(gl)
    {
        this.vertexShader = this._createShader(gl, 35633 /* gl.VERTEX_SHADER */, vertexShader)
        this.fragmentShader = this._createShader(gl, 35632 /* gl.FRAGMENT_SHADER */, fragmentShader)
        
        const program = gl.createProgram()
        gl.attachShader(program, this.vertexShader)
        gl.attachShader(program, this.fragmentShader)
        gl.linkProgram(program)
        
        if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        {
            console.error('Impossible d\'initialiser le shader.')
        }
        
        gl.useProgram(program)
        
        this.pointer = program
    }
    
    get isInitialized()
    {
        return !!this.pointer
    }
    
    _createShader(gl, type, src)
    {
        const shader = gl.createShader(type)
        gl.shaderSource(shader, src)
        gl.compileShader(shader)
    
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        {  
            return console.error('Une erreur est survenue au cours de la compilation du shader: ' + gl.getShaderInfoLog(shader))
        }
        
        return shader
    }
}