var emptyObj = Object.freeze({});

var _toString = Object.prototype.toString;

function toString(val) {
    return val == null ?
        "" :
        typeof val === 'object' ?
        JSON.stringify(val, null, 2) :
        String(val)
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 检测对象不是原型链上的熟悉
 * @param {*} obj 
 * @param {*} key 
 */
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key)
}

/**
 * bind()
 * @param {*} fn 
 * @param {*} ctx 
 */
function polyFillBind(fn, ctx) {
    function boundFn(a) {
        var l = arguments.length;
        return l ?
            l > 1 ?
            fn.apply(ctx, arguments) :
            fn.call(ctx, a) :
            fn.call(ctx)
    }
    boundFn._length = fn.length;
    return boundFn;
}

function nativeBind(fn, ctx) {
    return fn.bind(ctx);
}

var bind = Function.prototype.bind ?
    nativeBind :
    polyFillBind;


console.log(undefined ==null)
console.log('[object Object]'.slice(8,-1))