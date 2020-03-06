const express = require('express');
const cors = require('cors');
const proxyMiddleware = require('http-proxy-middleware');
const config = require('./config');

// default port where dev server listens for incoming traffic
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV);
}

const port = process.env.PORT || config.build.env.PORT;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = process.env.NODE_ENV == 'production'
  ? config.build.proxyTable
  : config.dev.proxyTable;

const app = express();

// Cross-Origin Resource Sharing
app.use(cors({
  exposedHeaders: 'X-AUTH-TOKEN',
}));

// proxy api requests
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = {
      target: options,
    };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

// serve pure static assets
app.use(express.static(config.build.assetsRoot));

app.use((req, res) => {
  res.sendFile(`${config.build.assetsRoot}/index.html`);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`> Listening at ${port}\n`);
});
