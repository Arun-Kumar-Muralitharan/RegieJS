const request = require('supertest');

describe('User API', () => {
  const baseURL = 'http://localhost:3001';

  it('should fetch a user', async () => {
    const response = await request(baseURL).get('/api/users/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
  });
});
