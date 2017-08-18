/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/18
 * Time: 14:27
 */


// var Event = function () {
//     var a='aa',b='bb';
//
//     var _say=function() {
//         console.log('say')
//     }
//     var _hello=function() {
//         console.log('hello')
//     }
//     return {
//         say:_say,
//         hello:_hello
//     }
// }
// export default Event;
var Event={
    a:'aa',
    b:'bb',
    say:function () {
        console.log('aa')
    },
    hello:function () {
        console.log('hello')
    }
}
export default Event;