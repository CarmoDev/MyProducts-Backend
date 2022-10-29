const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://umlcuenj:XKj6BZ5kMofX5-r22x3xkikC3NQsEWlP@babar.db.elephantsql.com/umlcuenj',
});

client.connect();

// client.query(`INSERT INTO clients(username, email, password)
//               VALUES('Jefferson', 'RealDev@gmail.com', '10112003')
//               RETURN *`);

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
