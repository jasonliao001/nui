import Vue from 'vue';
import Router from 'vue-router';
import navigate from './nav.config';
const routesList = [
  {
    path: '/',
    name: 'index'
  }
];
navigate.forEach(item => {
  if (item.groups && item.groups.length) {
    item.groups.forEach(child => {
      child.list.forEach(component => {
        let name = component.path.split('/')[1];
        routesList.push({ path: component.path, component: () => import(`./docs/${name}.md`) });
      });
    });
  }
});
Vue.use(Router);

export default new Router({
  // mode: 'history', // push update can not use history
  routes: routesList
});
