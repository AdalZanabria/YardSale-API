const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class CategoriesService {
  constructor() {}

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    const category = this.categories.find((category) => category.id == id);
    if (!category) {
      throw boom.notFound('Category not Found.');
    }
    return category;
  }

  async update(id, changes) {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
