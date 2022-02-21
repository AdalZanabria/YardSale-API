const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class TasksService {
  constructor() {
    this.tasks = [
      {
        id: 0,
        caso: 'No hay internet.',
      },
      {
        id: 1,
        caso: 'No sirve impresora.',
      },
      {
        id: 2,
        caso: 'No sirve scanner.',
      },
      {
        id: 3,
        caso: 'No hay toner.',
      },
    ];
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    const newTask = {
      id: this.tasks.length,
      ...data,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    const task = this.tasks.find((task) => task.id == id);
    if (!task) {
      throw boom.notFound('Task not found.');
    }
    return task;
  }

  async update(id, changes) {
    const index = this.tasks.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Task not found');
    }
    const task = this.tasks[index];
    this.tasks[index] = {
      ...task,
      ...changes,
    };
    return this.tasks[index];
  }

  async delete(id) {
    const index = this.tasks.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Task not found');
    }
    this.tasks.splice(index, 1);
    return { id };
  }
}

module.exports = TasksService;
