const express = require('express');
const ordersService = require('../services/orders.service');

const router = express.Router();
const service = new ordersService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

module.exports = router;
