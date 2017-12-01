var path = require('path')
var webpack = require('webpack')
var BabiliPlugin = require('babili-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


// File list
const files = ['basics', 'load', 'relationship']
const entry = {}
files.forEach(name => entry[name] = './sample/' + name + '.js')


// Build config
const plugins = [
    new BabiliPlugin(/*babiliOptions, overrides*/),
    ...files.map(name => 
    {
        return new HtmlWebpackPlugin({
            filename: name + '.html',
            template: './sample/template.html',
            inject: true,
            chunks: [name]
        })
    })]

module.exports = {
    entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].es6.min.js'
    },
    plugins
}