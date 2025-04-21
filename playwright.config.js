require('dotenv').config();
const { defineConfig } = require('@playwright/test');
const { loadEnv } = require('./utils/loadEnv');
const ENV = process.env.ENV || 'prod';
loadEnv(ENV);
console.log(`Base URL: ${process.env.BASE_URL}`);


module.exports = defineConfig({
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL || 'https://www.demoblaze.com',
    trace: 'on'
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  testDir: './tests',
});
