const webpack = require('webpack');
// const AotPlugin = require('@ngtools/webpack').AotPlugin;
const helpers = require('./helpers');
const  AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
module.exports = (envOptions) => {
    envOptions = envOptions || {};
    const config = {
        entry: {
            main: './src/main.ts'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.js', '.html'],
        },
        module: {
            rules: [
                {
                    "test": /\.ts$/,
                    "loader": "@ngtools/webpack"
                  },
                { test: /\.html$/, loader: 'raw-loader' },
                { test: /\.css$/, loader: 'raw-loader' },
            ]
        },
        devtool: 'source-map',
        "node": {
            "fs": "empty",
            "global": true,
            "crypto": "empty",
            "tls": "empty",
            "net": "empty",
            "process": true,
            "module": false,
            "clearImmediate": false,
            "setImmediate": false
          },
        "devServer": {
            "historyApiFallback": true
          }
    };
    if (true) {
        config.plugins = [
            new AngularCompilerPlugin({
                "mainPath": "./src/main.ts",
                "platform": 0,
                "sourceMap": true,
                "tsConfigPath": './tsconfig.json',
                "skipCodeGeneration": false,
              }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    screw_ie8: true
                },
                comments: false
            }),
        ];
    }
    return config;
};