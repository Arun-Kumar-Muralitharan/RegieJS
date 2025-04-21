// // tests/api-demo.spec.js
// const { test, expect, request } = require('@playwright/test');

// test.describe('REST API demo', () => {
//   let apiContext;

//   test.beforeAll(async ({ playwright }) => {
//     apiContext = await request.newContext({
//       baseURL: 'https://jsonplaceholder.typicode.com', // Change to your actual API URL
//     });
//   });

//   test('GET request - fetch a post', async () => {
//     const response = await apiContext.get('/posts/1');
//     expect(response.ok()).toBeTruthy();
//     const data = await response.json();
//     console.log('GET Response:', data);
//   });

//   test('POST request - create a post', async () => {
//     const response = await apiContext.post('/posts', {
//       data: {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       },
//     });
//     expect(response.status()).toBe(201); // 201 = Created
//     const data = await response.json();
//     console.log('POST Response:', data);
//   });

//   test('DELETE request - delete a post', async () => {
//     const response = await apiContext.delete('/posts/1');
//     expect(response.ok()).toBeTruthy();
//     console.log('DELETE Response Status:', response.status());
//   });
// });
