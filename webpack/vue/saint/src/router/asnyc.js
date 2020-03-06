import axios from 'axios';
import router from './index';
// http://localhost:8081/main.eab82ff92bedbe95b690.js
const conf = {
  js: '/main.0e777270d6b890b692cb.js',
  host: '//localhost:8081',
};

const jsDom = document.createElement('script');
jsDom.setAttribute('type', 'text/javascript');
jsDom.setAttribute('src', `${conf.host}${conf.js}`);
document.body.appendChild(jsDom);

const register = () => {
  const moduleObj = window.branha && window.branha;
  const moduleAConstructor = moduleObj.default;
  const module = moduleAConstructor();
  const { router: moduleRouter } = module;
  console.info('module', module);
  router.addRoutes(moduleRouter);
};
if (jsDom.readyState) {
  jsDom.onreadystatechange = function () {
    const rs = jsDom.readyState;
    if (rs === 'loaded' || rs === 'complete') {
      register();
    }
  };
} else {
  jsDom.addEventListener('load', register, false);
}
