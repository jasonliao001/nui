import Message from './components/message';
import Icon from './components/icon';
import { Row, Col } from './components/grid';
import Layout from './components/layout';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Sider from './components/sider';
import locale from './locale';
const prettier = {
  Message,
  Icon,
  Row,
  Column: Col,
  Layout: Layout,
  Lcontent: Content,
  Lheader: Header,
  Lfooter: Footer,
  Lsider: Sider
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
