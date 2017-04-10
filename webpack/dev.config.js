var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval',    // For sourcemaps
    entry: {
        'bundle': './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};