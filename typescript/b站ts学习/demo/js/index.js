"use strict";
// ts数据类型（略）
// var str:string = "你好";
// console.log(999);
// 类
// 1.类的定义
// 2.继承
// 3.类里面的修饰符
// 4.静态属性 静态方法
// 5.抽象类 多态
// class Person {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// let p = new Person('人')
// console.log(p)
// // 类的继承
// class Student extends Person {
//   constructor(name: string) {
//     super(name)
//   }
// }
// let s = new Student('学生')
// console.log(s)
// 类的三种修饰符
// public（公有），                 类里面，子类，类外面都能访问（默认）
// protected（保护类型），          在类里面，子类里面可以访问，在类外部没法访问
// private（私有）                  在类里面可以访问，子类，类外部都没法访问
// static 定义实例静态属性和方法（方法中的this可以获取静态属性）
// 多态：父类定义一个方法不去实现，让继承他的子类去实现   每一个子类有不同的表现
// 多态属于继承
// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   eat(){
//     console.log('吃的方法')
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat(){
//     console.log('狗吃肉')
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat(){
//     console.log('猫吃老鼠')
//   }
// }
// ts中的抽象类，它提供跟其他类的基础类，不能直接实例化。
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现而且必须派生类中实现。
// abstract 抽象方法只能用来定义标准 （abstract抽象方法只能出现在抽象类中）
// abstract class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   abstract eat(): void  // 抽象方法不用具体的去实现
// }
// // 抽象类 Animal 的子类中必须实现，抽象方法 eat
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat():void{
//     console.log('狗吃肉')
//   }
// }
// ts的接口 （行为规范）
// 1.属性接口
// 2.函数类型接口
// 3.可索引接口
// 4.类类型接口
// 5.接口扩展
// 1.属性接口
// 使用 interface 定义接口
// interface FullName {
//   firstName: string;
//   seconName: string;
//   age?: number; // 可选属性
// }
// 2.函数接口:对方法传入的参数  以及返回值进行约束 (批量约束)
// interface encrypt {
//   (key: string, value: string): string;
// }
// let md5: encrypt = function (key: string, value: string): string {
//   return key + value;
// }
// 3.可索引接口 数组 对象 的索引进行约束约束（不常用）
// interface UserArr {
//   [index:number]:string
// }
// let arr:UserArr = ['2','3'];
// console.log(arr);
// interface UserObj {
//   [index:string]:string
// }
// let obj:UserObj = {name:'lb',age:'18'};
// console.log(arr);
// 4.类类型接口：对类的约束   和   抽象类有点相似
// interface Animal {
//   name: string;
//   eat(str: string): void;
// }
// class Dog implements Animal { // 类使用 implements 关键字使用约束（Animal）
//   name: string = '111';
//   eat = (): void => {
//     // 可以不传参数也行
//   }
// }
// 5.接口扩展： 接口可以继承接口
// interface Animal {
//   eat():void;
// }
// interface Person extends Animal {
//   work():void;
// }
// // class Web implements Person{
// //   public name: string = 'lee';
// //   eat(){
// //     console.log('eat')
// //   }
// //   work(){
// //     console.log('work')
// //   }
// // }
// // 拓展接口继承后也可以进行类的继承
// class Programmer {
//   public name: string;
//   constructor(name:string) {
//     this.name = name
//   }
//   coding(code:string){
//     console.log('codeing' +　code)
//   }
// }
// class Web extends Programmer implements Person { 
//   public name: string = 'lee';
//   eat(){
//     console.log('eat')
//   }
//   work(){
//     console.log('work')
//   }
// }
// // 泛型（类型不定时可以使用泛型）
// // 泛型定义，泛型函数
// function getData<T>(value: T): T {
//   return value;
// }
// getData<string>('字符串');
// getData<number>(1);
// //  泛型类 
// // 需要同时支持返回数字或者字符串
// // class MinClass { // 这个只能返回 number 类型
// //   public list:number[] = [];
// //   add(num:number){
// //     this.list.push(num);
// //   }
// //   min():number{
// //     let min:number = this.list[0];
// //     return min
// //   }
// // }
// class MinClass<T> { // 可返回任意 类型
//   public list: T[] = [];
//   add(num: T) {
//     this.list.push(num);
//   }
//   min(): T {
//     let min: T = this.list[0];
//     return min
//   }
// }
// 泛型接口
// 原版接口
// interface ConfigFn {
//   (value: string, value1: string): string
// }
// let setData: ConfigFn = function (val1: string, val2: string): string {
//   return val1 + val2
// }
// 泛型接口
// // 泛型(写法1)
// interface ConfigFn {
//   <T>(value: T, value1: T): T
// }
// let setData: ConfigFn = function<T> (val1: T, val2: T): T {
//   return val1
// }
// setData<string>('1','2')
// 泛型(写法2)
// interface ConfigFn<T> {
//   (value: T, value1: T): T
// }
// function setData<T> (val1: T, val2: T): T {
//   return val1
// }
// let myGetData:ConfigFn<string> = setData;
// setData<string>('1','2')
// 把类作为约束数据传入的类型
// // 例子1
// class User {
//   username: string | undefined;
//   password: string | undefined;
// }
// class MysqlDb {
//   add(user: User): boolean {
//     return true
//   }
// }
// let u = new User();
// u.username = "张三";
// u.password = "123456";
// var Db=new MysqlDb();
// Db.add(u);
// // 例子2
// class ArticleCate {
//   title: string | undefined;
//   desc: string | undefined;
//   status: string | undefined;
// }
// class MysqlDb {
//   add(info: ArticleCate): boolean {
//     console.log(info)
//     return true
//   }
// }
// let a = new ArticleCate();
// a.title = "国内";
// a.desc = "新闻";
// a.status = "国内";
// var Db = new MysqlDb();
// Db.add(a);
// 可以使用泛型 MysqlDb 重复的封装
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDb;
}());
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
var a = new ArticleCate({ title: "国内", desc: "新闻", status: "国内" });
var Db = new MysqlDb();
Db.add(a);
