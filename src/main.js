import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inicio from './components/Inicio.vue'
import Heroes from './components/Heroes.vue'
import Villanos from './components/Villanos.vue'
import Agendas from './components/Agendas.vue'
import Patrocinadores from './components/Patrocinadores.vue'
import Luchas from './components/Luchas.vue'
Vue.use(VueRouter)
const routes = [
  {path:'/inicio', component:Inicio},
  {path:'/', component:Inicio},
  {path:'/heroes', component:Heroes},
  {path:'/villanos', component:Villanos},
  {path:'/agendas', component:Agendas},
  {path:'/patrocinadores', component:Patrocinadores},
  {path:'/luchas', component:Luchas},
]
const router= new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

