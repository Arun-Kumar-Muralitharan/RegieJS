module.exports = {
  async clickElement(element, name = 'element') {
    try {
      await element.waitFor({ state: 'visible' });
      await element.click();
      console.log(`✅ Clicked on ${name}`);
    } catch (err) {
      console.error(`❌ Failed to click ${name}:`, err);
      throw err;
    }
  },

  async fillInput(element, value, name = 'input') {
    try {
      await element.waitFor({ state: 'visible' });
      await element.fill(value);
      console.log(`✅ Filled ${name} with "${value}"`);
    } catch (err) {
      console.error(`❌ Failed to fill ${name}:`, err);
      throw err;
    }
  },

  async acceptAlert(page) {
    try {
      await page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
      });
    } catch (err) {
      console.error('❌ Failed to accept alert:', err);
      throw err;
    }
  }
};
