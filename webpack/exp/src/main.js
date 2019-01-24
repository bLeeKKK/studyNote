// alert(999)
// alert(888)
require("./main.css")
require("./index.html")
import bindEvent from "./bindEvent"

let obj = {
    bindEvent,
}

let fun = ()=>{
    console.log('I am fun')
}

fun();

console.log(bindEvent)