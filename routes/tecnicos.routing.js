const express = require('express');
const TecnicosService = require('../services/tecnicos.service');

const router = express.Router();
const service = new TecnicosService();

router.get('/', (req, res) => {
  const tecnicos = service.find();
  res.json(tecnicos);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const tecnico = service.findOne(id);
  res.json(tecnico);
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
