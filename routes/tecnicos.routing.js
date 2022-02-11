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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: `Tecnico ${id}`,
    area: `Area ${id}`,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  }
  );
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id
  }
  );
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  }
  );
})

module.exports = router;
