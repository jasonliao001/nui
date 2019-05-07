import Message from './components/message';
import Icon from './components/icon';
import locale from './locale';
const nui = {
  Message,
  Icon
};
const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  Object.keys(nui).forEach(key => {
    Vue.component(key, nui[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  locale: locale.use,
  i18n: locale.i18n,
  version: process.env.VERSION,
  install
};

module.exports.default = module.exports = API;
