export default class Buffer
{
    /**
     * target
     *      gl.ARRAY_BUFFER         34962
     *      Buffer containing vertex attributes, such as vertex coordinates,
     *      texture coordinate data, or vertex color data.
     *
     *      gl.ELEMENT_ARRAY_BUFFER 34963
     *      Buffer used for element indices.
     *
     * usage
     *      gl.STATIC_DRAW      35044
     *      Contents of the buffer are likely to be used often and not change often.
     *      Contents are written to the buffer, but not read.
     *
     *      gl.DYNAMIC_DRAW     35048
     *      Contents of the buffer are likely to be used often and change often.
     *      Contents are written to the buffer, but not read.
     *      
     *      gl.STREAM_DRAW      35040
     *      Contents of the buffer are likely to not be used often.
     *      Contents are written to the buffer, but not read.
     */
    constructor(label, data)
    {
        this.label = label
        this.type = 34962 // gl.ARRAY_BUFFER
        this.data = data
        this.usage = 35044
        
        this.itemSize = 3
        this.numItems = data.length / this.itemSize
        
        this.pointer = null
    }
    
    setItem(type, size, num = null)
    {
        this.itemType = type
        this.itemSize = size
        this.numItems = num || (data.length / this.itemSize)
    }
    
    init(gl)
    {
        const pointer = gl.createBuffer()
        gl.bindBuffer(this.type, pointer)
        gl.bufferData(this.type, this.data, gl.STATIC_DRAW)
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.itemSize, this.itemType, false, 0, 0);
        
        /*pointer.itemSize = this.itemSize
        pointer.numItems = this.numItems*/
        
        this.pointer = pointer
    }
    

}