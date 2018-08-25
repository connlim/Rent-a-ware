import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Product from './views/Product.vue'
import Messaging from './views/Messaging.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('./views/About.vue')
    },
    {
      path: '/messaging',
      name: 'messsaging',
      component: Messaging
    },
    {
      path: '/search/:query',
      name: 'search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
