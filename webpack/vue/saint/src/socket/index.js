import axios from 'axios';
import router from '../router';
import Base from '../layout';

const branchMap = [
  {
    name: 'brancha',
    scripts: ['main.js'],
    styles: [],
    host: '//127.0.0.1:8081',
  },
];

const register = (moduleName) => {
  const moduleObj = window[moduleName];
  if (!moduleObj) return false;
  const moduleAConstructor = moduleObj.default;
  const module = moduleAConstructor();
  const { router: moduleRouter } = module;
  console.info('moduleRouter', moduleRouter);
  router.addRoutes([{
    path: '/module1',
    component: Base,
    children: moduleRouter,
  }]);
};

const domOnLoad = (dom, callback) => {
  if (dom.readyState) {
    dom.onreadystatechange = function () {
      const rs = dom.readyState;
      if (rs === 'loaded' || rs === 'complete') {
        callback();
      }
    };
  } else {
    dom.addEventListener('load', callback, false);
  }
};

/* 插入脚本 */
const innerScript = (host, js) => new Promise((resolve, reject) => {
  const jsDom = document.createElement('script');
  jsDom.setAttribute('type', 'text/javascript');
  jsDom.setAttribute('src', `${host}/${js}`);
  document.body.appendChild(jsDom);

  domOnLoad(jsDom, resolve);
});

/* 插入样式 */
const innerStyles = (host, css) => new Promise(((resolve, reject) => {
  const cssDom = document.createElement('link');
  cssDom.setAttribute('type', 'text/javascript');
  cssDom.setAttribute('rel', 'stylesheet');
  cssDom.setAttribute('src', `${host}/${css}`);
  document.head.appendChild(cssDom);

  domOnLoad(cssDom, resolve);
}));

/* 注册子项目 */
const registrySubApp = (registerObj) => {
  console.info('register sub app');
  const {
    name, scripts, styles, host,
  } = registerObj;
  const curScriptsLoad = scripts.map((js) => innerScript(host, js));
  Promise.all(curScriptsLoad).then(() => {
    register(name);
  });
};

window.hotReloadSubApp = () => {
  // register();
};

window.registrySubApp = registrySubApp;

// branchMap.forEach((branch) => registrySubApp(branch));
/* 从文件服务获取配置进行加载各个分支项目资源 */
axios.get('http://127.0.0.1:8082/build.json').then((conf) => {
  const { status, data } = conf;
  if (status === 200) {
    Object.keys(data).forEach((branchName) => {
      registrySubApp(data[branchName]);
    });
  }
});
