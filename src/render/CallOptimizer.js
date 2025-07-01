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

class CallOptimizer {
  constructor() {
    this.lastTexture = null
    this.lastProgram = null
    this.lastDepthTest = false
  }

  optimizeTexture(texture) {
    const lastTexture = this.lastTexture
    this.lastTexture = texture

    return texture === lastTexture
  }

  optimizeProgram(program) {
    const lastProgram = this.lastProgram
    this.lastProgram = program

    return program === lastProgram
  }

  optimizeDepthTest(value) {
    const lastDepthTest = this.lastDepthTest
    this.lastDepthTest = value

    return lastDepthTest === value
  }

  static getInstance(gl) {
    const i = CallOptimizer.glList.indexOf(gl)
    if (i < 0) {
      const co = new CallOptimizer()

      CallOptimizer.glList.push(gl)
      CallOptimizer.list.push(co)

      return co
    }

    return CallOptimizer.list[i]
  }
}

CallOptimizer.glList = []
CallOptimizer.list = []


export default CallOptimizer
