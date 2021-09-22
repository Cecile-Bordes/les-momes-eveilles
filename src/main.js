import Vue from 'vue'
//import './assets/app.scss'

import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './Routes'

// import ES6 style
import {VueMasonryPlugin} from 'vue-masonry';
import './assets/sass/tailwind.css'

// or using CJS 
// const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin

Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
