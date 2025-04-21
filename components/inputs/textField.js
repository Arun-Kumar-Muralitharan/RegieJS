module.exports = class TextField 
{
  constructor(page, selector) 
  {
    this.input = page.locator(selector);
  }

  async fill(text) 
  {
    await this.input.fill(text);
  }

  async clear() 
  {
    await this.input.fill('');
  }
};
