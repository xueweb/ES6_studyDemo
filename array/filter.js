
Array.prototype.filter = function (callback) {
    if (this === void 0 || this === null)
        throw new TypeError();

    /**
     * Object构造函数为给定值创建一个对象包装器。如果给定值是 null 或 undefined，将会创建并返回一个空对象，否则，将返回一个与给定值对应类型的对象。
     */
    var t = Object(this);

    /**
     * {}.length===undefined
     * undefined >>> 0 =>0
     */
    var len = t.length >>> 0;
    if (typeof callback !== 'function')
        throw new TypeError();

    var res = [];
    console.log('f')
    console.log(arguments.length)
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    console.log(thisArg)
    for (var i = 0; i < len; i++) {
        if (i in t) {
            var val = t[i];
            if (callback.call(thisArg, val, i, t))
                res.push(val)
        }
    }
    return res;
}
let arr = [1, 2, 3, 4, 5, 11, 11, 2, 22, 111, 12, 13]

let filter_arr = arr.filter((value, index, arr) => {
    return value > 10
})

console.log(filter_arr)
// var testarr = [1, 2]
// var ot = Object(testarr);
// console.log(ot)
// console.log('###')
// console.log(Object(null).length)
// console.log({ a: 1 }.length)
