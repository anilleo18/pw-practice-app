import { expect, Locator, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {

    await page.goto("http://localhost:4200/pages/iot-dashboard");
})

test('Locator Basic concepts', async ({ page }) => {

    await page.locator('[title="Forms"]').click();
    await page.locator('[title="Form Layouts"]').click();

    //By Place holder 
    await page.getByPlaceholder('Jane Doe').fill("Anil");

    //By Role
        await page.getByRole('textbox', { name: "Email" }).first().fill("anil@mac.com");
    await page.getByRole('button', { name: "submit" }).first().click();

    //By Label
    await page.getByLabel('Email address').first().fill("hoteltanzania@hotmail.com")

    //By text : when we are using get by text loc always text should be static
    const text = await page.getByText('Form without labels').textContent();
    console.log('printing the test extracted from page :', text);

    await page.locator('nb-card-body nb-radio :text-is("Option 2")').click();

    //By title identifying 
    //await page.getByTitle('IoT Dashboard').click();

    //await page.locator('nb-card-body').nth(4).getByText('submit').click();

    //same one we can write like this:
    await page.locator('nb-card-body').nth(4).getByRole('button').nth(0).click();




})

test('unique way of finding elements', async ({ page }) => {

    await page.locator('[title="Forms"]').click();
    await page.locator('[title="Form Layouts"]').click();

    //child--->parent--->then come back to child:

    await page.locator('nb-card', { hasText: "Basic form" }).getByRole('button', { name: "Submit" }).click();
    await page.locator('nb-card', { has: page.locator('#inputFirstName') }).getByPlaceholder('Website').click();
    await page.locator('nb-card', { hasText: "Remember me" }).getByRole('button', { name: "Sign in" }).click();
    await page.locator('nb-card').filter({ has: page.locator('.status-warning') }).getByRole('button', { name: 'Sign in' }).click();


    // here we are applying 2 filters
    await page.locator('nb-card').filter({ has: page.locator(".custom-checkbox") }).filter({ hasText: 'Sign in' }).getByRole('textbox', { name: 'Email' }).click();

    await page.locator('xpath=//input[@type="password"]//..//preceding-sibling::div//input').fill("alpha@centurion.com");

})


test('Locators reuse ', async ({ page }) => {

    await page.locator('[title="Forms"]').click();
    await page.locator('[title="Form Layouts"]').click();

    //Re-using the Locator :

    const Email_Element_1 = page.locator('nb-card', { hasText: "Basic form" });
    await Email_Element_1.getByRole('button', { name: "Submit" }).click();

})


test('Get text and expect usage  ', async ({ page }) => {

    await page.locator('[title="Forms"]').click();
    await page.locator('[title="Form Layouts"]').click();

    //Re-using the Locator :textContent will give you text of particular item

    const Email_Element_1 = page.locator('nb-card', { hasText: "Basic form" });
    const vale_extract: string = await Email_Element_1.getByRole('button', { name: "Submit" }).textContent();
    expect(vale_extract).toEqual("Submit")

    //if i want to get all the constants:


    //Checking element in our list and allTextContents will provide list of elements 
    const All_contents_text: string[] = await page.locator('nb-radio').allTextContents();
    expect(All_contents_text).toContain("Disabled Option");





    //Extracting value with imput value 
    const Basic_Former = page.locator('nb-card', { hasText: "Block form" });
    const First_Name: Locator = Basic_Former.getByRole('textbox', { name: 'First Name' });

    await First_Name.fill("Anilleo18_git@mac.ie");
    const Firstname_value: string = await First_Name.inputValue();
    expect(Firstname_value).toEqual("Anilleo18_git@mac.ie");
    console.log("hello")

    //How to get attribute ?













})










