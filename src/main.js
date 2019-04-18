import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Hello from './components/HelloWorld'
import About from './components/About'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
}).$mount('#app')
