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

import CallOptimizer from '../../render/CallOptimizer'


export default class Mask
{
    
    constructor(mesh, func = 516, mask = 0)
    {
        this.mesh = mesh
    }

    /**
     * Function
     * 
     *      gl.getParameter(gl.STENCIL_WRITEMASK);
     *      // 110101
     *      
     *      gl.getParameter(gl.STENCIL_BACK_WRITEMASK);
     *      // 110101
     *      
     *      gl.getParameter(gl.STENCIL_BITS);
     *      // 0
     *
     * 
     * Ref
     *
     *      Number
     *      
     * 
     * Mask
     * 
     *      512     gl.NEVER      Never pass.
     *      513     gl.LESS       Pass if (ref & mask) <  (stencil & mask).
     *      514     gl.EQUAL      Pass if (ref & mask) =  (stencil & mask).
     *      515     gl.LEQUAL     Pass if (ref & mask) <= (stencil & mask).
     *      516     gl.GREATER    Pass if (ref & mask) >  (stencil & mask).
     *      517     gl.NOTEQUAL   Pass if (ref & mask) != (stencil & mask).
     *      518     gl.GEQUAL     Pass if (ref & mask) >= (stencil & mask).
     *      519     gl.ALWAYS     Always pass.
     */
    setMaskFunc(func, ref, mask)
    {
        this.maskFunc = func
        this.maskMask = mask
        this.maskRef = 0.5
    }

    setDisplayFunc(func, ref, mask)
    {
        this.displayFunc = func
        this.displayMask = mask
        this.displayRef = 0.5
    }

    isInitialized()
    {
        return this.mesh.isInitialized()
    }

    // https://open.gl/depthstencils
    init(gl)
    {
        this.mesh.init(gl)
        this._callOptimizer = CallOptimizer.getInstance(gl)
    }
    
    before(gl, customCall = [])
    {
        gl.enable(gl.STENCIL_TEST)

        if (!this._callOptimizer.optimizeDepthTest(false))
        {
            gl.depthMask(false)
        }
        

        if (this.mask)
            gl.stencilFunc(this.maskMask, this.maskRef, this.maskFunc)

        this.mesh.draw(gl, customCall)
    }

    after(gl)
    {
        gl.disable(gl.STENCIL_TEST)
    }

}
