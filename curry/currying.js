/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/11
 * Time: 8:51
 */

function curry(fn) {
    return function curried() {
        var args = [].slice.call(arguments);
        return args.length >=fn.length?
            fn.apply(null,args):
            function () {
                var rest = [].slice.call(arguments);
                return curried.apply(null,args.concat(rest));
            }
    }
}