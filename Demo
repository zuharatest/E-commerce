const { test, expect } = require('@playwright/test');
 
test('Swag lab login', async ({ page }) => {
   
   const Username = "standard_user";
   const Password ="secret_sauce";
   const productNames = 'Sauce Labs Bike Light';
   const products = page.locator(".inventory_item");
 
   await page.goto("https://www.saucedemo.com/");
   await page.locator("#user-name").fill(Username);
   await page.locator("#password").fill(Password);
   await page.locator("#login-button").click();
   
   const titles = await page.locator(".inventory_item_name").allTextContents();
   console.log(titles);
 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      const productName = await products.nth(i).locator(".inventory_item_name").textContent();
    if (productNames.includes(productName.trim())) {
         //add to cart
         await products.nth(i).locator("text=Add to cart").click();
       
      }
   }
 
   await page.waitForTimeout(3000);
   await page.locator(".shopping_cart_link").click();
 
   for (const productName of productNames) {
      const isVisible = await page.locator(`.inventory_item_name:has-text('${productName}')`).isVisible();
      expect(isVisible).toBeTruthy();
    }
   //const bool = await page.locator(".inventory_item_name:has-text('Sauce Labs Bike Light')").isVisible();
   //expect(bool).toBeTruthy(); // sudo class
   await page.locator("#checkout").click();
 
   await page.locator("#first-name").fill("Vimal");
   await page.locator("#last-name").fill("V K");
   await page.locator("#postal-code").fill("673010");
   await page.locator("#continue").click();
   await page.locator("#finish").click();
 
   
   await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
   const thanksmsg = await page.locator(".complete-header").textContent();
   console.log(thanksmsg);
   
 
 
 
 
 
});
