const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'product_test',
  password: 'postgres',
  port: 5432
})

client.connect();

module.exports = {
  client
}