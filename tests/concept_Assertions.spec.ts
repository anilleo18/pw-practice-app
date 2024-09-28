import { expect, Locator, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {

    await page.goto("http://localhost:4200/pages/iot-dashboard");
})




test('Assertion techniques  ', async ({ page }) => {

    await page.locator('[title="Forms"]').click();
    await page.locator('[title="Form Layouts"]').click();

    //Re-using the Locator :textContent will give you text of particular item

    const basic_button = page.locator('nb-card', { hasText: "Basic form" }).locator('button');

    // Extract text and perform Assertions 
    const text_extracted_from_button = await basic_button.textContent();
    expect(text_extracted_from_button).toEqual("Submit")


    // Locator Assertions :this type are locator Assertions ....
    //with help of tohavetext we are directly taking text from locator itself  \here 
    await expect(basic_button).toHaveText("Submit")

    // we have soft assertions as well 
    await expect.soft(basic_button).toHaveText("Submit3")

    basic_button.click();






})




























