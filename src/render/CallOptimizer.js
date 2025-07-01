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
