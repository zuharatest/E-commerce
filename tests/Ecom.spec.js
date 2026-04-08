const { test, expect } = require('@playwright/test');
 
test('Ecom login', async ({ page }) => {



    await page.goto("https://beta.malabargoldanddiamonds.com/");
});