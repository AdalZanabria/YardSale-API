const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 0,
      name: 'Mauricio',
      area: 'Informatica',
    },
    {
      id: 1,
      name: 'Ivan',
      area: 'Informatica',
    },
    {
      id: 2,
      name: 'Oscar',
      area: 'Informatica',
    },
    {
      id: 3,
      name: 'Gustavo',
      area: 'Informatica',
    },
    {
      id: 4,
      name: 'Adal',
      area: 'Informatica',
    },
  ]);
});

module.exports = router;
