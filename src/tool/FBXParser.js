console.time('\t-> finished')

const parser = require('fbxasciitojs')
const fs = require('fs')


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

function FBXParse(fbxFile, jsonFile, fbxOptions = { }, jsonOptions = { })
{
    const fbx = readFBX(fbxFile, fbxOptions)
    if (fbx)
    {
        const min = parseRaw(fbx, jsonOptions)
        console.log('\t')


        traceTitle('write file')
        // writeFile(fileOutRaw, fbx)
        if (min)
        {
            writeFile(jsonFile, min)
        }
    }

    

    console.log('\t')
    console.timeEnd('\t-> finished')
    console.log('\t')
}

function readFBX(file, options, fbxOptions)
{
    traceTitle('read ascii fbx')
    let fbx

    console.time('\t-> parse FBX')
    let raw = {}
    try
    {
        fbx = parser.parseSync(file, fbxOptions).data.data
        trace('ASCII FBX file ' + file + ' parsed', true)
    }
    catch (error)
    {
        trace('Parsing error of file ' + file + ': ' + error.message, false)
    }


    // console.log('\t')
    console.timeEnd('\t-> parse FBX')
    console.log('\t')

    return fbx
}

function writeFile(file, data)
{    
    try
    {
        fs.writeFileSync(file, JSON.stringify(data), 'utf8')
        trace(file + ' saved', true)
    }
    catch (error)
    {
        trace('Can not write the file ' + file + ': ' + error.message, false)
    }
}


// ------------------------------------------------
//
//                  PARSE



// https://banexdevblog.wordpress.com/2014/06/23/a-quick-tutorial-about-the-fbx-ascii-format/
function parseRaw(data, options)
{
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

function parseModels(models, out, options)
{
    if (options.enable && Object.keys(options.enable).length > 0)
    {
        let error = 0
        for (const name of Object.keys(options.enable))
        {
            const model = models[name]
            if (model)
            {
                parseModel(model, out, name, options.enable[name])
            }
            else
            {
                trace(name + ' not found in FBX', false)
                error++
            }
        }
        
        const objLength = Object.keys(options.enable).length
        trace( (objLength - error) + '/' + objLength + ' objects founds in FBX', error < 1)
    }
    else
    {
        for (const name in models)
        {
            const model = models[name]
            parseModel(model, out, name)
        }
    }
    
    return out
}

function parseModel(model, out, name, enableProps = null)
{
    switch(model.ObjectType)
    {
        case 'Camera' :

            trace(name + ' (' + model.ObjectType + ')')
            out.camera.push(parseCamera(model, name, enableProps))
            break

        case 'Mesh' :

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

function parseMesh(model, name, enableProps)
{
    const out = {
        name,
        transform: {},
        geom: {}
    }
    
    if (enableProps === null || enableProps.transform)
    {
        const props = model.Properties60
        if (props)
        {
            if (props['Lcl Translation'])
                out.transform.pos = props['Lcl Translation'].value

            if (props['Lcl Rotation'])
                out.transform.rot = props['Lcl Rotation'].value

            if (props['Lcl Scaling'])
                out.transform.scale = props['Lcl Scaling'].value

            if (props.Color)
                out.color = props.Color.value

            // trace( 'Properties60 of mesh (' + name + ') parsed', true)
        }
        else
        {
            trace( 'Properties60 of mesh (' + name + ') not found', false)
        }
    }
        
    
    if (model.Vertices)
    {
        out.geom.vertices = model.Vertices
        trace(' - ' + (model.Vertices.length / 3) + ' vertices')
    }
        
    if (model.PolygonVertexIndex)
    {
        const indices = model.PolygonVertexIndex
        let type = -1

        for (let i = 0; i < indices.length; i++)
            if (indices[i] < 0)
            {
                indices[i] = ~indices[i]

                if (type < 0)
                    type = i
            }
        
        out.geom.indices = indices

        if (type === 2)
            trace(' - ' + indices.length + ' indices (triangles)')
        else if (type === 3)
            trace(' - ' + indices.length + ' indices (quads)')
        else
            trace(' - ' + indices.length + ' indices (polygons of ' + (type + 1) + ' vertices)')
    }
    
    if (enableProps === null || (enableProps.geom && enableProps.geom.normals))
    {
        if (model.LayerElementNormal)
        {
            out.geom.normals = model.LayerElementNormal['0'].Normals
            trace(' - ' + out.geom.normals.length + ' normals')
        }
    }
    
    if (enableProps === null || (enableProps.geom && enableProps.geom.uv))
    {
        if (model.LayerElementUV)
        {
            if ( model.LayerElementUV['0'].UV)
            {
                out.geom.uv = model.LayerElementUV['0'].UV // mergeIndices(model.LayerElementUV['0'].UV, model.LayerElementUV['0'].UVIndex, model.PolygonVertexIndex, model.Vertices)
                trace(' - ' + model.LayerElementUV['0'].UVIndex.length + ' uv indices')
                trace(' - ' + (model.LayerElementUV['0'].UV.length >> 1) + ' uv')
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

    if (out.geom.vertices && out.geom.indices && out.geom.uv && model.LayerElementUV['0'].UVIndex)
    {
        const {uvs, vertices, indices} = mergeIndices(out.geom.indices, out.geom.vertices, model.LayerElementUV['0'].UVIndex, out.geom.uv)
        out.geom.vertices = vertices
        out.geom.indices = indices
        out.geom.uv = uvs

        trace(' - => uv: ' + uvs.length / 2 + ', vertices: ' + vertices.length / 3 + ', indices: ' + indices.length)
    }
        
        
    return out
}

function parseCamera(model, name, enableProps)
{
    const out = {
        name,
        transform: {}
    }
    
    if (enableProps === null || enableProps.transform)
    {
        if (model.Position)
            out.transform.pos = model.Position
            
        const props = model.Properties60
        if (props)
        {
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
        else
        {
            trace( 'Properties60 of camera (' + name + ') not found', false)
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

function traceObjKeys(name, obj)
{
    trace(name + ': ' + Object.keys(obj).join(', '))
}

function trace(message, success = null)
{
    if (success === null)
    {
        console.log('\t' + message)
    }
    else if (success)
    {
        console.log('[OK]\t' + message)
    }
    else
    {
        console.log('[FAIL]\t' + message)
    }
}

function traceTitle(name)
{
    let sub = ''
    while (sub.length < name.length)
        sub += '-'
    
    console.log('\t')
    console.log('\t' + name.toUpperCase())
    console.log('\t' + sub)
}

module.exports = FBXParse