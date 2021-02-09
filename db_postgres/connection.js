const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'product_dev',
  password: 'postgres',
  port: 5432
})

client.connect();

module.exports = {
  client
}