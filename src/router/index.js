import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/layout/index.vue';

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/HomeView.vue'),
        name: 'homeView',
        meta: {
          title: '首页'
        },
      },
      {
        path: 'about',
        component: () => import('@/views/aboutView.vue'),
        name: 'aboutView',
        meta: {
          title: '关于',
          keepAlive: true
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: constantRoutes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
