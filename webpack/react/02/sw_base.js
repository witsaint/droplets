workbox.core.setCacheNameDetails({prefix: "ym"});
workbox.skipWaiting();
workbox.clientsClaim();
workbox.routing.registerNavigationRoute("/index.html");
workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    workbox.strategies.networkFirst()
);
//workbox.routing.registerRoute(
//  /\.(png|jpg|gif)/,
//  workbox.strategies.cacheFirst({
//    cacheName: 'static-cache' 
//  }),
//  'GET'
//);
workbox.routing.registerRoute(
    /\/manifest\.json/,
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('https://jufan-yanjiu2\.oss-cn-hangzhou\.aliyuncs\.com/'),
    workbox.strategies.cacheFirst({
      cacheName: 'cdnimg-cache',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        })
      ]
    })
);
workbox.routing.registerRoute(
    new RegExp('https://jufan-test\.oss-cn-hangzhou\.aliyuncs\.com/'),
    workbox.strategies.cacheFirst({
      cacheName: 'cdnimg-cache',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        })
      ]
    })
);
workbox.routing.registerRoute(
    new RegExp('/[A-Za-z]{3,15}_svc/v[0-9]{1}/'),
    workbox.strategies.networkFirst({
      cacheName: 'api-cache',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        })
      ]
    })
);
workbox.precaching.precacheAndRoute(self.__precacheManifest);
