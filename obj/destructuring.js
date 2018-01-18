/**
 * 对象的解构与数组有一个重要的不同。
 * 数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
 */

let {foo,bar} = {foo:'aaa',bar:'bbb'};


let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

/**
 * 如果变量名与属性名不一致，必须写成下面这样。
 */
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'

/**
 * 与数组一样，解构也可以用于嵌套结构的对象。
 */
let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
  
  let { p: [x, { y }] } = obj;
  x // "Hello"
  y // "World"

  /**
   * 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
   */
  let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError