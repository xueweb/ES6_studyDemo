/**
 * Created by helti on 2017/9/12.
 */
var A = {
    a: 'a',
    b: 'b'
}
var B = A;
B.a = 'aa'

console.log(B)
console.log(A)

A.b='bb';
console.log(A)
console.log(B)
