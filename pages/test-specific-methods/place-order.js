const { expect } = require("@playwright/test");

module.exports = {

  async placeOrder(page) {
    await page.click('//a[contains(text(), "Cart")]');
    await page.waitForTimeout(1000);
    await page.click('//button[contains(text(), "Place Order")]');
    await page.waitForTimeout(2000);
    const nameInput = page.locator('//input[@id="name"]');
    await nameInput.fill("Regie AI");
    const countryInput = page.locator('//input[@id="country"]');
    await countryInput.fill("India");
    const cityInput = page.locator('//input[@id="city"]');
    await cityInput.fill("Chennai");
    const cardInput = page.locator('//input[@id="card"]');
    await cardInput.fill("1234567890123456");
    const monthInput = page.locator('//input[@id="month"]');
    await monthInput.fill("12");
    const yearInput = page.locator('//input[@id="year"]');
    await yearInput.fill("2025");
    await page.click('//button[contains(text(), "Purchase")]');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
    await expect(page.locator('//h2[contains(text(), "Thank you for your purchase!")]')).toHaveText('Thank you for your purchase!');
    await expect(page.locator('//h2[contains(text(), "Thank you for your purchase!")]')).toBeVisible();
    await page.click('text=OK');
  }
}