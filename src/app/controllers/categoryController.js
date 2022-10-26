const categoriesRepository = require('../repositories/categoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await categoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await categoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Product does not exists' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Please insert a name' });
    }

    const category = await categoriesRepository.create({ name });

    response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const CategoryExists = await categoriesRepository.findById(id);

    if (!CategoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }
    if (!name) {
      return response.status(400).json({ error: 'Please insert a name' });
    }

    const Updatedcategory = await categoriesRepository.update(id, { name });

    response.json(Updatedcategory);
  }

  async delete(request, response) {
    const { id } = request.params;

    await categoriesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
