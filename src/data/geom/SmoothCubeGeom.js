import Geom from './Geom'

const cubeVertices = [
  // Front face
  -0.5, -0.5, 0.5,
  0.5, -0.5, 0.5,
  0.5, 0.5, 0.5,
  -0.5, 0.5, 0.5,

  // Back face
  -0.5, -0.5, -0.5,
  -0.5, 0.5, -0.5,
  0.5, 0.5, -0.5,
  0.5, -0.5, -0.5,
]

const cubeIndices = [
  0, 1, 2, 0, 2, 3,    // Front face
  4, 5, 6, 4, 6, 7,    // Back face
  3, 2, 6, 3, 6, 5,    // Top face
  0, 4, 7, 0, 7, 1,    // Bottom face
  7, 6, 2, 7, 2, 1,    // Right face
  0, 3, 5, 0, 5, 4     // Left face
]

export default class SmoothCubeGeom extends Geom {
  constructor() {
    super()

    this.addVertices('aVertexPosition', cubeVertices, 3)
    this.addIndices(cubeIndices)
  }

  addColors(a, b, c, d, e, f, g, h) {
    const cubeColors = [a, b, c, d, e, f, g, h]

    let unpackedCubeColors = []
    for (let i in cubeColors)
      unpackedCubeColors = unpackedCubeColors.concat(cubeColors[i])

    this.addVertices('aVertexColor', unpackedCubeColors, 4)
  }

  clone(cubeGeom = new CubeGeom()) {
    return super.clone(cubeGeom)
  }
}