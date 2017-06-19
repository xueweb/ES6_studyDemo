/**
 * Created by Administrator on 2017/6/19 0019.
 */

/*数组的解构赋值*/

let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(c);

/*如果解构不成功，变量的值就等于undefined*/
let [foo] = [];
let [bar, fo] = [1];
console.log(foo);
console.log(bar);

/*解构赋值允许默认值*/
var [aa = true] = [];

//let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
//let [x, y = 'b'] = ['a', 'undefined'];


//let [x = y, y = 1] = []; //ReferenceError

/*对象的解构赋值*/
//结构不仅可以用于数组还可以用于对象
var {fooo, barr} = {fooo: 'aaa', barr: 'bar'};
console.log(fooo, barr)

var {obj: o} = {obj: 'obj', nb: 'nb'}
console.log(o);

/*字符串的解构赋值*/
let {length: len} = 'hello';
console.log(len)

/*函数的解构赋值*/
//[[1, 2], [3, 4]].map(([a, b]) => a + b);
var arr = [1, 2, 3];
var ar=arr.map((x, y) => x + y)
console.log(arr,ar)
