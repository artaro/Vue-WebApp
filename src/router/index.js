import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import About from '../components/About.vue'

Vue.use(BootstrapVue);

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) =>{
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router