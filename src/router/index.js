import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/layout/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/HomeView.vue'),
          meta: {},
        },
        {
          path: 'about',
          component: () => import('@/views/aboutView.vue'),
          meta: {},
        },
      ],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
