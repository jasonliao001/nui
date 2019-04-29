import Vue from 'vue';
import Router from 'vue-router';
import message from './docs/message.md';

Vue.use(Router);
// 上传到github不能使用history模式
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: message
      // component: () => import('./docs/message.md')
    }
  ]
});
