var path = require('path');
var webpack = require('webpack');
module.exports = {
    /*cache: true,*/
    devtool: 'eval',    // For sourcemaps
    entry: {
        'bundle': './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/assets/',
        filename: '[name].js',
        //sourceMapFilename: '[file].map'
    },
    /*plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]*/
    /*module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    }*/
};