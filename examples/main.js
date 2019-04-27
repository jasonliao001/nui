import Vue from 'vue';
import App from './app.vue';
import DemoBlock from './components/demoBlock.vue';
import router from './router';
import Nui from '../src/index';
import '../src/styles/index.css';
Vue.component('demo-block', DemoBlock);
Vue.use(Nui);

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
