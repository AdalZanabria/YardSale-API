const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Ropa',
    },
    {
      name: 'Calzado',
    },
    {
      name: 'Accesorios',
    },
  ]);
});

router.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Ropa',
  });
});

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
