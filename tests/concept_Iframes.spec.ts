import { expect, FrameLocator, Locator, test } from '@playwright/test'


test.beforeEach(async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

})

test('Drag and drop with Iframes bot genral and Precise methods  ', async ({ page }) => {

    //Step 1:Find the iframe and pass it into  FrameLocator and use that FrameLocator reference
    const Locator_Iframe: FrameLocator = page.frameLocator('[rel-title="Photo Manager"] iframe');

    //step 2: with help of Locato_Iframe reference variable travel with drag to method 
    //step 3: Dragto method should also be hadle with Locato_Iframe refrence variable 
    await Locator_Iframe.locator('h5', { hasText: 'High Tatras 3' }).dragTo(Locator_Iframe.locator("#trash"));


    //Controlling Mouse more precise

    //Step 1:Find the iframe and pass it into  FrameLocator and use that FrameLocator reference
    const Locator_Iframe_Precise: FrameLocator = page.frameLocator('[rel-title="Photo Manager"] iframe');

    //Step 2 : First hover on element click mouse down and hover again on Element 2 and Make mouse up .
    await Locator_Iframe_Precise.locator('li', { hasText: 'High Tatras 4' }).hover()
    await page.mouse.down();
    await Locator_Iframe_Precise.locator("#trash").hover();
    await page.mouse.up();
    await expect(Locator_Iframe_Precise.locator("#trash ul li h5")).toHaveText(['High Tatras 3', 'High Tatras 4'])

    //Step 3: Perform Page close 
    await page.close();










})

