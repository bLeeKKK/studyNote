// 枚举
// enum GENDER{
//     Male,
//     Femalem,
// }
// var sex:GENDER;
// sex = GENDER.Male;]
// 推测类型
// var a,b=10;
// console.log(a)
// a = 5
// a = "0"
// b = 199
// 函数类型 （参数和返回值）
// function show( a:number, b:number):number{
//     return a + b
// }
// // 声明外部变量
// declare var $
// $(function(){})
// function ajax(  url:string,
//                 success:(res:string,code:number)=>void,
//                 error:(code:number)=>void,
//             ){
//                 let str=1,code=0;
//                 if(url){
//                     success(str,code)
//                 }else{
//                     error(code)
//                 }
// }
// ajax('1.txt',(str,code)=>{
//     console.log(str,code)
// },(code)=>{
//     console.log(code)
// });
// 接口
// interface Point {
//     x: number,
//     y: number,
//     z?: number,
// }
// var p:Point;
// p = {x:1,y:2,z:99};
// typescript中的Class类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showMe = function () {
        var _a = this, name = _a.name, age = _a.age;
        console.log(name, age);
    };
    return Person;
}());
var p = new Person('lee', 18);
p.showMe();
