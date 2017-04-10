var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        'bundle': './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].es6.js'
    }
};

