class Common 
{
  constructor(page) 
  {
    this.page = page;
  }

 async login(username, password)
    {
        await this.page.getByRole('link', { name: 'Log in' }).click();
        await this.page.waitForTimeout(1000);
        const usernameInput = this.page.locator('//input[@id = "loginusername"]');
        await usernameInput.fill(username);
        const passwordInput = this.page.locator('//input[@id = "loginpassword"]');
        await passwordInput.fill(password);
        await this.page.getByRole('button', { name: 'Log in' }).click();
        await this.page.waitForTimeout(2000);
    }

    async logout()
    {
        await this.page.getByRole('link', { name: 'Log out' }).click();
        await this.page.waitForTimeout(2000);
    }
}
module.exports = { Common };