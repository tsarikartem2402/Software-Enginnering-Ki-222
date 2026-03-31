const express = require('express');
const router = express.Router();
const { fetchHello } = require('../services/proxyService');

router.get('/', async (req, res) => {
  try {
    const data = await fetchHello();
    res.send(data);
  } catch (err) {
    res.status(500).send('Error connecting to API');
  }
});

module.exports = router;
