const { getFromApi } = require('../client/apiClient');

async function fetchHello() {
  const data = await getFromApi();
  return `Proxy received: ${data}`;
}

module.exports = { fetchHello };
