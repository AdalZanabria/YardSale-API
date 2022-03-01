const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OrdersService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  // include 'customer', relación desde order.model.js y su propia asociación hacia user
  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
      ],
    });
    if (!order) {
      throw boom.notFound('Order not found');
    }
    return order;
  }
}

module.exports = OrdersService;
