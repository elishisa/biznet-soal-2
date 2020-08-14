import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.scss';



Vue.use(BootstrapVue)


Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



