export default class Scene
{
    constructor(canvas)
    {
        this.canvas = canvas
        
        this.init(canvas)
    }
    
    init(canvas)
    {
        try
        {
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
            gl.viewportWidth = canvas.width
            gl.viewportHeight = canvas.height
        }
        catch(e)
        {
            
        }
        
        if (!gl)
        {
            console.error("Could not initialise WebGL")
        }

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
    }
    
    draw()
    {
        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        
    }
}