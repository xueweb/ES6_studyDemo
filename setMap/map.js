/**
 * Created by Administrator on 2017/6/21 0021.
 */
var log = require('../log');

const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
log(map.size)
log(map.has('name'));
log(map.get('title'))

/*
 * 不仅仅是数组，任何具有 Iterator 接口的数据结构都可以当作Map构造函数的参数。这就是说，Set和Map都可以用来生成新的 Map。
 * */
const set = new Set([
    ['foo', 1],
    ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3

