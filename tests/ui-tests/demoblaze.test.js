const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');
const commons = require('../../pages/common-methods/common');
const credentials = require('../../data/deliverables.json');
const { setupBrowser, teardownBrowser } = require('../../utils/setup');
const actions = require('../../utils/actions');
const placeOrder = require('../../pages/test-specific-methods/place-order');

let browser;
let context;
let page;

test.beforeAll(async () => {
  browser = await setupBrowser('edge');
  context = await browser.newContext();
  page = await context.newPage();
});

test.afterAll(async () => {
  await teardownBrowser(browser, page, context);
});

test('Demoblaze Viewing Samsung Galaxy S6', async () => {
  
  const adminUser = credentials.find(user => user.role === 'admin');
  const userName = adminUser?.user_name;
  const password = adminUser?.password;

  if (!userName || !password) 
    {
    throw new Error('User credentials are missing or invalid.');
    }

  await allure.step('Open Demoblaze Application', async () => {
  await page.goto('/');
  });
  await allure.step('Assert the URL for Demoblaze Application', async() => {
  await expect(page).toHaveURL('/');
  });
  await page.waitForTimeout(2000);
  await allure.step('Login to Demoblaze as the User', async() => {
  const common = new commons.Common(page);
  await common.login(userName, password);
  });
  await page.waitForTimeout(2000);
  await allure.step('Select Samsung Galaxy S6', async() => {
  await page.click('text=Samsung galaxy s6');
  });
  await page.waitForTimeout(2000);
  await allure.step('Logout of the application', async () => {
  const common = new commons.Common(page);
  await common.logout();
  });
  await page.waitForTimeout(2000);
  await allure.step('Assert the title after logout', async () => {
  await expect(page).toHaveTitle('STORE');
});
});

test('Demoblaze Ordering Sony Vaio i5', async () => {
  const adminUser = credentials.find(user => user.role === 'admin');
  const userName = adminUser?.user_name;
  const password = adminUser?.password;

  if (!userName || !password) 
    {
    throw new Error('User credentials are missing or invalid.');
    }

  await allure.step('Login to Demoblaze', async() => {
    await page.goto('/');
  });
  await allure.step('Assert the URL after Login', async () => {
    await expect(page).toHaveURL('/');
    await page.waitForTimeout(2000);
  });
  await allure.step('Login to Demoblaze as the User', async () => {
  const common = new commons.Common(page);
  await common.login(userName, password);
  await page.waitForTimeout(2000);
  });
  await allure.step('Select Sony Vaio i5', async () => {
  await page.click('text=Sony vaio i5');
  await page.waitForTimeout(2000);
  });
  await allure.step('Assert the Page Title', async () => {
  await expect(page).toHaveTitle('STORE');
  });
  await allure.step('Add the Item to Cart', async () => {
  await page.click('text=Add to cart');
  await page.waitForTimeout(1000);
  });
  await allure.step('Handle the popup alert', async () => {
  await actions.acceptAlert(page);
  await page.waitForTimeout(2000);
  });
  await allure.step('Place the Order', async () => {
  await placeOrder.placeOrder(page);
  await page.waitForTimeout(2000);
  });
  await allure.step('Logout from the Application', async () => {
  const common = new commons.Common(page);
  await common.logout();
  });
  await page.waitForTimeout(2000);
  });