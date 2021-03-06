const path = require("path");
const webpack = require("webpack");

module.exports = {
    // 入口: 有且可以有多个
    entry: {
        // 普通的入口文件写法
        main: ["./src/main.js"],

        // 配置多个入口文件的写法
        // main: ["./src/main.js","./src/others.js"]

        // 配置es6的转换插件
        // main: ["./src/main.js","babel-polyfill"],
        // main: ["./src/main.js","core-js/fn/promise"],
    },

    // 打包环境 development （开发环境），production（生产环境）
    mode: "development",

    // 出口：有且只能有一个
    output: {
        // name 是一个变量来自你的入口文件名称
        filename: "[name]-bundle.js",
        // 输出路径
        path: path.resolve(__dirname,"../dist"),
        // 公开的路径
        publicPath: "/"
    },

    // 配置本地服务器
    devServer:{
        contentBase: "dist",

        // 热更新
        hot: true,

        // 是否直接在页面中提示错误
        overlay: true,
    },

    // 配置加载器
    module:{
        rules:[
            //js loaders
            {
                test: /\.js$/,
                use:[
                    {
                        loader: "babel-loader"
                    },
                ],
                // 排除 node_modules 下的 .js 文件
                exclude: /node_modules/
            },
            // css loaders
            {
                test: /\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            // html loaders
            {
                test:/\.html$/,
                use:[
                    {   //用于生成文件的起名
                        loader: "file-loader",
                        options: {
                            name: "[name].html"
                        }
                    },
                    {  //这个loader 用于分割,不让这个文件被融入到出口的js中。
                        loader: "extract-loader",
                        options: {
                            name: "[name].html"
                        }
                    },
                    {   
                        loader: "html-loader",
                        options: {
                            // 当在html中遇到 img标签的 src属性进行加载
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            // 哈希值（8位）：[hash:8]  尾缀：[ext]
                            // name: "imgss/[name]-[hash:8].[ext]",
                            name: "imgss/[name]-[hash:8].[ext]",
                        } 
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}