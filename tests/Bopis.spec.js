const { test, expect } = require('@playwright/test');
 
test('Ecom login', async ({ page }) => {



<<<<<<< HEAD:tests/Ecom.spec.js
await page.goto("https://acn-malabar-stage.malabargoldanddiamonds.com/in/kl/en/jewellery.html");


 const email = 'shilkacp@gmail.com';
const icon = page.locator('img[src$="Personperson.svg"]');
await expect(icon).toBeVisible();
await icon.click();

const signIn = page.getByText('Log In / Register');
await signIn.click();


    

});



	
=======
    await page.goto("https://beta.malabargoldanddiamonds.com/");
});
>>>>>>> 7c08ea61d7b5776564ed45487bd77b1e8bb8f2c6:tests/Bopis.spec.js
