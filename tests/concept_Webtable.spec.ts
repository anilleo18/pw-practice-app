import { expect, Locator, test } from '@playwright/test'


test.beforeEach(async ({ page }) => {

    await page.goto("http://localhost:4200");

})

test('UI Components :open web table in second page and edit email id taking id as refrence   ', async ({ page }) => {



    // Landed to page 
    await page.getByTitle('Tables & Data').click();
    await page.getByTitle('Smart Table').click();
    const Locator_pageNav = page.locator('.ng2-smart-page-link', { hasText: '2' });
    await Locator_pageNav.click();

    await page.getByRole('row', { name: "11" }).nth(0).locator('.nb-edit').click();

    await page.locator('input-editor').getByPlaceholder('E-mail').clear();

    await page.locator('input-editor').getByPlaceholder('E-mail').fill('mailsac@mainModule.com');

    await page.locator('.nb-checkmark').click();



})


test('UI Components :open web table fourth row and edit first name  ', async ({ page }) => {



    // Landed to page 
    await page.getByTitle('Tables & Data').click();
    await page.getByTitle('Smart Table').click();

    //first tarvel directly to row using getbyrole  and catch edit locator 
    const Locator_row_fourthth: Locator = page.getByRole('row', { name: "jack@yandex.ru" });
    await Locator_row_fourthth.locator('.nb-edit').click();

    //once webtable got expanded then traverse to fistname field from input editor==>firstname block 
    //then clear and update :

    await page.locator('input-editor').getByPlaceholder('First Name').clear();
    await page.locator('input-editor').getByPlaceholder('First Name').fill('Anilleo');
    await page.locator('[class="nb-checkmark"]').click();


})







