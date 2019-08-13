module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : "CommunityCommerce",
      script    : "server.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    pro : {
      user : "root",
      host : "120.55.113.215",
      ref  : "origin/master",
      repo : "git@git.jufandev.com:fe/CommunityCommerce.git",
      path : "/var/www/CommunityCommerce",
      "post-deploy" : "source /var/www/start.sh"
    },
    dev : {
      user : "root",
      host : "192.168.21.30",
      ref  : "origin/master",
      repo : "git@git.jufandev.com:fe/CommunityCommerce.git",
      path : "/var/www/CommunityCommerce",
      "post-deploy" : "source /var/www/start.sh",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
