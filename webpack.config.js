var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: {
        "bundle": "./src/main.js",
        "bundle.min": "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        // publicPath: "/assets/",
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
    module: {
        /*loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]*/
    }
};