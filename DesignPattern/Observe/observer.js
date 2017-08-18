/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/18
 * Time: 13:32
 */

var Event = function () {
    var clientList=[],
        lsiten,
        trigger,
        remove,
        listen=function (key,fn) {
            if(!clientList[key]){
                clientList[key].push(fn);
            }
        };
}