// 1. 原型链继承
    function Parent () {}
    function Child () {}
    Child.prototype = new Parent()

// 缺点 
// 1. 引用类型的属性被所有实例共享 
// 2. 在创建Child 实例时不能向 Parent 传参

// 2.借用构造函数 （经典继承）
 function Parent () {}
 function Child() { Parent.call(this)}
// 优点 
//  避免引用类型数据被所有实例共享
// 可以在 Child 向 Parent 传参
// 缺点
// 方法都在构建函数中定义，每次创建实例都会创建一次方法

// 3.组合继承 原型链继承 + 经典继承
function Parent () {}
function Child () { Parent.call(this, 'neber')}
Child.prototype = new Parent()
Child.prototype.constructor = Child
// 优点
// 融合原型链继承和构造函数继承的优点， 是js中最常见的继承方式

// 4.原型式继承
var person = { name: 'kevin',friends: ['daisy', 'kelly']}
 function createObj (o) {
    function Fn () {}
    Fn.prototype = o
    return new Fn()
 }
 let person1 = createObj(person)
//  缺点
// 包含引用类型的属性值始终都会共享相应的值 跟原型链继承一样

// 5.寄生式继承
 function createObj (o) {
    let clone = Object.create(o)
    clone.save = function() {}
    return clone    
 }
// 缺点
//  跟构造函数模式一样 每次创建对象都会创建一遍方法

// 6.寄生组合式继承
  function Parent () {}
  function Child () { Parent.call(this)}
  Child.prototype = new Parent()