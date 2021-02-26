module.exports = {
  apps : [{
    name        : "mockupdata_poompuang",
    script      : "./server.js",
    watch       : true,
    instances   : 3,
    exec_mode   : "cluster",
    env: {
      "PORT":8000,
      "NODE_ENV": "development"
    },
    env_staging : {
      "PORT": 80,
      "NODE_ENV": "staging"
    },
    env_production : {
      "PORT": 80,
      "NODE_ENV": "production"
    }
  }]
}
