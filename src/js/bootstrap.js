import Vue from "vue";

import {BootstrapVue, IconsPlugin, BNavbar, BCard, BTable } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.component('b-card', BCard)
Vue.component('b-navbar', BNavbar)
Vue.component('b-table', BTable)