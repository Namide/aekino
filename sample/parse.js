import { fileURLToPath } from 'url'
import { resolve, dirname } from 'node:path'
import { existsSync, mkdirSync } from 'node:fs'
import { FBXParse } from '../src/tool/FBXParser.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fbx = resolve(__dirname, './suzanne-ascii.fbx')
const json = resolve(__dirname, '../dist/assets/suzanne.min.json')

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

if (!existsSync(resolve(__dirname, '../dist'))) {
  mkdirSync(resolve(__dirname, '../dist'));
}

if (!existsSync(resolve(__dirname, '../dist/assets'))) {
  mkdirSync(resolve(__dirname, '../dist/assets'));
}

FBXParse(fbx, json, fbxOptions, jsonOptions)
