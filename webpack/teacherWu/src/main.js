require("babel-runtime/regenerator");

// 配置热更新
require("webpack-hot-middleware/client")

require("./index.css");
require("./index.html");

// ES6 语法
const fun = async (arg) => {
    const {a,b} = arg
    await console.log("一个 ES61 语a法")
    console.log("等待后a的弹出")
}

fun({a:1,b:2})
// alert("hello world!!!!")