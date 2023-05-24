// typeof 可判定的类型 string number boolean object function undefined symbol 七种类型

// js底层如何存储类型信息的？
//  js在底层存储变量的时候 会在变量机器码的低位 1-3位存储其类型信息

/* 
000 对象
010 浮点数
100 字符串
110 布尔
1 整数
 undefined 和 null 比较特殊
    null 所有机器码均为0
    undefined 从 -2 ^ 30整数来表示
*/ 


//  typeof 判断 null 时 由于 null机器码均为0  因此被当作对象看待

//  instanceof 判断 null  结果为不是object  报错
// null instanceof null // TypeError: Right-hand side of 'instanceof' is not an object


Object.prototype.toString.call()// 类型判断  比较准确


// instanceof 实现原理
function instance_of (leftValue, rightValue) {
    let rightProto = rightValue.prototype
    leftValue = leftValue._proto__

    while(true) {
        if (leftValue === null) return false
        if (leftValue === rightProto) return true
        leftValue = leftValue._proto__
    }
}