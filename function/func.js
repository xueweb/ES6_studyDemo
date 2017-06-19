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
function log(x, y = 'world') {
    console.log(x, y);
}
log('hello');

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
function f(x, y = x) {
    console.log(y);
}

f(2) // 2