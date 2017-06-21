const FBXParse = require('../src/tool/FBXParser')
const path = require('path')


const fbx = path.resolve(__dirname, './suzanne-ascii.fbx')
const json = path.resolve(__dirname, '../dist/assets/suzanne.min.json')


const fbxOptions = {
    parseComments: false,   // flag to retain comments when parsing the file.
    verbose: false,         // flag to write parsing details to the nodejs console.
    logging: false,         // flag to write and save parsing details to a log file.
    returnJSON: false,      // flag to have the a JSON string of the parsed object returned with the js object.
    saveJSON: false         // flag to save the parsed data as a JSON string to file.
}


const jsonOptions = {
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
        Cube: {
            transform: true,
            geom: {
                normals: false,
                uv: true
            }
        },
        Suzanne: {
            transform: 'bake',
            geom: {
                normals: false,
                uv: true
            }
        }
    }
}

FBXParse(fbx, json, fbxOptions, jsonOptions)
