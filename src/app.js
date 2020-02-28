console.log("Hello");
console.log("WORLD");

import './css/main.css';
import './css/m2.scss';
import Vue from 'vue';
import e from './e.vue';
import * as lib from './lib'

console.log(lib.f('3alsdkfj'));

var app = new Vue({
    el: '#app',
    render: h => h(e),
    data: {
        message: 'Hello Vue!'
    }

});