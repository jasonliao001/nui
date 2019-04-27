import Message from './components/message';
const nui = {
  Message
};

const install = function(Vue, opts = {}) {
  Object.keys(nui).forEach(key => {
    Vue.component(key, nui[key]);
  });
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  version: process.env.VERSION,
  install,
  ...nui
};

module.exports.default = module.exports = API;
