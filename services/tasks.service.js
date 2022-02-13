class TasksService {
  constructor() {
    this.tasks = [
      {
        id: 1,
        caso: 'No hay internet.',
      },
      {
        id: 2,
        caso: 'No sirve impresora.',
      },
      {
        id: 3,
        caso: 'No sirve scanner.',
      },
      {
        id: 4,
        caso: 'No hay tonner.',
      },
    ];
  }

  find() {
    return this.tasks;
  }

  findOne(id) {
    return this.tasks.find((task) => task.id == id);
  }
}

module.exports = TasksService;
