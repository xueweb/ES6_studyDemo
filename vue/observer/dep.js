/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/12
 * Time: 14:27
 */

let uid =0;
export default class Dep {
    constructor(){
        this.id=uid++;
        this.subs=[];
    }
    addSub(sub){
        this.subs.push(sub)
    }
    notify(){
        this.subs.forEach(sub=>sub.update())
    }
}
Dep.target=null;