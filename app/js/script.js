require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import burger from './modules/burger'
import lazy from './modules/lazy'
import tabs from './modules/tabs'
import slider from './modules/slider'
import timer from './modules/timer'
import filtermenu from './modules/filtermenu'
window.addEventListener('DOMContentLoaded', (e) => {
    burger()
    lazy()
    tabs()
    slider()
    timer()
    filtermenu()
})