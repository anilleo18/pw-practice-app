import { expect, Locator, test } from '@playwright/test'


test.beforeEach(async ({ page }) => {

    await page.goto("http://localhost:4200");

})




test('UI Components Tool tip', async ({ page }) => {




    await page.locator('[title="Modal & Overlays"]').click();
    await page.getByTitle('Tooltip').click();


    const Locator_overallbox: Locator = page.locator('nb-card', { hasText: 'Tooltip Placements' });
    await Locator_overallbox.getByRole('button', { name: 'TOP' }).hover();

    const tooltip: string = await page.locator('nb-tooltip').textContent();

    expect(tooltip.trim()).toEqual("This is a tooltip")

})


test('UI Components :Dialouge Box ', async ({ page }) => {




    await page.getByTitle('Tables & Data').click();
    await page.getByTitle('Smart Table').click();

    page.on('dialog', dialog => {

        dialog.accept();
    })

    //1st way :
    await page.locator('.nb-trash').nth(0).click();
    const loc_arrived: string = await page.getByRole('table').locator('tr', { hasText: "fat@yandex.ru" }).textContent()

    // Alternative way:
    await page.getByRole('table').locator('tr', { hasText: "mdo@gmail.com" }).locator('.nb-trash').click();
    await expect(page.locator('table tr')).not.toHaveText('mdo@gmail.com')




})




