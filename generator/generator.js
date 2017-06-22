/**
 * Created by Administrator on 2017/6/22 0022.
 */
const log = require('../log');
/*
 * Generator 函数有多种理解角度。从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

 形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
 *
 * */
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }

function* f() {
    console.log('执行了');
}
var generator = f();
setTimeout(function () {
    generator.next()
},2000)