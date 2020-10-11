const express = require('express');

const emojis = require('./emojis');

const router = express.Router();

const faq = require('./fallen');

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/fallen', faq);
module.exports = router;
