const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/demo/index.ts',
    output: {
        filename: 'index.js'
    },
    optimization: {
        minimize: false,
    },
    devServer: {
        open: ['http://localhost:9000'],
        hot: true,
        host: '0.0.0.0',
        port: 9000
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
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Boiler Plate',
            template: './src/demo/index.html',
        }),
        new VanillaExtractPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
};
