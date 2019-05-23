var express = require('express')
var cors = require('cors')
var proxyMiddleware = require('http-proxy-middleware')
var config = require('./config')
// server.js
const createApp = require('./src/entry-server.js')
// default port where dev server listens for incoming traffic
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

var port = process.env.PORT || config.build.env.PORT
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = process.env.NODE_ENV == 'production' ?
                config.build.proxyTable :
                config.dev.proxyTable

var app = express()

// Cross-Origin Resource Sharing
app.use(cors({
  exposedHeaders: 'X-AUTH-TOKEN'
}))

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// serve pure static assets
app.use(express.static(config.build.assetsRoot))

app.get('*', (req, res) => {
  const context = { url: req.url }
  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  })
})

app.use((req, res) => {
  res.sendFile(`${config.build.assetsRoot}/index.html`)
})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('> Listening at ' + port + '\n')
})
