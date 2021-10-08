import Vue from 'vue'

import apollo from './apollo/apollo'
import './bootstrap'
import VueContext from 'vue-context';

import App from '../App.vue'
import 'vue-context/dist/css/vue-context.css';

Vue.config.productionTip = false

new Vue({
    components: {
        VueContext
    },
    apolloProvider: apollo,
    render: h => h(App),
}).$mount('#app')