import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
Vue.use(require('vue-moment'))

Vue.config.productionTip = false
axios.defaults.baseURL ='http://192.168.99.100'
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
}).$mount('#app')
