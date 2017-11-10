let obj = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
    d: {
        a: 'da',
        b: 'db'
    }
}
let jsonStrObj = JSON.stringify(obj);
console.log(jsonStrObj);
let jsonObj = JSON.parse(jsonStrObj);
console.log(jsonObj);
jsonObj.d.a = 'daa';
console.log(jsonObj)
console.log(obj)