var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        'bundle.min': './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
        })
    ],
    module: {
        loaders: [
            {
                // Uglify can not parse es6
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};