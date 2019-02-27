// iterator和Generator
// import Co from 'co'
let Co = require('co')
function *Tset(){
    let val1 = yield ()=>Promise.resolve('a');
    let val2 = yield ()=>Promise.resolve(val1);
    let val3 = yield ()=>Promise.resolve(val2);
    return val3;
}

// let tset = Tset();
// console.log(Tset(),Promise.resolve('a'))

Co( [1,2,3] ).then(( val )=>{
    console.log( val )
})