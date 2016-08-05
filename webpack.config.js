var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
     entry: [
       'webpack/hot/only-dev-server',
       "./js/app.js"
     ],
     output: {
         path: './dist',
         filename: "bundle.js"
     },
     module: {
         loaders: [
             { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
             { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
             { test: /\.css$/, loader: "style!css" }
         ]
     },
     resolve:{
         extensions:['','.js','.json']
     },
     plugins: [
       new webpack.HotModuleReplacementPlugin(),

         new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
             filename:'index.html',    //生成的html存放路径，相对于 path
             template:'./index.html',
             inject:true,    //允许插件修改哪些内容，包括head与body
             hash:false,    //为静态资源生成hash值
             //chunks:['frame','eeindex'],
             minify:{    //压缩HTML文件
                 removeComments:true,    //移除HTML中的注释
                 collapseWhitespace:false    //删除空白符与换行符
             }
         }),
     ],
     devServer: {
        hot: false,
        inline: true
     }
 };
