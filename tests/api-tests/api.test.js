require ('dotenv').config();
const { test, expect, request } = require('@playwright/test');

test.describe('REST API Test Cases', () => {
  let apiContext;
  let createdid;
  const baseURL = process.env.API_BASE_URL || 'https://api.restful-api.dev/';

  test.beforeAll(async ({ playwright }) => {
    apiContext = await request.newContext({
      baseURL,
    });
  });

  test('GET request - fetch a post', async () => {
    const response = await apiContext.get('/objects');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    console.log('GET Response:', data);
  });

  test('POST request - create a post', async () => {
    const response = await apiContext.post('/objects', {
      "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   },
    });
    expect(response.status()).toBe(200); // 201 = Created
    const responsebody = await response.json();
    console.log('POST Response:', responsebody);
    createdid = responsebody.id;
    console.log('Created ID:', createdid);
  });

  test('DELETE request - delete a post', async () => {
    // expect(createdid).toBeDefined();
    console.log('Deleting post with ID:', createdid);
    const URL = `${baseURL}/${createdid}`;
    console.log('URL:', URL);
    const response = await apiContext.delete(URL);
    console.log('DELETE Response:', response.status());
    const body  = await response.text();
    console.log('DELETE Response Body:', body);
    expect(response.ok()).toBeTruthy();
    console.log('DELETE Response Status:', response.status());
  });
});
