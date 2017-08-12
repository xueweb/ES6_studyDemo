/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/12
 * Time: 14:39
 */

/**
 *
 * @param target
 * @param mixin
 */
export function mixin(target,mixin) {
    for(var key in mixin){
        if(target[key] !== mixin[key]){
            target[key] = mixin[key]
        }
    }
}

export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isArray(obj) {
    return Array.isArray(obj)
}

export function augment(target,proto) {
    target.__proto__=proto
}

export function define(obj,key,val){
    Object.defineProperty(obj,key,{
        value:val,
        enumerable:false,
        writable:true,
        configurable:true
    })
}

export function def(obj,key,val,enumerable) {
    Object.defineProperty(obj,key,{
        value:val,
        enumerable:!!enumerable,
        writable:true,
        configurable:true
    })
}