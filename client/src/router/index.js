import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageView from '../views/HomePageView.vue'

import store from '@/store'

Vue.use(VueRouter)

function guardRoutes(to, from, next) {
  if (store.state.user.loggedIn) {
    next()
  } else {
    next('/unauthorized')
  }
}

function guardIfAlreadyLoggedIn(to, from, next) {
  if (to.name !== 'LoginView' && !store.state.user.loggedIn) {
    next({ name: 'LoginView' })
  } else {
    next()
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
    beforeEnter: guardRoutes,
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
        /* webpackChunkName: "AddBeneficiaries" */ '../views/BeneficiaryFormView.vue'
      ),
  },
  {
    path: '/view/survey/:id',
    name: 'ViewBeneficiaryView',
    beforeEnter: guardRoutes,
    component: () =>
      import(
        /* webpackChunkName: "AddBeneficiaries" */ '../views/BeneficiaryFormView.vue'
      ),
  },
  {
    path: '/edit/survey/:surveyNo',
    name: 'EditBeneficiaryView',
    beforeEnter: guardRoutes,
    component: () =>
      import(
        /* webpackChunkName: "AddBeneficiaries" */ '../views/BeneficiaryFormView.vue'
      ),
  },
  {
    path: '/login',
    name: 'LoginView',
    beforeEnter: guardIfAlreadyLoggedIn,
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
