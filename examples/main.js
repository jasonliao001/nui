import Vue from 'vue';
import App from './app.vue';
import Nui from '../src/index';

Vue.use(Nui);

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
