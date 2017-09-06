/**
 * Created by 29912 on 2017/9/6.
 */


var text = 'cat, bat, sat, fat';
// 使用/at/g 在全局中匹配at，并用ond进行替换
var result = text.replace(/at/g, 'ond');
// cond, bond, sond, fond
console.log(result);


var result1 = text.replace(/(.at)/g, '$($1)');
// $(cat), $(bat), $(sat), $(fat)
console.log(result1);

// 函数的参数分别为：当前匹配的字符，当前匹配字符的位置，原始字符串
var result2 = text.replace(/at/g, function(match, pos, originalText) {
    console.log(match + ' ' + pos+originalText);
    return 'ond'
});
console.log(result2);