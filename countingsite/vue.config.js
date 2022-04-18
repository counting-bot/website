const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  "devServer": {
    // https: true,
    // // key: fs.readFileSync('./certs/example.com+5-key.pem'),
    // // cert: fs.readFileSync('./certs/example.com+5.pem'),
    // // public: 'https://localhost:8080/',
    // client: {
    //   webSocketURL: 'wss://local.numselli.xyz:80/ws'
    // },
    // allowedHosts: 'all'
  },
  configureWebpack: {
    experiments: {
      topLevelAwait: true
    }
  }
})