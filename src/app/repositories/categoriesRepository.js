const db = require('../../database/index');

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM categories ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM categories WHERE id = $1', [id]);
    return row;
  }

  async create({ name }) {
    const { row } = await db.query(`
    INSERT INTO categories(name)
    VALUES ('${name}')
    RETURNING *`);
    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query(`
    UPDATE categories
    SET name = '${name}'
    WHERE id = '${id}'
    RETURNING *`);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`DELETE FROM categories WHERE id = '${id}'`);
    return deleteOp;
  }
}

module.exports = new CategoriesRepository();
