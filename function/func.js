/**
 * Created by 29912 on 2017/6/19.
 */
/*函数的默认参数*/
/**
 * 参数变量是默认声明的，所以不能用let或const再次声明。
 * 使用参数默认值时，函数不能有同名参数。
 * @param x
 * @param y
 */
var log = require('../log')
/*function log(x, y = 'world') {
 console.log(x, y);
 }
 log('hello');*/
log('world', 'hello')
/**
 * 参数默认值可以与解构赋值的默认值，结合起来使用。
 * @param x
 * @param y
 */
function foo({x, y = 5}) {
    console.log(x, y);
}

/*foo({}) // undefined, 5
 foo({x: 1}) // 1, 5
 foo({x: 1, y: 2}) // 1, 2
 foo() // TypeError: Cannot read property 'x' of undefined*/

var parm = {x: 5, y: 6}
foo(parm)
var x = 1;

//作用域
//一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。
/**
 * 上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。
 * @param x
 * @param y
 */
/*
 function f(x, y = x) {
 console.log(y);
 }

 f(2) // 2
 */

    /*
     * */
    console.log('函数的rest参数')
    function add(...values) {
        let sum = 0;
        for (var val of values) {
            sum += val;
        }
        return sum;
    }

    console.log(add(2, 3, 5))
    function sortNumbers() {
        return Array.prototype.slice.call(arguments).sort();
    }

    const sortNum = (...numbers) => numbers.sort();
    /*rest 参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量*/
    function push(array, ...items) {
        items.forEach(function (item) {
            array.push(item)
        })
    }

    var a = [55];
    push(a, 1, 2, 3);
    console.log(a);

/*扩展运算符...*/
function apush(array,...items) {
    array.push(...items)
}
var narr=[1,1,1];
apush(narr,1,2,2);
log(narr)



