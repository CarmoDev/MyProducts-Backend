const db = require('../../database/index');

class ProductsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT products.*,
    categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id
    ORDER BY products.product_name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const row = await db.query(`
    SELECT products.*,
    categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id
    WHERE products.id = '${id}'`);
    return row;
  }

  async findByName(product_name) {
    const [row] = await db.query(`
    SELECT * FROM products
    WHERE product_name = $1
    `, [product_name]);
    return row;
  }

  async create({
    product_name, quantity, price, category_id,
  }) {
    const row = await db.query(`
    INSERT INTO products(product_name, quantity, price, category_id)
    VALUES('${product_name}', '${quantity}', '${price}', '${category_id}')
    `);

    return row;
  }

  async update(id, {
    product_name, quantity, price, category_id,
  }) {
    const row = await db.query(`
      UPDATE products
      SET product_name = '${product_name}', quantity = '${quantity}', price = '${price}', category_id = '${category_id}'
      WHERE id = '${id}'
      RETURNING *
    `);
    return row;
  }

  async updateQuantity(id, quantity) {
    const row = await db.query(`
      UPDATE products
      SET quantity = '${quantity}'
      WHERE id = '${id}'
      RETURNING *
    `);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`DELETE FROM products WHERE id = '${id}'`);
    return deleteOp;
  }
}

module.exports = new ProductsRepository();
