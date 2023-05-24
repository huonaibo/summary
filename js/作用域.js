//  当js代码执行一段可执行代码时，会创建对应的执行上下文， 每个执行上下文，都有三个重要属性
//   1. 变量对象 2. 作用域链 3. this

// 作用域链 
// 当查找变量的时候，会先从当前上下文的变量对象中查找， 如果未找到 就去父级的执行上下文变量对象中查找，一直找到全局上下文的变量对象 window， 由多个执行上下文的变量对象构成的链表就叫作用域链

// 函数定义
// 函数的作用域在函数定义的时候就决定了
// 函数有一个内部属性 [[scope]]  函数创建的时候，就会保存所有的父变量对象到其中 可以理解为 [[scope]] 就是所有父变量对象的层级链， 但[[scope]] 不代表完整的作用域链
 
function foo() {
    function bar() {
        // ...
    }
}
/*
foo.[[scope]] = [
  globalContext.VO
];

bar.[[scope]] = [
    fooContext.AO,
    globalContext.VO
];
*/

// 函数激活
// 当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端
