import Geom from './Geom'


// https://openclassrooms.com/forum/sujet/opengl-3-1-et-creation-d-une-sphere-75651
// https://gamedevdaily.io/four-ways-to-create-a-mesh-for-a-sphere-d7956b825db4
export default class UVSphereGeom extends Geom {
  constructor(parrallelsNum = 4, meridiansNum = 4) {
    super()

    this._parrallelsNum = parrallelsNum
    this._meridiansNum = meridiansNum

    this._addVertices()
  }

  _addVertices() {
    const vertices = []
    const indices = []

    const numPar = this._parrallelsNum
    const numMer = this._meridiansNum

    const R = 1 / (numPar - 1)
    const S = 1 / (numMer - 1)
    let idx = 0

    for (let r = 0; r < numPar; ++r) {
      for (let s = 0; s < numMer; ++s) {
        const x = Math.cos(2 * Math.PI * s * S) * Math.sin(Math.PI * r * R)
        const z = Math.sin(2 * Math.PI * s * S) * Math.sin(Math.PI * r * R)
        const y = Math.sin(-Math.PI * 2 + (Math.PI * r * R));

        vertices[idx] = x
        vertices[idx + 1] = y
        vertices[idx + 2] = z

        /*norms[idx]     = x;
        norms[idx + 1] = y;
        norms[idx + 2] = z;*/

        idx += 3

        /*tex[tidx] = s*S;
        tex[tidx+1] = r*R;
        tidx += 2;*/
      }
    }

    /*for (let j = 1; j < numPar + 1; j++)
    {
        const theta = j * Math.PI / numPar
        const y	= Math.cos(theta) * 0.5

        for (let i = 1; i < numMer + 1; i++)
        {
            const phi = Math.PI * 2 * i / numMer
            
            const x = Math.sin(theta) * Math.cos(phi) * 0.5
            const z	= -Math.sin(theta) * Math.sin(phi) * 0.5
            
            vertices.push(x, y, z)
        }
    }*/

    console.log(vertices.length / 3)

    idx = 0
    for (let r = 0; r < numPar; r++) {
      const ringStart = r * numMer
      const nextRingStart = (r + 1) * numMer

      for (let s = 0; s < numMer; s++) {
        const nextslice = s + 1
        // The quad
        indices[idx] = ringStart + s
        indices[idx + 1] = nextRingStart + s
        indices[idx + 2] = nextRingStart + nextslice
        indices[idx + 3] = ringStart + s
        indices[idx + 4] = nextRingStart + nextslice
        indices[idx + 5] = ringStart + nextslice
        idx += 6
      }
    }

    /*numMer++
    for (let j = 0; j < numPar - 3; j++)
    {
        for (let i = 0; i < numMer - 1; i++)
        {
            indices.push(
                j * numMer + i,
                j * numMer + i + 1,
                (j + 1) * numMer + i + 1,
            
                j * numMer + i,
                (j + 1) * numMer + i + 1,
                (j + 1) * numMer + i)
        }
    }
    
    for (let i = 0; i < numMer - 1; i++)
    {
        indices.push(
            (numPar - 2) * numMer,
            i + 1,
            i,
            
            (numPar - 2) * numMer + 1,
            (numPar - 3) * numMer + i,
            (numPar - 3) * numMer + i + 1)
    }*/

    console.log(indices)

    this.addVertices('aVertexPosition', vertices, 3)
    this.addIndices(indices)
  }

  addColor([r, g, b, a = 1]) {
    const colors = []
    /*for (let j = 1; j < this._parrallelsNum - 1; j++)
    {
        for (let i = 0; i < this._meridiansNum + 1; i++)
        {
            // colors.push(r, g, b, a)
            colors.push(Math.random(), Math.random(), Math.random(), a)
        }
    }

    this.addVertices('aVertexColor', colors, 4)*/
  }

  /*addNormals()
  {
      const normals = []

      const numPar = this._parrallelsNum - 1
      const numMer = this._meridiansNum

      for (let j = 1; j < numPar; j++)
      {
          for (let i = 0; i < numMer + 1; i++)
          {
              const theta = j / numPar * Math.PI
              const phi = i / numMer * Math.PI * 2
              
              const x = Math.sin(theta) * Math.cos(phi)
              const y	= Math.cos(theta)
              const z	= -Math.sin(theta) * Math.sin(phi)
              
              normals.push(x, y, z)
          }
      }

      this.addVertices('aVertexNormal', normals, 3)
  }

  addUV()
  {
      this.addVertices('aTextureCoord', cubeUV, 2)
  }*/

  clone(uvSphereGeom = new UVSphereGeom()) {
    return super.clone(uvSphereGeom)
  }
}