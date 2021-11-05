require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import burger from './modules/burger'
import lazy from './modules/lazy'
import tabs from './modules/tabs'
window.addEventListener('DOMContentLoaded', (e) => {
    burger()
    lazy()
    tabs()
})