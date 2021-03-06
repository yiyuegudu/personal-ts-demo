import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // {
  //   path: '/basicdatatype',
  //   name: 'Basicdatatype',
  //   component: () => import('@/views/Basicdatatype.vue'),
  // },
  {
    path: '/functionDemo',
    name: 'FunctionDemo',
    component: () => import('@/views/FunctionDemo.vue'),
  },
  {
    path: '/tsClass',
    name: 'TsClass',
    component: () => import('@/views/TsClass.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
