const {test,expect} = require('@playwright/test');
test('First Playwright test', async({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise")
}); 
test('First Playwright test', async({page})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise")
}); 