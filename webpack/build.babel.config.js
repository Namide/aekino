const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


// File list
const files = ['basics', 'load', 'relationship']
const entry = {}
files.forEach(name => entry[name] = './sample/' + name + '.js')


// Build config
const plugins = [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
    }),
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
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ],
    },
    plugins
}