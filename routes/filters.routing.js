const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Este es  un filter de prueba.');
})

module.exports = router;
