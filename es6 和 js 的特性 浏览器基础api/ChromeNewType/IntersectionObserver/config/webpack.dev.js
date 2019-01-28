const path = require("path");

module.exports = {
    entry:{
        main: "./src/main.js"
    },

    mode: "development",

    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname,"../dist"),
        publicPath: '/',
    },

    devServer: {
        contentBase: "dist/IntersectionObserver.html",
    },

    module:{
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].html",
                        }
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            name: "[name].html",
                        }
                    },
                    {
                        loader: "html-loader", 
                    }
                ]
            }
        ]
    }
}