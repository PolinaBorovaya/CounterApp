// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import("webpack").Configuration} */
module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

    const publicPath = process.env.PUBLIC_PATH || '/';

    const config = {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? '[name].[contenthash].js' : '[name].js',
            clean: true,
            publicPath: publicPath,
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
        },
        devServer: {
            open: true,
            host: 'localhost',
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(js|jsx)$/i,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [stylesHandler, 'css-loader'],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: 'asset',
                },
                {
                    test: /\.html$/i,
                    use: ['html-loader'],
                },
            ],
        },
    };

    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = 'development';
    }

    return config;
};