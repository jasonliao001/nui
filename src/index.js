import Message from './components/Message';
const components = {
  Message
};
const install = function(Vue, opts = {}) {
  if (install.installed) return;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  ...components
};

module.exports.default = module.exports = API; // eslint-disable-line no-undef
