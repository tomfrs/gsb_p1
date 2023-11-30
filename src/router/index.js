import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MedecinView from '../views/MedecinView.vue'
import RapportsView from '../views/RapportsView.vue'
import accueil from '../views/AccueilView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/medecin',
    name: 'medecin',
    component: MedecinView
  },
  {
    path: '/rapports',
    name : 'rapports',
    component: RapportsView
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: accueil
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
