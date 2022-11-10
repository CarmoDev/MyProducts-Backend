const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://umlcuenj:XKj6BZ5kMofX5-r22x3xkikC3NQsEWlP@babar.db.elephantsql.com/umlcuenj',
});

client.connect();

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
