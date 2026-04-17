const { test, expect } = require('@playwright/test');
 
test('Ecom login', async ({ page }) => {



await page.goto("https://acn-malabar-stage.malabargoldanddiamonds.com/in/kl/en/jewellery.html");


 const email = 'shilkacp@gmail.com';
const icon = page.locator('img[src$="Personperson.svg"]');
await expect(icon).toBeVisible();
await icon.click();

const signIn = page.getByText('Log In / Register');
await signIn.click();


    

});



	