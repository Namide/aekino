var path = require('path');
var webpack = require('webpack');
var BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
    entry: {
        'bundle': './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].es6.min.js'
    },
    plugins: [
        new BabiliPlugin(/*babiliOptions, overrides*/)
    ]
};

