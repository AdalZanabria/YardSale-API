const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

/*Según el size que mandemos por medio del query en el endpoint será la
cantidad de objetos mostrados con 10 por defecto, ej: /products?size=20
*/
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'Not Found',
    });
  } else {
    res.status(200).json({
      id,
      name: `Producto ${id}`,
      price: `${id}000`,
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
