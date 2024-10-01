import { FrameLocator, Locator, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

})

test('Drag and drop with Iframes ', async ({ page }) => {

    //Step 1:Find the iframe and pass it into  FrameLocator and use that FrameLocator reference
    const Locator_Iframe: FrameLocator = page.frameLocator('[rel-title="Photo Manager"] iframe');

    //step 2: with help of Locato_Iframe reference variable travel with drag to method 
    //step 3: Dragto method should also be hadle with Locato_Iframe refrence variable 
    await Locator_Iframe.locator('li', { hasText: 'High Tatras 3' }).dragTo(Locator_Iframe.locator("#trash"));






})

