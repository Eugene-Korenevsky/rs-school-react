const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { link } = require('fs');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8090,
        contentBase: path.join(__dirname, 'public'),
    },
};

//const esLintPlugin = (isDev) => isDev ? [] : [new ESLintPlugin({ extensions: ['ts', 'js'] })];

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    entry: {
        main: './src/Index.tsx',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext]',
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg|mp3)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({ title: 'English for kids' },
        {link: 'style.css'}),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
    },
    ...devServer(development)
});