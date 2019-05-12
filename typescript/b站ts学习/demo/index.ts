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
// 3.可索引几口
// 4.类类型接口
// 5.接口扩展

// 1.属性接口
// 使用 interface 定义接口
interface FullName {
  firstName: string;
  seconName: string;
  age?: number; // 可选属性
}
