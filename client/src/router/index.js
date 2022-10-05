import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageView from '../views/HomePageView.vue'

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
    name: 'HomePageView',
    component: HomePageView,
  },
  {
    path: '/beneficiaries',
    name: 'BeneficiariesView',
    component: () =>
      import(
        /* webpackChunkName: "Beneficiaries" */ '../views/BeneficiariesView.vue'
      ),
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ '../views/AboutView.vue'),
  },
  {
    path: '/add',
    name: 'AddBeneficiaryView',
    beforeEnter: guardRoutes,
    component: () =>
      import(
        /* webpackChunkName: "AddBeneficiaries" */ '../views/AddBeneficiaryView.vue'
      ),
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/LoginView.vue'),
  },
  {
    path: '/unauthorized',
    name: 'UnauthorizedPageView',
    component: () =>
      import(
        /* webpackChunkName: "Unatuhorized" */ '../views/UnauthorizedPageView.vue'
      ),
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: () =>
      import(
        /* webpackChunkName: "PageNotFound" */ '../views/PageNotFoundView.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
