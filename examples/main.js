import Vue from 'vue';
import App from './app.vue';
import DemoBlock from './components/demoBlock.vue';
import router from './router';
import Prettier from '../src/index';
import 'highlight.js/styles/github.css'; // for hightlight.js
import '../src/styles/index.less';
import './demoStyle.less';
Vue.component('demo-block', DemoBlock);
Vue.use(Prettier);

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
