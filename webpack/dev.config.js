var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


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

var entry = { [sampleName]: './sample/' + sampleName + '.js' }



module.exports = {
    devtool: 'eval',    // For sourcemaps
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