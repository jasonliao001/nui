import Message from './components/message';
import Icon from './components/icon';
import { Row, Col } from './components/grid';
import locale from './locale';
const prettier = {
  Message,
  Icon,
  Row,
  Column: Col
};
const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  Object.keys(prettier).forEach(key => {
    Vue.component(key, prettier[key]);
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
