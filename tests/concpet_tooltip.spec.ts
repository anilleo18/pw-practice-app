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