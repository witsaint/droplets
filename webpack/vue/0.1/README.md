# my-project

> nothing

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## 大概
  该项目是作用于vue-cli的spa项目，其中添加了skeleton（骨架屏），后期会结合起来不分开构建骨架屏，以及增添ssr（服务器渲染，改用koa2）

## 骨架屏
  在src下面新建skeleton.vue文件作用于骨架屏的页面，需要在打包之前构建成html来插入到我们最终的index.html中，
  在build文件夹下面创建skeleton.entry.js作为骨架页的入口，会新生成一个vue对象用来渲染创建响应的页面，然后会进行
  对应骨架屏的打包webpack配置webpack.skeleton.conf.js,利用webpack --config ./webpack.skeleton.conf.js的
  命令行来进行骨架屏的输出，会在dist文件夹下面输出一个skeleton.json的文件，该文件是用于插入index.html的内容，最后在项目
  的根目录下面创建一个skeleton.js，用于将内容插入形成最后的index.html
  相关借鉴：[Vue页面骨架屏注入实践](https://segmentfault.com/a/1190000014832185?utm_source=channel-hottest#articleHeader0) |
          [为vue项目添加骨架屏](https://xiaoiver.github.io/coding/2017/07/30/%E4%B8%BAvue%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0%E9%AA%A8%E6%9E%B6%E5%B1%8F.html)
## 部署
``` bash
方案一
  * 1：首先在服务器端搭建node环境，然后安装相应的npm
  * 2：安装pm2，用于一键构建部署（1：有从git直接拉过去的方法，需要ssh免密配置和processes.json配置pm2的方法，2：有直接将dist文件放在服务器中使用pm2直接运行server.js的方法）
 ```
 ```bash
  * 1：搭建node环境
  * 2：不安装pm2，直接将文件放在服务器内部，很low但是可以直接node service.js直接跑起来
 ```
