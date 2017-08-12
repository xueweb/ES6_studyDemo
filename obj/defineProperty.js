/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/12
 * Time: 10:11
 */

/**
 * Object.defineProperty()
 * 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，
 * 并返回这个对象。
 * Object.defineProperty(obj, prop, descriptor)
 * **/

var o ={};

Object.defineProperty(o,'a',{
    value:'tesa',
    writable:true,
    enumerable:true,
    configurable:true
})

function Archiver() {
    var temperature = null;
    var archive = [];

    Object.defineProperty(this,'temperature',{
        get:function () {
            console.log('get!');
            return temperature;
        },
        set:function (value) {
            temperature =value;
            archive.push({val:temperature});
        }
    });

    this.getArchive  = function () {
        return archive;
    }
}

var arc = new Archiver();
console.log(arc.temperature);
arc.temperature=11;
arc.temperature=13;

console.log(arc.getArchive());