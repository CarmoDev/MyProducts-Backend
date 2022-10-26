const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'myproducts',
});

client.connect();

// client.query(`INSERT INTO products(product_name, quantity, price, category_id)
//               VALUES('Air Jordan', '3', '850', '74c40a84-b6d5-4354-a77a-ba063294b639')`);

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
