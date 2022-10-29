const ProductRepository = require('../repositories/ProductRepository');

class ProductController {
  async index(request, response) {
    // lista todos os registros
    const { orderBy } = request.query;
    const Product = await ProductRepository.findAll(orderBy);

    response.json(Product);
  }

  async show(request, response) {
    // Obtém um registro
    const { id } = request.params;

    const Product = await ProductRepository.findById(id);

    if (!Product) {
      // 404: Not Found
      return response.status(404).json({ error: 'Product not found' });
    }

    response.json(Product);
  }

  async store(request, response) {
    // Cria novo registro
    const {
      product_name, quantity, price, category_id,
    } = request.body;

    if (!product_name) {
      return response.status(400).json({ error: 'Please insert a name' });
    }

    if (product_name) {
      const productExists = await ProductRepository.findByName(product_name);
      if (productExists) {
        return response.status(400).json({ error: 'This name already been taken' });
      }
    }

    const product = await ProductRepository.create({
      product_name, quantity, price, category_id,
    });

    response.status(201).json(product);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const {
      product_name, quantity, price, category_id,
    } = request.body;

    const ProductExists = await ProductRepository.findById(id);

    if (!ProductExists) {
      return response.status(404).json({ error: 'Product not found' });
    }

    // if (!product_name) {
    //   return response.status(400).json({ error: 'Please insert a name' });
    // }

    const ProductByName = await ProductRepository.findByName(product_name);

    if ((ProductByName && ProductByName.id === id)) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const Product = await ProductRepository.update(id, {
      product_name, quantity, price, category_id,
    });

    response.json(Product);
  }

  async updateQuantity(request, response) {
    // Editar um registro
    const { id } = request.params;
    const { quantity } = request.body;

    const ProductExists = await ProductRepository.findById(id);

    if (!ProductExists) {
      return response.status(404).json({ error: 'Product not found' });
    }

    const Product = await ProductRepository.updateQuantity(
      id,
      quantity,
    );

    response.json(Product);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    await ProductRepository.delete(id);
    // 204: No Content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ProductController();
