console.time('\t-> finished')

import * as parser from 'fbxasciitojs'
import * as fs from 'node:fs'

import Matrix4 from '../math/Matrix4.js'


// ------------------------------------------------
//
//                  CONFIG

// const fileIn = 'suzane-ascii.fbx'
// const fileOutRaw = 'suzane.raw.json'
// const fileOutMin = 'suzane.min.json'

/*
const fbxOptions = {
    parseComments: false,   // flag to retain comments when parsing the file.
    verbose: false,         // flag to write parsing details to the nodejs console.
    logging: false,         // flag to write and save parsing details to a log file.
    returnJSON: false,      // flag to have the a JSON string of the parsed object returned with the js object.
    saveJSON: false         // flag to save the parsed data as a JSON string to file.
}

const parserOptions = {
    enable: {
        Camera: {
            transform: true
        },
        Plane: {
            transform: true,
            geom: {
                normals: false,
                uv: true
            }
        },
        Suzanne: {
            transform: true,
            geom: {
                normals: false,
                uv: true
            }
        }
    }
}
*/



// ------------------------------------------------
//
//                  RUN

export function FBXParse(fbxFile, jsonFile, fbxOptions = {}, jsonOptions = {}) {
  const fbx = readFBX(fbxFile, fbxOptions)
  if (fbx) {
    const min = parseRaw(fbx, jsonOptions)
    console.log('\t')


    traceTitle('write file')
    // writeFile(fileOutRaw, fbx)
    if (min) {
      writeFile(jsonFile, min)
    }
  }



  console.log('\t')
  console.timeEnd('\t-> finished')
  console.log('\t')
}

function readFBX(file, options, fbxOptions) {
  traceTitle('read ascii fbx')
  let fbx

  console.time('\t-> parse FBX')
  let raw = {}
  try {
    fbx = parser.parseSync(file, fbxOptions).data.data
    trace('ASCII FBX file ' + file + ' parsed', true)
  }
  catch (error) {
    trace('Parsing error of file ' + file + ': ' + error.message, false)
  }


  // console.log('\t')
  console.timeEnd('\t-> parse FBX')
  console.log('\t')

  return fbx
}

function writeFile(file, data) {
  try {
    fs.writeFileSync(file, JSON.stringify(data), 'utf8')
    trace(file + ' saved', true)
  }
  catch (error) {
    trace('Can not write the file ' + file + ': ' + error.message, false)
  }
}


// ------------------------------------------------
//
//                  PARSE



// https://banexdevblog.wordpress.com/2014/06/23/a-quick-tutorial-about-the-fbx-ascii-format/
function parseRaw(data, options) {
  traceTitle('minify data')

  const out = {
    mesh: [],
    camera: []
  }

  const models = data && data.Objects && data.Objects.Model ? data.Objects.Model : null
  if (models)
    parseModels(models, out, options)

  return out
}

function parseModels(models, out, options) {
  if (options.enable && Object.keys(options.enable).length > 0) {
    let error = 0
    for (const name of Object.keys(options.enable)) {
      const model = models[name]
      if (model) {
        parseModel(model, out, name, options.enable[name])
      }
      else {
        trace(name + ' not found in FBX', false)
        error++
      }
    }

    const objLength = Object.keys(options.enable).length
    trace((objLength - error) + '/' + objLength + ' objects founds in FBX', error < 1)
  }
  else {
    for (const name in models) {
      const model = models[name]
      parseModel(model, out, name)
    }
  }

  return out
}

function parseModel(model, out, name, enableProps = null) {
  switch (model.ObjectType) {
    case 'Camera':

      trace(name + ' (' + model.ObjectType + ')')
      out.camera.push(parseCamera(model, name, enableProps))
      break

    case 'Mesh':

      trace(name + ' (' + model.ObjectType + ')')
      out.mesh.push(parseMesh(model, name, enableProps))
      break
  }
}

/*function triangleAdjacencyToTriangle(indices)
{
    const array = []

    for (let i = 0; i < indices.length; i += 4)
    {
        array.push(
            indices[i],
            indices[i+1],
            indices[i+2],
            indices[i],
            indices[i],
            indices[i+1]
        )
    }

    return indices
}*/

function bakeTransform(obj3D) {
  const transform = obj3D.transform
  const rot = transform.rot
  const scale = transform.scale
  const vertices = obj3D.geom.vertices.list
  const matrix4 = Matrix4.create()
  const w = 1

  Matrix4.scale(matrix4, scale)
  Matrix4.translate(matrix4, transform.pos)
  Matrix4.rotateZ(matrix4, rot[2] * Math.PI / 180)
  Matrix4.rotateY(matrix4, rot[1] * Math.PI / 180)
  Matrix4.rotateX(matrix4, -rot[0] * Math.PI / 180)

  for (let i = 0; i < vertices.length; i += 3) {
    const oldPos = [vertices[i], vertices[i + 1], vertices[i + 2]]
    const newPos = [
      (oldPos[0] * matrix4[0]) + (oldPos[1] * matrix4[1]) + (oldPos[2] * matrix4[2]) + (w * matrix4[3]) + matrix4[12],
      (oldPos[0] * matrix4[4]) + (oldPos[1] * matrix4[5]) + (oldPos[2] * matrix4[6]) + (w * matrix4[7]) + matrix4[13],
      (oldPos[0] * matrix4[8]) + (oldPos[1] * matrix4[9]) + (oldPos[2] * matrix4[10]) + (w * matrix4[11]) + matrix4[14],
    ]

    vertices[i] = newPos[0]
    vertices[i + 1] = newPos[1]
    vertices[i + 2] = newPos[2]
  }

  obj3D.transform = null
}

function mergeIndices(geom) {
  const refs = []
  const attrs = []

  const indices = [...geom.vertices.indices]

  const geomKeys = Object.keys(geom)
  for (let i = 0; i < geomKeys.length; i++) {
    const attrName = geomKeys[i]
    attrs.push({
      name: attrName,
      indices: [...geom[attrName].indices],
      list: [...geom[attrName].list]
    })
  }

  const attrVertices = attrs.find(attr => attr.name = 'vertices')

  for (let i = 0; i < geom.vertices.indices.length; i++) {
    const iVertice = geom.vertices.indices[i]
    let ref = refs.find(ref => ref.vertices === iVertice)

    if (ref) {
      let check = refTemp => {
        for (let j = 0; j < attrs.length; j++) {
          const name = attrs[j].name
          if (refTemp[name] !== geom[name].indices[i])
            return false
        }

        return true
      }

      ref = refs.find(check)

      if (ref) {
        indices[i] = ref.indice
      }
      else {
        const base = attrVertices.list.length / 3
        indices[i] = base
        const newRef = {
          indice: base
        }

        for (let j = 0; j < attrs.length; j++) {
          const attr = attrs[j]
          const name = attr.name
          newRef[name] = attr.indices[i]

          const thisGeom = geom[name]
          const num = thisGeom.num
          for (let k = 0; k < num; k++)
            attr.list[base * num + k] = thisGeom.list[thisGeom.indices[i] * num + k]
        }

        refs.push(newRef)
      }
    }
    else {
      const newRef = {
        indice: iVertice
      }

      for (let j = 0; j < attrs.length; j++) {
        const attr = attrs[j]
        const name = attr.name
        newRef[name] = attr.indices[i]

        const thisGeom = geom[name]
        const num = thisGeom.num
        for (let k = 0; k < num; k++)
          attr.list[iVertice * num + k] = thisGeom.list[thisGeom.indices[i] * num + k]
      }

      refs.push(newRef)
    }
  }

  geom.indices = indices

  for (let j = 0; j < attrs.length; j++) {
    const attr = attrs[j]
    const name = attr.name
    geom[name] = attr.list
  }

  // return { uvs: finalUvs, vertices: finalVerts, indices: finalIndices }
}
/*
function mergeIndices(verticeIndices, vertices, uvIndices, uvs)
{
    // console.log(verticeIndices.length, uvIndices.length, verticesLength / 3, uvs.length / 2)
    const uvVertRefs = []
    const finalUvs = new Array(Math.round(vertices.length * 2 / 3))
    const finalVerts = [...vertices]
    const finalIndices = [...verticeIndices]
    for (let i = 0; i < verticeIndices.length; i++)
    {
        const iVertice = verticeIndices[i]
        const iUV = uvIndices[i]

        let ref = uvVertRefs.find(ref => ref.vert === iVertice)

        if (ref)
        {
            ref = uvVertRefs.find(ref => ref.vert === iVertice && ref.uv === iUV)

            if (ref)
            {
                finalIndices[i] = ref.final
            }
            else
            {
                const newIVertice = finalVerts.length / 3 // new vertice indice

                const ref = {vert: iVertice, uv: iUV, final: newIVertice}
                uvVertRefs.push(ref)

                finalIndices[i] = newIVertice

                const iv2 = newIVertice + newIVertice
                const iv3 = iv2 + newIVertice

                finalUvs[iv2] = uvs[iUV + iUV]
                finalUvs[iv2 + 1] = uvs[iUV + iUV + 1]
                finalVerts[iv3] = vertices[iVertice * 3]
                finalVerts[iv3 + 1] = vertices[iVertice * 3 + 1]
                finalVerts[iv3 + 2] = vertices[iVertice * 3 + 2]
            }
        }
        else
        {
            const ref = {vert: iVertice, uv: iUV, final: iVertice}
            uvVertRefs.push(ref)

            finalUvs[iVertice + iVertice] = uvs[iUV + iUV]
            finalUvs[iVertice + iVertice + 1] = uvs[iUV + iUV + 1]
        }

        
    }

    return { uvs: finalUvs, vertices: finalVerts, indices: finalIndices }
}
*/

function parseMesh(model, name, enableProps) {
  const out = {
    name,
    transform: {},
    geom: {}
  }

  if (enableProps === null || enableProps.transform) {
    const props = model.Properties60
    if (props) {
      if (props['Lcl Translation'])
        out.transform.pos = props['Lcl Translation'].value

      if (props['Lcl Rotation'])
        out.transform.rot = props['Lcl Rotation'].value

      if (props['Lcl Scaling'])
        out.transform.scale = props['Lcl Scaling'].value

      // trace( 'Properties60 of mesh (' + name + ') parsed', true)
    }
    else {
      trace('Properties60 of mesh (' + name + ') not found', false)
    }
  }


  if ((enableProps === null || enableProps.color === true) && props.Color)
    out.color = props.Color.value


  if (model.Vertices) {
    out.geom.vertices = {
      list: model.Vertices,
      num: 3
    }
    trace(' - ' + (model.Vertices.length / 3) + ' vertices')
  }

  if (model.PolygonVertexIndex) {
    const indices = model.PolygonVertexIndex
    let type = -1

    for (let i = 0; i < indices.length; i++)
      if (indices[i] < 0) {
        indices[i] = ~indices[i]

        if (type < 0)
          type = i
      }

    out.geom.vertices.indices = indices

    if (type === 2)
      trace(' - ' + indices.length + ' indices (triangles)')
    else if (type === 3)
      trace(' - ' + indices.length + ' indices (quads)')
    else
      trace(' - ' + indices.length + ' indices (polygons of ' + (type + 1) + ' vertices)')
  }

  if (enableProps === null || (enableProps.geom && enableProps.geom.normals)) {
    if (model.LayerElementNormal) {
      if (model.LayerElementUV['0'].Normals) {
        out.geom.normals = {
          list: model.LayerElementNormal['0'].Normals,
          num: 3,
        }

        trace(' - ' + model.LayerElementNormal['0'].Normals.length + ' normals')
      }

      if (model.LayerElementNormal['0'].NormalsIndex) {
        out.geom.normals.indices = model.LayerElementNormal['0'].NormalsIndex
      }

    }
  }

  if (enableProps === null || (enableProps.geom && enableProps.geom.uv)) {
    if (model.LayerElementUV) {
      if (model.LayerElementUV['0'].UV) {
        out.geom.uv = {
          list: model.LayerElementUV['0'].UV, // mergeIndices(model.LayerElementUV['0'].UV, model.LayerElementUV['0'].UVIndex, model.PolygonVertexIndex, model.Vertices)
          num: 2
        }

        // trace(' - ' + model.LayerElementUV['0'].UVIndex.length + ' uv indices')
        trace(' - ' + (model.LayerElementUV['0'].UV.length >> 1) + ' uv')
      }

      if (model.LayerElementUV['0'].UVIndex) {
        out.geom.uv.indices = model.LayerElementUV['0'].UVIndex
      }

      /*if (model.LayerElementUV['0'].UVIndex)
      {
          const vertexIndices = model.PolygonVertexIndex
          const indices = model.LayerElementUV['0'].UVIndex

          for (let i = 0; i < indices.length; i++)
          {
              if (indices[i] < 0)
                  indices[i] = -1 - indices[i]
          }
              

          out.geom.uvIndices = indices
          trace(' - ' + indices.length + ' uv indices')
      }*/


    }
  }

  if (enableProps === null || enableProps.transform === 'bake')
    bakeTransform(out)

  mergeIndices(out.geom)

  /*if (out.geom.vertices && out.geom.indices && out.geom.uv && model.LayerElementUV['0'].UVIndex)
  {
      const {uvs, vertices, indices} = mergeIndices(out.geom.indices, out.geom.vertices, model.LayerElementUV['0'].UVIndex, out.geom.uv)
      out.geom.vertices = vertices
      out.geom.indices = indices
      out.geom.uv = uvs

      trace(' - => uv: ' + uvs.length / 2 + ', vertices: ' + vertices.length / 3 + ', indices: ' + indices.length)
  }*/


  return out
}

function parseCamera(model, name, enableProps) {
  const out = {
    name,
    transform: {}
  }

  if (enableProps === null || enableProps.transform) {
    if (model.Position)
      out.transform.pos = model.Position

    const props = model.Properties60
    if (props) {
      if (props['Lcl Translation'])
        out.transform.pos = props['Lcl Translation'].value

      if (props['Lcl Rotation'])
        out.transform.rot = props['Lcl Rotation'].value

      if (props.FieldOfView)
        out.fov = props.FieldOfView.value

      if (props.FieldOfViewX)
        out.fovx = props.FieldOfViewX.value

      if (props.FieldOfViewY)
        out.fovy = props.FieldOfViewY.value

      if (props.FocalLength)
        out.focal = props.FocalLength.value

      if (props.BackgroundColor)
        out.bgColor = props.BackgroundColor.value

      if (props.AspectW)
        out.width = props.AspectW.value

      if (props.AspectH)
        out.height = props.AspectH.value

      if (props.NearPlane)
        out.near = props.NearPlane.value

      if (props.FarPlane)
        out.far = props.FarPlane.value

      if (props.FilmAspectRatio)
        out.ratio = props.FilmAspectRatio.value

      // trace( 'Properties60 of camera (' + name + ') parsed', true)
    }
    else {
      trace('Properties60 of camera (' + name + ') not found', false)
    }
  }


  if (model.Up)
    out.transform.up = model.Up

  if (model.LookAt)
    out.transform.lookAt = model.LookAt


  return out
}

// ------------------------------------------------
//
//                  TRACE

function traceObjKeys(name, obj) {
  trace(name + ': ' + Object.keys(obj).join(', '))
}

function trace(message, success = null) {
  if (success === null) {
    console.log('\t' + message)
  }
  else if (success) {
    console.log('[OK]\t' + message)
  }
  else {
    console.log('[FAIL]\t' + message)
  }
}

function traceTitle(name) {
  let sub = ''
  while (sub.length < name.length)
    sub += '-'

  console.log('\t')
  console.log('\t' + name.toUpperCase())
  console.log('\t' + sub)
}
