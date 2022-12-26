// prototype  每个函数都有prototype属性  
// prototype 指向一个 调用该构造函数而创建的实例的原型
// 原型 每个js对象（null除外）在创建的时候都会与之关联一个对象 这个对象就是原型 每个对象都会从原型继承属性
function Person () {}
let person = new Person()
console.error(person.__proto__ === Person.prototype)
// constructor 原型指向构造函数
console.error(Person === Person.prototype.constructor)
// es5 获取构造函数原型 
console.error(Object.getPrototypeOf(person) === Person.prototype)
// Object.prototype 的原型指向mull
console.error(Object.prototype.__proto__ === null)

// 每一个对象都会从原型‘继承’属性  
// 继承意味着复制操作，然而js默认并不会复制对象的属性，相反， js只是在两个对象之间创建一个关联，这样一个对象就可以委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些