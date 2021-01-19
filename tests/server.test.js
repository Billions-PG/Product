const supertest = require('supertest');
const app = require('../server/server');
const { db } = require('../database/database');

const request = supertest(app);

afterAll((done) => {
  db.disconnect();
  done();
});

describe('Connection', () => {
  it('Should return status code 200', async (done) => {
    const res = await request.get('/sellers');
    expect(res.status).toBe(200);
    done();
  });

  it('Should not return null', async (done) => {
    const res = await request.get('/sellers');
    expect(res.body).not.toBeNull();
    done();
  });
});

describe('GET', () => {
  it('Should return an array of objects', async (done) => {
    const res = await request.get('/sellers');
    expect(res.body).toEqual(expect.any(Array));
    res.body.forEach((seller) => {
      expect(seller).toEqual(expect.any(Object));
    });
    done();
  });

  it('Should return sellers with correct properties', async (done) => {
    const res = await request.get('/sellers');
    const rand = (max) => Math.floor(Math.random() * Math.floor(max));
    expect(res.body[rand(res.body.length)]).toHaveProperty('name');
    expect(res.body[rand(res.body.length)]).toHaveProperty('sales');
    expect(res.body[rand(res.body.length)]).toHaveProperty('products');
    const product = res.body[rand(res.body.length)].products[0];
    if (product !== undefined) {
      const props = ['id', 'name', 'image', 'description', 'price', 'stock', 'sizes', 'rating'];
      expect(Object.keys(product)).toEqual(expect.arrayContaining(props));
    }
    done();
  });

  it('Should return seller from valid product id', async (done) => {
    const res = await request.get('/sellers/50');
    expect(Object.keys(res.body).length).toBeGreaterThan(0);
    done();
  });

  it('Should return nothing for invalid product id', async (done) => {
    const res = await request.get('/sellers/500');
    expect(res.statusCode).toBe(404);
    done();
  });
});
