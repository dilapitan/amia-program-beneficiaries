import Vue from 'vue'
import VueRouter from 'vue-router'
import BeneficiariesView from '../views/BeneficiariesView.vue'

Vue.use(VueRouter)

function guardRoutes(to, from, next) {
  let isLoggedIn = localStorage.getItem('token')

  if (isLoggedIn) {
    next()
  } else {
    next('/unauthorized')
  }
}

const routes = [
  {
    path: '/',
    name: 'BeneficiariesView',
    component: BeneficiariesView,
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/add',
    name: 'AddBeneficiaryView',
    beforeEnter: guardRoutes,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddBeneficiaryView.vue'),
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
  {
    path: '/unauthorized',
    name: 'UnauthorizedPageView',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/UnauthorizedPageView.vue'
      ),
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PageNotFoundView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
