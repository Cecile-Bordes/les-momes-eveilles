import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/app.scss'

import App from './App.vue'


// import ES6 style
import {VueMasonryPlugin} from 'vue-masonry';

// or using CJS 
// const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin

Vue.use(VueMasonryPlugin)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
