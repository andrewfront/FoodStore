require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import burger from './modules/burger'
import lazy from './modules/lazy'
import tabs from './modules/tabs'
import slider from './modules/slider'
import timer from './modules/timer'
import updateYear from './modules/updateyear'
import map from './modules/map'
import showcart from './modules/showcart'
import headerfixed from './modules/headerfixed'
import Inputmask from "inputmask"
import sendmail from './modules/sendmail'
import { justvalidate } from "just-validate/dist/js/just-validate";
import getmenu from './modules/getmenu'
window.addEventListener('DOMContentLoaded', (e) => {
    burger()
    lazy()
    tabs()
    slider()
    timer()
    updateYear()
    map()
    showcart()
    headerfixed()
    sendmail()
    getmenu()
})