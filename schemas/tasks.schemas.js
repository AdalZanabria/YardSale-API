const Joi = require('joi');

const id = Joi.number().integer();
const caso = Joi.string().min(3).max(15);

const createTaskSchema = Joi.object({
  caso: caso.required(),
});

const updateTaskSchema = Joi.object({
  caso: caso,
});

const getTaskSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTaskSchema, updateTaskSchema, getTaskSchema };
