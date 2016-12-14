// webpack config file
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');

let plugins = [];

/*
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
);
*/

const webpack = require('webpack'); // to access built-in plugins
const config = {
    entry: './src/index.ts',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    // build after every change
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    // webpack-dev-server config for refreshing and more
    devServer: {
        inline: true,
        hot: true,
        contentBase: './dist',
        watchContentBase: true,
        port: 8080
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: plugins,
    module: {
        loaders: [
            // all files with a '.ts' extension will be handled by 'ts-loader'
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
module.exports = config;
