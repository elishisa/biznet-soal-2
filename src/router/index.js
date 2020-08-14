import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import(/* webpackChunkName: "about" */ '../views/people.vue')
  },
  {
    path: '/planet',
    name: 'Planet',
    component: () => import(/* webpackChunkName: "about" */ '../views/planet.vue')
  },
  {
    path: '/film',
    name: 'Film',
    component: () => import(/* webpackChunkName: "about" */ '../views/film.vue')
  },
  {
    path: '/vehicle',
    name: 'Vehicle',
    component: () => import(/* webpackChunkName: "about" */ '../views/vehicle.vue')
  },
  {
    path: '/starship',
    name: 'Starship',
    component: () => import(/* webpackChunkName: "about" */ '../views/starship.vue')
  },
  {
    path: '/species',
    name: 'Species',
    component: () => import(/* webpackChunkName: "about" */ '../views/species.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
