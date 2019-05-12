"use strict";
// var str:string = "你好";
// console.log(999);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var p = new Person('人');
console.log(p);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    return Student;
}(Person));
var s = new Student('学生1');
console.log(s);
