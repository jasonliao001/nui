import Vue from 'vue';
import App from './app.vue';
import DemoBlock from './components/demoBlock.vue';
import router from './router';
import Nui from '../src/index';
import 'highlight.js/styles/Agate.css'; // for hightlight.js
import '../src/styles/index.less';
import './demoStyle.less';
Vue.component('demo-block', DemoBlock);
Vue.use(Nui);

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
