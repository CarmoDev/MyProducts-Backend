const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
