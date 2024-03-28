import { createRouter, createWebHistory } from 'vue-router';
import { getToken } from '@/utils/auth';
import login from './routes/login';
import home from './routes/home';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }

    return { top: 0 };
  },
  routes: [
    // main layout
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layouts/LayoutMain.vue'),
      children: [
        ...home,
      ],
      meta: {
        private: true,
      },
    },

    // full layout
    {
      path: '/',
      name: 'full-layout',
      component: () => import('@/layouts/LayoutFull.vue'),
      children: [
        ...login,
      ],
    },

    // 404
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
});

router
  .beforeEach((to, _, next) => {
    const isLoggedIn = getToken();

    const { meta } = to;

    if (meta.redirectIsLoggedIn && isLoggedIn) {
      next('/');
      return;
    }

    if (meta.private && !isLoggedIn) {
      next('/auth');
      return;
    }

    next();
  });

export default router;
