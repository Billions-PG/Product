const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '18.224.27.235',
  database: 'products_deploy',
  password: '',
  port: 5432
})

client.connect()
  .then(() => console.log('ya boi got that postgres hookup'))
  .catch( (err) => console.log('no postgres to be had: ', err));

module.exports = {
  client
}
