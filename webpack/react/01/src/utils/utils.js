/* eslint-disable */
import moment from 'moment';
import URLSearchParams from 'url-search-params';

export const formatTime = time => {
  if (time) {
    return moment(Number(time)).format('YYYY-MM-DD HH:mm');
  }
  return '';
};
export const formatInstallmentTime = time => {
  if (time) {
    return moment(Number(time)).format('YYYY-MM-DD');
  }
  return '';
};

export const strSubChar = (str, n) => {
  const _len = strLength(str);
  if (_len > n) {
    const _newLen = Math.floor(n / 2);
    const _strLen = str.length;
    let _newStr = '';
    for (let i = _newLen; i <= _strLen; i++) {
      const tmpStr = str.substr(0, i);
      if (strLength(tmpStr) > n) {
        return `${_newStr}..`;
        break;
      }
      _newStr = tmpStr;
    }
  } else {
    return str;
  }
};
export const strLength = str => {
  let sum = 0;
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 0 && str.charCodeAt(i) <= 255) {
        sum = sum + 1;
      } else {
        sum = sum + 2;
      }
    }
    return sum;
  }
};
export const hiddenMobile = mobile => {
  let hiddenText = mobile.substr(3, 4);
  return mobile.replace(hiddenText, '****');
};
export const getQueryParam = (history, paramName) => {
  const paramsString = history.location.search.substring(1);
  const searchParams = new URLSearchParams(paramsString);
  return searchParams.get(paramName);
};
export const isWxBrowser = () => {
  return /micromessenger/.test(navigator.userAgent.toLowerCase());
};
export const isIos = () => {
  const userAgent = window.navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(userAgent);
};
export const pieceUrlParams = (history, params = {}) => {
  const paramsString = history.location.search.substring(1);
  const searchParams = new URLSearchParams(paramsString);
  Object.keys(params).forEach(key => searchParams.set(key, params[key]));
  let hashPathParamsStr = '';
  for (let key of searchParams.keys()) {
    hashPathParamsStr += `&${key}=${searchParams.get(key)}`;
  }
  return hashPathParamsStr ? hashPathParamsStr.substr(1) : hashPathParamsStr;
};
