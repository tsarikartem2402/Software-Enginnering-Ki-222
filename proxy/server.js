const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes');

app.use('/', routes);

const PORT = config.get('port');
app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT}`);
  console.log(`Proxy is calling API: ${config.get('apiUrl')}`);

});
