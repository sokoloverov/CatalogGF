import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/about',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/gfgreen', redirect: '/gfgreen/sweets',
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
    path: '/goodfood', redirect: '/goodfood/nuts',
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
    path: '/nutberry', redirect: '/nutberry/nuts',
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
    path: '/vival', redirect: '/vival/coconutsweets',
    name: 'Виваль',
    component: () => import('../views/Vival.vue'),
    children: [
      {
        path: 'coconutsweets',
        name: 'Виваль кокосовые конфеты',
        component: () => import('../views/VivalCoconut.vue')
      },
      {
        path: 'dessert',
        name: 'Виваль десертные конфеты',
        component: () => import('../views/VivalDesserts.vue')
      },
      // {
      //   path: 'dragee',
      //   name: 'Виваль драже',
      //   component: () => import('../views/VivalDragee.vue')
      // },
      {
        path: 'fruitsweets',
        name: 'Виваль фруктовые конфеты',
        component: () => import('../views/VivalFruits.vue')
      },
      {
        path: 'jelly',
        name: 'Виваль фруктово-желейные конфеты',
        component: () => import('../views/VivalJelly.vue')
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
