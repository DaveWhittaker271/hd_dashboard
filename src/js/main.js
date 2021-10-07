import Vue from 'vue'

import apollo from './apollo/apollo'
import './bootstrap'

import App from '../App.vue'

Vue.config.productionTip = false

new Vue({
    apolloProvider: apollo,
    render: h => h(App),
}).$mount('#app')