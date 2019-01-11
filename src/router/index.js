import Vue from 'vue'
import Router from 'vue-router'

import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MSite',
      name: 'MSite',
      component: MSite,
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: MSite
    }
  ]
})
