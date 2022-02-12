class TecnicosService {
  constructor() {
    this.tecnicos = [
      {
        id: 0,
        name: 'Mauricio',
        area: 'Informatica',
      },
      {
        id: 1,
        name: 'Ivan',
        area: 'Informatica',
      },
      {
        id: 2,
        name: 'Oscar',
        area: 'Informatica',
      },
      {
        id: 3,
        name: 'Gustavo',
        area: 'Informatica',
      },
      {
        id: 4,
        name: 'Adal',
        area: 'Informatica',
      },
    ];
  }

  find() {
    return this.tecnicos;
  }

  findOne(id) {
    return this.tecnicos.find((tecnico) => tecnico.id === Number(id));
  }
}

module.exports = TecnicosService;
