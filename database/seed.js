const { Seeder } = require('mongo-seeding');
const path = require('path');

const config = {
  database: process.env.MONGO_URL || 'mongodb://localhost/etsy',
  dropDatabase: !process.env.MONGO_URL,
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve(__dirname));

const seed = async () => seeder.import(collections);
seed();
