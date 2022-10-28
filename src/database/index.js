const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://umlcuenj:XKj6BZ5kMofX5-r22x3xkikC3NQsEWlP@babar.db.elephantsql.com/umlcuenj',
});

client.connect();

// client.query(`INSERT INTO products(product_name, quantity, price, category_id)
//               VALUES('Air Jordan', '3', '850', '05e2d715-5008-4f72-a87a-f9c299e0c73d')`);

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
