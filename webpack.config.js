const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

const {
    version,
    name,
    license,
    repository,
    author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = `
  ${name} v${version}
  ${repository.url}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, ' ')} and project contributors.

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

// noinspection WebpackConfigHighlighting
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/lib/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        library: 'MyLibrary',
        libraryTarget: 'umd',
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ extractComments: false }),
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.([mjt])s$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vanilla\.css$/i, // vanilla-extract files
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            url: false // Required as image imports should be handled via JS/TS import statements
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        }),
        new webpack.BannerPlugin(banner),
        new VanillaExtractPlugin({
            identifiers: 'short'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
};
