require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vue.component('home', require('./components/Home.vue').default);

import App from './views/App'
import Home from './views/Home'
 import Link from './views/Link'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:short',
            name: 'link',
            component: Link,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
