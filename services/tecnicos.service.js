const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

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
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
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
    const query = 'SELECT * FROM tasks';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    const tecnico = this.tecnicos.find((tecnico) => tecnico.id == Number(id));
    if (!tecnico) {
      throw boom.notFound('Técnico no encontrado.');
    }
    return tecnico;
  }

  async update(id, changes) {
    const index = this.tecnicos.findIndex((tecnico) => tecnico.id == id);
    if (index === -1) {
      throw boom.notFound('Técnico no encontrado.');
    }
    const tecnico = this.tecnicos[index];
    this.tecnicos[index] = {
      ...tecnico,
      ...changes,
    };
    return this.tecnicos[index];
  }

  async delete(id) {
    const index = this.tecnicos.findIndex((tecnico) => tecnico.id == id);
    if (index === -1) {
      throw boom.notFound('Técnico no encontrado');
    }
    this.tecnicos.splice(index, 1);
    return { id };
  }
}

module.exports = TecnicosService;
