const App = require('./package.json')
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : App.name,
      script    : "server.js",
      cwd: "./",
      env: {
        NODE_PATH: "/usr/local/lib/node_modules"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    pro: {
      user: 'root',
      host: '106.12.14.227',
      ref: 'origin/master',
      repo: `https://github.com/witsaint/FEEngineering.git`,
      path: "/www/web/witsaint",
      "post-deploy" : "npm install && pm2 startOrRestart processes.json --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    },
    dev : {
      user : "root",
      host : "192.168.21.30",
      ref  : "origin/master",
      repo : "https://github.com/witsaint/FEEngineering.git",
      path : "/www/web/witsaint",
      "post-deploy" : "npm install && pm2 startOrRestart processes.json --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
