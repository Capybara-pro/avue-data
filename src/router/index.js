import Vue from "vue"
import Router from "vue-router"
Vue.use(Router);

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/main')
    },
    {
      path: '/detail',
      component: () => import('@/views/detail')
    }
  ]
});
export default vueRouter;