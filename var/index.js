/**
 * Created by Administrator on 2017/6/19 0019.
 */

/*数组的结构赋值*/

let [a,b,c] = [1,2,3];
console.log(a);
console.log(c);

/*如果结构不成功，变量的值就等于undefined*/
let[foo]=[];
let [bar,fo]=[1];
console.log(foo);
console.log(bar);

/*结构赋值允许默认值*/
var [aa=true]=[];

//let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
//let [x, y = 'b'] = ['a', 'undefined'];


//let [x = y, y = 1] = []; //ReferenceError

/*对象的结构赋值*/
