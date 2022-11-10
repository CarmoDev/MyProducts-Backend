const db = require('../../database/index');

class ClientsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM clients ORDER BY username ${direction}`);
    return rows;
  }

  async findClient(email, password) {
    const row = await db.query(`
    SELECT * FROM users
    WHERE email = '${email}' AND
    password = crypt('${password}', password)
    `);
    return row;
  }

  async createClient(username, email, password) {
    const row = await db.query(`
    INSERT INTO users(username, email, password)
    VALUES(
      '${username}',
      '${email}',
      crypt('${password}', gen_salt('bf'))
      )
    `);
    return row;
  }
}

module.exports = new ClientsRepository();
