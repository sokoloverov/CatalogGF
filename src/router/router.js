import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gfgreen',
    name: 'GF Green',
    component: () => import('../views/GFGreen.vue'),
    children: [
      {
        path: 'sweets',
        name: 'GF Green конфеты',
        component: () => import('../views/GFGreenSweets.vue')
      },
      {
        path: 'driedfruits',
        name: 'GF Green сухофрукты',
        component: () => import('../views/GFGreenDfruits.vue')
      },
      {
        path: 'dragee',
        name: 'GF Green драже',
        component: () => import('../views/GFGreenDragee.vue')
      },
    ]
  },
  {
    path: '/goodfood',
    name: 'GOOD FOOD',
    component: () => import('../views/GoodFood.vue'),
    children: [
      {
        path: 'nuts',
        name: 'GOOD FOOD орехи',
        component: () => import('../views/GoodFoodNuts.vue')
      },
      {
        path: 'driedfruits',
        name: 'GOOD FOOD сухофрукты',
        component: () => import('../views/GoodFoodDriedfruits.vue')
      },
      {
        path: 'mix',
        name: 'GOOD FOOD смеси',
        component: () => import('../views/GoodFoodMix.vue')
      },
      {
        path: 'dragee',
        name: 'GOOD FOOD драже',
        component: () => import('../views/GoodFoodDragee.vue')
      },
    ]
  },
  {
    path: '/nutberry',
    name: 'NUTBERRY',
    component: () => import('../views/Nutberry.vue'),
    children: [
      {
        path: 'nuts',
        name: 'NUTBERRY орехи',
        component: () => import('../views/NutberryNuts.vue')
      },
      {
        path: 'driedfruits',
        name: 'NUTBERRY сухофрукты',
        component: () => import('../views/NutberryDriedfruits.vue')
      },
      {
        path: 'mix',
        name: 'NUTBERRY смеси',
        component: () => import('../views/NutberryMix.vue')
      },
      {
        path: 'fruitbar',
        name: 'NUTBERRY фруктовые батончики',
        component: () => import('../views/NutberryFruitBar.vue')
      },
      {
        path: 'nutbar',
        name: 'NUTBERRY орехово-фруктовые батончики',
        component: () => import('../views/NutberryNutBar.vue')
      },
      {
        path: 'corn',
        name: 'NUTBERRY попкорн',
        component: () => import('../views/NutberryCorn.vue')
      },
      {
        path: 'pasta',
        name: 'NUTBERRY ореховая паста',
        component: () => import('../views/NutberryPasta.vue')
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        behavior: 'smooth',
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router
