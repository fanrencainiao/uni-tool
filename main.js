import Vue from 'vue'
import App from './App'

import tmVuetify from "./tm-vuetify";
Vue.use(tmVuetify)
import common from '@/common/common.js';
Vue.prototype.common = common;

Vue.config.productionTip = false


App.mpType = 'app'
var app = new Vue({

    ...App
})

app.$mount()

