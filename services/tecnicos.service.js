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

  async create(data) {
    const nuevoTecnico = {
      id: this.tecnicos.length,
      ...data,
    };
    this.tecnicos.push(nuevoTecnico);
    return nuevoTecnico;
  }

  async find() {
    return this.tecnicos;
  }

  async findOne(id) {
    return this.tecnicos.find((tecnico) => tecnico.id == Number(id));
  }

  async update(id, changes) {
    const index = this.tecnicos.findIndex((tecnico) => tecnico.id == id);
    if (index === -1) {
      throw new Error('Técnico no encontrado.');
    }
    const tecnico = this.tecnicos[index];
    this.tecnicos[index] = {
      ... tecnico,
      ... changes
    };
    return this.tecnicos[index];
  }

  async delete(id) {
    const index = this.tecnicos.findIndex((tecnico) => tecnico.id == id);
    if (index === -1) {
      throw new Error('Técnico no encontrado');
    }
    this.tecnicos.splice(index, 1);
    return { id };
  }
}

module.exports = TecnicosService;
