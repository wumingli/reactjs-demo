var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./js/app.js"
    ],
    output: {
        path: './dist',
        filename: "main-[hash].js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        new ExtractTextPlugin("style.[hash].css", {
            allChunks: false,
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true,
            hash: true,
        }),
    ],
    devServer: {
        hot: true,
        inline: true
    }
};
