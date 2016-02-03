const tunnel = require('tunnel');
module.exports = {
  json: true,
  timeout: 8000,
  headers: {
    'user-agent': 'https://github.com/rafaelrinaldi/hn-cli'
  },
  agent: tunnel.httpsOverHttp({
    proxy: {
      host: 'localhost'
    }
  })
};
