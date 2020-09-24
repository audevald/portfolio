import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./components/Accueil.vue').default },
    { path: '*', redirect: '/' }
  ]
})

new Vue({
  router,
  VueSmoothScroll,
  render: h => h(App),
}).$mount('#app')
