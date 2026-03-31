//app client
const axios = require('axios');
const config = require('../config');

async function getFromApi() {
  const apiUrl = config.get('apiUrl');
  const response = await axios.get(apiUrl);
  return response.data;
}

module.exports = { getFromApi };
