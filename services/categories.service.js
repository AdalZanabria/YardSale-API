class CategoriesService {
  constructor() {
    this.categories = [
      {
        id: 0,
        name: 'Ropa',
      },
      {
        id: 1,
        name: 'Calzado',
      },
      {
        id: 2,
        name: 'Accesorios',
      },
      {
        id: 3,
        name: 'Electrónica',
      },
    ];
  }

  create(data) {
    const newCategory = {
      id: this.categories.length,
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((category) => category.id == id);
  }

  update(id, changes) {
    const index = this.categories.findIndex((item) => item.id == id );
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ... category,
      ... changes,
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
