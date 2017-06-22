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
function apush(array, ...items) {
    array.push(...items)
}
var narr = [1, 1, 1];
apush(narr, 1, 2, 2);
log(narr)

/*箭头函数*/

//1.基本用法

var f = v => v * 2;
/*
 * var f = function(v) {
 return v*2;
 };
 * */
var sum = (num1, num2) => num1 + num2;
/*
 *  如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
 *  var sum = (num1, num2) => { return num1 + num2; }
 *
 * */

log(sum(1, 2))
// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
var getTempItem = id => ({id: id, name: "Temp"});

//2.箭头函数可以与变量解构结合使用。
const fullName = ({first, last}) => first + ' ' + last;
var person = {first: 'zhu', last: 'hi'}
log(fullName(person));
//3.简化回调函数
[1, 2, 3].map(x => x * 2);

var values = [1, 2, 3, 4, 5];
var result = values.sort((a, b) => b - a);
log(result)

/*
 * 箭头函数有几个使用注意点。

 （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

 （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

 （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

 （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。
 * */
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100)
}
var id = 12;
foo.call({id: 42});

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);
    setInterval(function () {
        this.s2++;
    }, 1000)
}
/*var timer=new Timer();
 setTimeout(()=>log('s1:',timer.s1),3100);//3
 setTimeout(()=>log('s2:',timer.s2),3100);//0*/

var handler = {
    id: '1',
    init: function () {
        document.addEventListener('click', event => this.dosomething(event.type), false)
    },
    dosomething: function (type) {
        console.log('Handling' + type + 'for' + this.id);
    }
}
/*尾递归*/
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

log(factorial(5));
function factorial1(n, total) {
    if (n === 1) return total;
    return factorial1(n - 1, n * total);
}
log(factorial1(6, 1));
//
function Fibonacci (n) {
    if ( n <= 1 ) {return 1};

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

/*
Fibonacci(10) // 89
Fibonacci(100) // 堆栈溢出
Fibonacci(500) // 堆栈溢出*/
function Fibonacci2(n,ac1=1,ac2=2){
    if(n<=1){return ac2};
    return Fibonacci2(n-1,ac2,ac1+ac2);
}
log(Fibonacci2(100)) // 573147844013817200000
Fibonacci2(1000) // 7.0330367711422765e+208
Fibonacci2(10000) // Infinity