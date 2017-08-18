/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/18
 * Time: 13:57
 */
import {addClass,removeClass} from "./dom"
import * as win from "./win"
import Event from "./event"
console.log('export index');
addClass();
removeClass();
console.log(win.iswin())
Event.say();