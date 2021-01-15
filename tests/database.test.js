const mongoose = require('mongoose');
const Seller = require('../database/database.js');

const dbName = 'etsy';

beforeAll(async () => {
  const url = `mongodb://localhost/${dbName}`;
  await mongoose.disconnect();
  await mongoose.connect(url, { useNewUrlParser: true });
});

afterAll(() => mongoose.disconnect());

describe('Database Tests', () => {
  it('Should connect to the \'sellers\' database', async () => {
    expect(mongoose.connection.name).toBe('etsy');
  });

  it('Should have a sellers collection', () => {
    expect(mongoose.connection.collections).toHaveProperty('sellers');
  });
});

describe('Data Structure', () => {
  it('Should have a seller name', async () => {
    const results = await Seller.findOne();
    expect(results).toHaveProperty('name');
    expect(typeof results.name).toBe('string');
  });

  it('Should have a seller sales total', async () => {
    const results = await Seller.findOne();
    expect(results).toHaveProperty('sales');
    expect(typeof results.sales).toBe('number');
  });

  it('Should have a seller product array', async () => {
    const results = await Seller.findOne();
    expect(results).toHaveProperty('products');
    expect(Array.isArray(results.products)).toBe(true);
  });

  it('Should have id property in objects within products array', async () => {
    const results = await Seller.findOne();
    expect(results.products[0]).toHaveProperty('id');
    expect(typeof results.products[0].id).toBe('number');
  });

  it('Should have name property in objects within products array', async () => {
    const results = await Seller.findOne();
    expect(results.products[0]).toHaveProperty('name');
    expect(typeof results.products[0].name).toBe('string');
  });

  it('Should have description property in objects within products array', async () => {
    const results = await Seller.findOne();
    expect(results.products[0]).toHaveProperty('description');
    expect(typeof results.products[0].description).toBe('string');
  });

  it('Should have price property in objects within products array', async () => {
    const results = await Seller.findOne();
    expect(results.products[0]).toHaveProperty('price');
    expect(typeof results.products[0].price).toBe('string');
  });

  it('Should have stock property in objects within products array', async () => {
    const results = await Seller.findOne();
    expect(results.products[0]).toHaveProperty('stock');
    expect(typeof results.products[0].stock).toBe('number');
  });

  it('Should have sizes property in objects within products array', async () => {
    const results = await Seller.findOne();
    expect(results.products[0]).toHaveProperty('sizes');
    expect(typeof results.products[0].sizes).toBe('boolean');
  });

  it('Should have rating property in objects within products array', async () => {
    const results = await Seller.findOne();
    expect(results.products[0]).toHaveProperty('rating');
    expect(typeof results.products[0].rating).toBe('number');
  });
});
