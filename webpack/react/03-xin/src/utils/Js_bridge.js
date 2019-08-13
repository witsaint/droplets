/**
 * 函数描述：js调用webview事件
 *
 * jsBridge.callHandler(method, data, callBack(response));
 * @param method {string} 方法名
 * @param data {Object} 参数
 * @return {Object} 回调
 */

/**
 * 函数描述：webView调用JS事件
 *
 * jsBridge.registerHandler(method, callBack(response));
 * @param method {string} 方法名
 * @return {Object} 回调
 */
/* eslint-disable */
function initBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  } else {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function() {
        callback(WebViewJavascriptBridge);
      },
      false
    );
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  const WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(() => {
    document.documentElement.removeChild(WVJBIframe);
  }, 0);
}
var Js_bridge = {
  registerHandler(name, fun) {
    initBridge(function(bridge) {
      bridge.registerHandler(name, (data, res) => {
        console.log('data', data);
        fun(data, res);
      });
    });
  },

  callHandler(name, data, fun) {
    initBridge(bridge => {
      bridge.callHandler(name, data, fun);
    });
  },
};

export default Js_bridge;
