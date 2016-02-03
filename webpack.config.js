/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 2016/2/2 10:28
 * @Description: webpack配置文件
 * @Copyright(©) 2015 by xiaomo.
 **/
var webpack = require('webpack');
//noinspection JSUnresolvedFunction
module.exports = {
    entry: [
        //页面入口文件配置
        './entry.js',
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: 'src/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js',
        css: 'style.css'
    },
    plugins: [
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin("common.js"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        //将样式统一发布到style.css中
        //new ExtractTextPlugin("style.css", {
        //    allChunks: true,
        //    disable: false
        //})
    ],
    resolve: {
        extensions: ['', '.js', '.jsx','.css']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['jsx?harmony']
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel!jsx-loader?harmony'
            }, {
                // 使用 style-loader、css-loader 和 sass-loader 来编译处理
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                //.css 文件使用 style-loader 和 css-loader 来处理
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            }, {
                //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }
        ],
        noParse: /\.min\.js/
    }
};

