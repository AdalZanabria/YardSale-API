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
  }

  async create(data) {
    const newTask = {
      id: this.tasks.length,
      ...data,
    }
    this.tasks.push(newTask);
    return newTask;
  }

  async find() {
    return this.tasks;
  }

  async findOne(id) {
    return this.tasks.find((task) => task.id == id);
  }

  async update(id, changes) {
    const index = this.tasks.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error('Task not found')
    }
    const task = this.tasks[index];
    this.tasks[index] = {
      ...task,
      ...changes,
    }
    return this.tasks[index];
  }

  async delete(id) {
    const index = this.tasks.findIndex((item) => item.id == id);
    if (index=== -1) {
      throw new Error('Task not found');
    }
    this.tasks.splice(index, 1);
    return { id };
  }
}

module.exports = TasksService;
