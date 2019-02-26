res=>res;
let arr = [];
console.log(arr[Symbol('Symbol.iterator')])

let obj = { 0:1, 1:2}
console.log( {...obj} )