import Message from './components/message';
import Icon from './components/icon';
const nui = {
  Message,
  Icon
};

const install = function(Vue, opts = {}) {
  Object.keys(nui).forEach(key => {
    Vue.component(key, nui[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  version: process.env.VERSION,
  install
};

module.exports.default = module.exports = API;
