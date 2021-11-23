import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import Home from './components/home.vue'
import Privacy from './components/privacy.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/privacy', component: Privacy },
]

const router = new VueRouter({
  routes,
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
