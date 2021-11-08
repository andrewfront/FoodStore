require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import burger from './modules/burger'
import lazy from './modules/lazy'
import tabs from './modules/tabs'
import slider from './modules/slider'
import timer from './modules/timer'
import filtermenu from './modules/filtermenu'
import updateYear from './modules/updateyear'
import map from './modules/map'
import showcart from './modules/showcart'
import headerfixed from './modules/headerfixed'
import Inputmask from "inputmask"
import sendmail from './modules/sendmail'
import { justvalidate } from "just-validate/dist/js/just-validate";
window.addEventListener('DOMContentLoaded', (e) => {
    burger()
    lazy()
    tabs()
    slider()
    timer()
    filtermenu()
    updateYear()
    map()
    showcart()
    headerfixed()
    sendmail()
})