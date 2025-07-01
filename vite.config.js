import { defineConfig } from 'vite'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'


// Get a sample to build
const sampleName = process.env.SAMPLE
if (!sampleName) {
  console.log()
  console.error('\tERROR!')
  console.error('\tYou must specify a sample name')
  console.error('\tExample running commands:')
  console.error('\t> npm run dev-basics')
  console.error('\t> npm run dev-load')
  console.error('\t> npm run dev-relationship')
  console.log()
  process.exit()
}


// Create html entry point
const isProd = process.env.NODE_ENV === 'production'
const indexFileName = isProd ? sampleName : 'index' 
if (!existsSync(`./${sampleName}.html`)) {
  const data = readFileSync('./sample/template.html', { encoding: 'utf8', flag: 'r' })
  const entry = '/sample/' + sampleName + '.js'
  writeFileSync(`./${indexFileName}.html`, data.replace('{javascriptSource}', entry))
}
const publicDir = isProd ? 'public' : 'dist' 

export default defineConfig({
  plugin: [],
  base: '',
  publicDir,
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        app: `./${indexFileName}.html`,
      },
      output: {
        entryFileNames: `${sampleName}.js`,
        assetFileNames: `${sampleName}.css`,
      }
    }
  },
  server: {
    host: true
  }
})