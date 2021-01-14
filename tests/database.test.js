const mongoose = require('mongoose');
const Seller = require('../database/database.js');

describe('Database Tests', () => {
  const dbName = 'sellers';

  beforeAll(async () => {
    const url = `mongodb://localhost/${dbName}`;
    await mongoose.disconnect();
    await mongoose.connect(url, { useNewUrlParser: true });
  });

  afterAll(() => mongoose.disconnect());

  async function removeAllCollections() {
    Object.keys(mongoose.connection.collections).forEach((collection) => {
      const col = mongoose.connection.collections[collection];
      col.deleteMany();
    });
  }

  afterEach(async () => {
    await removeAllCollections();
  });

  it('Should connect to the \'sellers\' database', async () => {
    expect(mongoose.connection.name).toBe('sellers');
  });

  it('Should have correct data structure', async () => {
    await Seller.create({
      name: 'joey',
      sales: 1234,
      products: [
        {
          id: 1,
          name: 'hat',
          description: 'its a hat',
          price: 9.99,
          stock: 123,
          sizes: false,
          rating: 4.35,
        },
        {
          id: 2,
          name: 'shirt',
          description: 'its a shirt',
          price: 99.99,
          stock: 123,
          sizes: false,
          rating: 3.5,
        },
      ],
    });
    const results = await Seller.find({});
    expect(typeof results[0].name).toBe('string');
    expect(typeof results[0].sales).toBe('number');
    expect(Array.isArray(results[0].products)).toBe(true);
    expect(typeof results[0].products[0].id).toBe('number');
    expect(typeof results[0].products[0].name).toBe('string');
    expect(typeof results[0].products[0].description).toBe('string');
    expect(typeof results[0].products[0].price).toBe('number');
    expect(typeof results[0].products[0].stock).toBe('number');
    expect(typeof results[0].products[0].sizes).toBe('boolean');
    expect(typeof results[0].products[0].rating).toBe('number');
  });
});
