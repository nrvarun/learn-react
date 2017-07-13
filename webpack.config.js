'use strict';

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    devtool: "source-map",
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js|x$/,
                exclude: [/node_modules/],
                use: [
                    // {
                    //     loader: 'eslint-loader'
                    // },
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env','es2015','react'] },
                    }
                ],
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
    devServer: {
        contentBase: "./src",
        open: true
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'src'),
        filename: './js/index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin("./css/[name].css"),
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