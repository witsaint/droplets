import axios from 'axios';
import router from '../router';
import Base from '../layout';

const conf = {
  js: '/main.js',
  host: '//localhost:8081',
};

const register = (addRoute) => {
  const moduleObj = window.branha && window.branha;
  if (!moduleObj) return false;
  const moduleAConstructor = moduleObj.default;
  const module = moduleAConstructor();
  const { router: moduleRouter } = module;
  console.info('moduleObj', module);
  addRoute && router.addRoutes([{
    path: '/module1',
    component: Base,
    children: moduleRouter,
  }]);
};

const innerScript = () => {
  const jsDom = document.createElement('script');
  jsDom.setAttribute('type', 'text/javascript');
  jsDom.setAttribute('src', `${conf.host}${conf.js}`);
  document.body.appendChild(jsDom);

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
};

innerScript();

window.hotReloadSubApp = () => {
  register();
};
