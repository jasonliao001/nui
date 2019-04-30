import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  // mode: 'history', // push update can not use history
  routes: [
    {
      path: '/',
      name: 'index'
      // component: () => import('./docs/message.md')
    },
    {
      path: '/docs/icon',
      component: () => import('./docs/icon.md')
    }
  ]
});
