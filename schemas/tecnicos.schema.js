const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const area = Joi.string().min(3).max(25);

const createTecnicoSchema = Joi.object({
  name: name.required(),
  area: area.required(),
});

const updateTecnicoSchema = Joi.object({
  name: name,
  area: area,
});

const getTecnicoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTecnicoSchema, updateTecnicoSchema, getTecnicoSchema };
