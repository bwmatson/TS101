// webpack config file
const WebpackShellPlugin = require("webpack-shell-plugin");
const path = require("path");

let plugins = [];

/*
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
);
*/

const webpack = require("webpack"); // to access built-in plugins
const config = {
    // webpack-dev-server config for refreshing and more
    devServer: {
        contentBase: "./dist",
        hot: true,
        inline: true,
        port: 8080,
        watchContentBase: true,
    },
    // Turn on sourcemaps
    devtool: "source-map",
    entry: "./src/index.ts",
    module: {
        loaders: [
            // all files with a '.ts' extension will be handled by 'ts-loader'
            {
                loader: "ts-loader",
                test: /\.ts$/,
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: "./dist",
    },
    plugins: plugins,
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    // build after every change
    watch: false,
    watchOptions: {
        ignored: /node_modules/,
    },
};
module.exports = config;
