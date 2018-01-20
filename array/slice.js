/**
 * Created by 29912 on 2017/9/6.
 */
/*
 * slice()
 * */
function argArgument(a, b) {
    var sliceArg = Array.prototype.slice.call(arguments, 1);
    console.log(sliceArg);

}
argArgument('a', 'b', 'c')
function slice(array, start, end) {
    let length = array == null ? 0 : array.length;
    if (!length) {
        return []
    }
    start = start == null ? 0 : start;
    end = end === undefined ? length : end;

    if(start < 0){
        start = -start > length ? 0:(length+start)
    }
    end = end>length ? length :end
    if(end < 0){
        end+=length
    }
    length = start > end ? 0 : ((end - start) >>> 0)
    start >>>0;
    
    let index = -1;
    const result = new Array(length);
    while(++index < length) {
        result[index] = array[index + start]
    }
    return result;
}

let slice_b = slice([1,2,3,4,5],1,2);
console.log(slice_b);
module.exports=slice;