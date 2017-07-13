'use strict';

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

// let loaders = [
//   {
//     loader: 'css-loader',
//     options: {
//       modules: true
//     }
//   },
//   {
//     loader: 'postcss-loader'
//   },
//   {
//     loader: 'sass-loader'
//   }
// ];

module.exports = {
    entry: './src/index.js',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js|x$/,
                exclude: [/node_modules/],
                use: [{
                loader: 'babel-loader',
                options: { presets: ['env', 'es2015','react'] },
                }],
            },
            {
                test: /\.html$/,
                use: [
                        {
                            loader: 'html-loader'
                        }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                minimize: true,
                                sourceMap: true,
                                importLoaders: true,
                                localIdentName: '[name]__[local]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                path: path.resolve(__dirname, 'postcss.config.js')
                                },
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'expanded',
                                sourceMap: true,
                                sourceMapContents: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ['url-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            publicPath: 'dist',
            filename: 'index.html'
        }),
        new ExtractTextPlugin("./css/[name].css"),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            },
            sourceMap: true
        }),
        new LoaderOptionsPlugin({
            options: {
                context: '/',
                sassLoader: {
                includePaths: [path.resolve(__dirname, './src')]
                }
            }
        })
    ]
}