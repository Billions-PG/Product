const supertest = require('supertest');
const app = require('../server/server');
const { db } = require('../database/database');

const request = supertest(app);

afterAll((done) => {
  db.disconnect();
  done();
});

describe('Connection Tests', () => {
  it('Gets the test endpoint', async (done) => {
    const res = await request.get('/sellers');
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe('object');
    done();
  });
});
