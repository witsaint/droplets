import axios from 'axios';

axios.defaults.timeout = 5000;
axios.interceptors.request.use(
  config => {
    const auth = localStorage.getItem('auth');
    const reConfig = { ...config };
    if (auth) {
      reConfig.headers.authorization = auth;
    }
    if (config.method.toLowerCase() !== 'get' && !!config.data) {
      // reConfig.data = JSONbig.stringify(config.data);
      reConfig.headers[config.method.toLowerCase()]['Content-Type'] =
        'application/json';
    }
    reConfig.headers.reqTime = Date.now();
    return reConfig;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => {
    const { url } = response.config;
    const stateCode = response.data.code;
    const totalTime = Date.now() - response.config.headers.reqTime;
    trackResponse({ url, totalTime, busCode: stateCode });
    const isHttpSuccess =
      (response.status && response.status >= 200 && response.status < 300) ||
      response.status === 304;
    if (!isHttpSuccess) {
      return null;
    }
    return response;
  },
  error => Promise.reject(error)
);
