const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


// GET A SAMPLE TO BUILD
const sampleArg = process.argv.find(name => name.search('--env.sample=') > -1)
if (!sampleArg)
{
    console.log()
    console.error('\tERROR!')
    console.error('\tYou must specify a sample name')
    console.error('\tExample running command:')
    console.error('\t> npm run dev -- --env.sample=basics')
    console.log()
    process.exit()
}
const sampleName = sampleArg.replace('--env.sample=', '')
const entry = { [sampleName]: './sample/' + sampleName + '.js' }


// BUILD CONFIG
module.exports = {
    // devtool: 'eval',    // For sourcemaps
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './sample/template.html',
            inject: 'body'
        })
    ]
}