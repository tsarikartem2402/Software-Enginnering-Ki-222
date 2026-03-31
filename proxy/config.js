const convict = require('convict');
require('dotenv').config();

const config = convict({
  apiUrl: {
    doc: 'URL of the API server',
    format: String,
    default: 'http://localhost:3000',
    env: 'API_URL'
  },
  port: {
    doc: 'Port for proxy server',
    format: 'port',
    default: 3001,
    env: 'PORT'
  }
});

module.exports = config;
