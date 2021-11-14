import { createRouter, createWebHashHistory } from 'vue-router';
const Charts = () => import('@/views/Graph/Charts.vue');
const Dialog = () => import('@/views/Graph/index.vue');
const Mall = () => import('@/views/Mall/Home.vue');
const User = () => import('@/views/User/index.vue');
// import Charts from '../views/graph/Charts';
// const Charts = () => import('../views/graph/Charts.vue')
const Excel = () => import('@/views/Excel/index.vue');
// 配置路由
const routes = [
  { path: '/', redirect: '/user' },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/dialog',
    component: Dialog,
  },
  {
    path: '/mall',
    component: Mall,
  },
  {
    path: '/excel',
    component: Excel,
  },
  {
    path: '/user',
    component: User,
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
