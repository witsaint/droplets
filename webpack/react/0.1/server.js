var express = require('express')
var cors = require('cors')
var proxyMiddleware = require('http-proxy-middleware')
const path = require('path')

var app = express()
var port = 80
//var proxyTable =  {
  //"/": "http://localhost:8085"
//}

// Cross-Origin Resource Sharing
app.use(cors({
  exposedHeaders: 'X-AUTH-TOKEN'
}))

// serve pure static assets
app.use(express.static(path.resolve(__dirname, 'dist')))

// proxy api requests
app.use('/[A-Za-z]{3,15}_svc/v[0-9]{1}/',proxyMiddleware({target: 'http://localhost:8085'}))

app.get('*', function(req, res, next){
  res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('> Listening at ' + port + ' env: '+app.get('env')+'\n')
})
