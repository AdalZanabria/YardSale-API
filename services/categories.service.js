class CategoriesService {
  constructor() {
    this.categories = [
      {
        id: 1,
        name: 'Ropa',
      },
      {
        id: 2,
        name: 'Calzado',
      },
      {
        id: 3,
        name: 'Accesorios',
      },
      {
        id: 4,
        name: 'Electrónica',
      },
    ];
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((category) => category.id == id);
  }
}

module.exports = CategoriesService;
