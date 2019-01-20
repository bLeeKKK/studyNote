require("babel-runtime/regenerator")
require("./index.css")
require("./index.html")

// ES6 语法
const fun = async (arg) => {
    const {a,b} = arg
    await console.log("一个 ES6 语法")
    console.log("等待后的弹出")
}

fun({a:1,b:2})
// alert("hello world!!!!")