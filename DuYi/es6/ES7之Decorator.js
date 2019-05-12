// 在 ES6 中 class 有 私有属性 共有属性(原型属性) 静态属性
class Plane {

  // 定义静态属性
  static alive() {
    return true;
  }

  constructor(name) {
    // 定义私有属性
    this.name = name || '普通飞机';
    this.blood = 100;
  }

  // 定义共有属性（方法）
  fly() {
    console.log('fly');
  }
}

// 在 ES7 中 class 有 私有属性 共有属性(原型属性) 静态属性
class Plane {

  // 定义静态属性 方法1
  static alive1() {
    return true;
  };
  // 定义静态属性 方法2
  static alive2 = 10;

  constructor(name) {
    // 定义私有属性 方法1
    this.name = name || '普通飞机';
    this.blood1 = 100;
  }
  // 定义私有属性 方法2
  blood2 = 999;

  // 定义共有属性（方法）
  fly() {
    console.log('fly');
  }
}

// 在使用修饰器的时候
// 私有属性取值在 descriptor.initializer
// 共有属性 descriptor.value 