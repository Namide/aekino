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

  // Top face
  -0.5, 0.5, -0.5,
  -0.5, 0.5, 0.5,
  0.5, 0.5, 0.5,
  0.5, 0.5, -0.5,

  // Bottom face
  -0.5, -0.5, -0.5,
  0.5, -0.5, -0.5,
  0.5, -0.5, 0.5,
  -0.5, -0.5, 0.5,

  // Right face
  0.5, -0.5, -0.5,
  0.5, 0.5, -0.5,
  0.5, 0.5, 0.5,
  0.5, -0.5, 0.5,

  // Left face
  -0.5, -0.5, -0.5,
  -0.5, -0.5, 0.5,
  -0.5, 0.5, 0.5,
  -0.5, 0.5, -0.5
]

const cubeIndices = [
  0, 1, 2, 0, 2, 3,    // Front face
  4, 5, 6, 4, 6, 7,    // Back face
  8, 9, 10, 8, 10, 11,  // Top face
  12, 13, 14, 12, 14, 15, // Bottom face
  16, 17, 18, 16, 18, 19, // Right face
  20, 21, 22, 20, 22, 23  // Left face
]

const cubeUV = [
  // Front face
  0.0, 0.0,
  1.0, 0.0,
  1.0, 1.0,
  0.0, 1.0,

  // Back face
  1.0, 0.0,
  1.0, 1.0,
  0.0, 1.0,
  0.0, 0.0,

  // Top face
  0.0, 1.0,
  0.0, 0.0,
  1.0, 0.0,
  1.0, 1.0,

  // Bottom face
  1.0, 1.0,
  0.0, 1.0,
  0.0, 0.0,
  1.0, 0.0,

  // Right face
  1.0, 0.0,
  1.0, 1.0,
  0.0, 1.0,
  0.0, 0.0,

  // Left face
  0.0, 0.0,
  1.0, 0.0,
  1.0, 1.0,
  0.0, 1.0,
]


export default class CubeGeom extends Geom {
  constructor() {
    super()

    this.addVertices('aVertexPosition', cubeVertices, 3)
    this.addIndices(cubeIndices)
  }

  addColors(front, back, top, bottom, right, left) {
    const cubeColors = [front, back, top, bottom, right, left]

    let unpackedCubeColors = []
    for (let i in cubeColors)
      for (let j = 0; j < 4; j++)
        unpackedCubeColors = unpackedCubeColors.concat(cubeColors[i])

    this.addVertices('aVertexColor', unpackedCubeColors, 4)
  }

  addUV() {
    this.addVertices('aTextureCoord', cubeUV, 2)
  }

  clone(cubeGeom = new CubeGeom()) {
    return super.clone(cubeGeom)
  }
}