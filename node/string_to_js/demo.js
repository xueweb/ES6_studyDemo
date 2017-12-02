/**
 * Created by helti on 2017/12/2.
 */
var string_to_js = require('./index');
var fs = require('fs'),
    read=fs.readFileSync;

var html = read('./tpl.html', 'utf8');
var js = string_to_js(html);
console.log(js);