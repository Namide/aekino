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

import Mesh3D from '../data/object/Mesh3D'
import Camera3D from '../data/uniform/Camera3D'
import Program from '../shader/material/Program'
import Geom from '../data/geom/Geom'

const defaultVertexShader = `attribute vec3 aVertexPosition;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
void main(void){
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition,1.0);
}`
const defaultFragmentShader = `precision mediump float;
void main(void){
gl_FragColor = vec4(1.0,1.0,1.0,1.0);
}`

const optionsDefault = {
    onError: error => { throw new Error('Mesh load error ' + error) },
    initCamera3D: cam => new Camera3D(),
    initdMesh3D: mesh => new Mesh3D(new Geom(), new Program(defaultVertexShader, defaultFragmentShader))
}

function loadMesh(
    url,
    onLoaded,
    {
        onError = error => { throw new Error('Mesh load error ' + error) },
        initCamera3D = cam => new Camera3D(),
        initdMesh3D = mesh => new Mesh3D(new Geom(), new Program(defaultVertexShader, defaultFragmentShader))
    })
{
    load(url, onLoaded, {onError, initCamera3D, initdMesh3D})
}
/*
function mergeIndices(geom)
{
    const refs = []
    const attrs = []

    const indices = [...geom.vertices.indices]

    const geomKeys = Object.keys(geom)
    for (let i = 0; i < geomKeys.length; i++)
    {
        const attrName = geomKeys[i]
        attrs.push({
            name: attrName,
            indices: [...geom[attrName].indices],
            list: [...geom[attrName].list]
        })
    }

    const attrVertices = attrs.find(attr => attr.name = 'vertices')

    for (let i = 0; i < geom.vertices.indices.length; i++)
    {
        const iVertice = geom.vertices.indices[i]
        let ref = refs.find(ref => ref.vertices === iVertice)

        if (ref)
        {
            let check = refTemp =>
            {
                for (let j = 0; j < attrs.length; j++)
                {
                    const name = attrs[j].name
                    if (refTemp[name] !== geom[name].indices[i])
                        return false
                }
                
                return true
            }

            ref = refs.find(check)

            if (ref)
            {
                indices[i] = ref.indice
            }
            else
            {
                const base = attrVertices.list.length / 3
                indices[i] = base
                const newRef = {
                    indice: base
                }

                for (let j = 0; j < attrs.length; j++)
                {
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
        else
        {
            const newRef = {
                indice: iVertice
            }

            for (let j = 0; j < attrs.length; j++)
            {
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

    for (let j = 0; j < attrs.length; j++)
    {
        const attr = attrs[j]
        const name = attr.name
        geom[name] = attr.list
    }

    // return { uvs: finalUvs, vertices: finalVerts, indices: finalIndices }
}
*/
function onJsonLoaded(json, onLoaded, options)
{
    const camera = []
    const mesh = []

    let mainCamera

    for (const camera3DData of json.camera)
    {
        const camera3D = options.initCamera3D(camera3DData)
        camera3D.name = camera3DData.name
        camera3D.fovy = camera3DData.fovy
        camera3D.near = camera3DData.near
        camera3D.far = camera3DData.far

        const transform3D = camera3DData.transform
        camera3D.lookAt(transform3D.pos, transform3D.lookAt, transform3D.up)
        
        camera.push(camera3D)

        if (!mainCamera)
             mainCamera = camera3D
    }

    for (const mesh3DData of json.mesh)
    {
        

        const mesh3D = options.initdMesh3D(mesh3DData)
        mesh3D.name = mesh3DData.name

        const transform3D = mesh3DData.transform
        mesh3D.translate(transform3D.pos)

        if (mainCamera)
            mesh3D.addGlobalUniform(mainCamera)

        const rot = transform3D.rot
        mesh3D.rotateZ(rot[2] * Math.PI / 180)
        mesh3D.rotateY(rot[1] * Math.PI / 180)
        mesh3D.rotateX(rot[0] * Math.PI / 180)

        if (mesh3DData.geom)
        {
            // mergeIndices(mesh3DData.geom)

            const geomData = mesh3DData.geom
            const geom = mesh3D.geom

            if (geomData.vertices)
                geom.addVertices('aVertexPosition', geomData.vertices, 3)
            
            if (geomData.uv)
                geom.addVertices('aTextureCoord', geomData.uv, 2)

            if (geomData.indices)
                geom.addIndices(geomData.indices)
        }
        
        mesh.push(mesh3D)
    }

    onLoaded({camera, mesh})
}

function load(url, onLoaded, options)
{
    const xobj = new XMLHttpRequest()
    xobj.open('GET', url, true)
    xobj.overrideMimeType('application/json')
    xobj.onreadystatechange = () =>
    {
        if (xobj.readyState === 4)
        {
            if (xobj.status === 200)
            {
                let json
                try
                {
                    json = JSON.parse(xobj.responseText)
                }
                catch (error)
                {
                    return options.onError(error.message)
                }

                onJsonLoaded(json, onLoaded, options)
            }
            else
            {
                options.onError(xobj)
            }  
        }
    }
    xobj.send(null)
}

export default loadMesh