import { test, expect, Locator } from '@playwright/test'
import { Naviagation_Page } from '../Pageobjects/Navigation_Page';
import { Forms_layoutpage } from '../Pageobjects/Forms_layoutpage';
import { DatePickerpage } from '../Pageobjects/DatePickerPage';




test.beforeEach(async ({ page }) => {


    await page.goto("http://localhost:4200");


})

test('calling first Page object Method from this Test to navigating to Multiple pages', async ({ page }) => {

    const Nav_topage = new Naviagation_Page(page);
    await Nav_topage.Form_layout_pageNav();
    await Nav_topage.Datepicker();
    await Nav_topage.tooltip();
    await Nav_topage.table_Data();

})


/**
 * This Method is inline Method 
 * @param this method is calling startusing grid ("anilleo18", "anil@mailsac.com", true)
 */
test('Inline form page click ', async ({ page }) => {

    const Nav_topage = new Naviagation_Page(page);
    const formpager = new Forms_layoutpage(page);
    const onDatepickerPage = new DatePickerpage(page);
    await Nav_topage.Form_layout_pageNav();
    await formpager.startusingsmartgrid("anilleo18", "anil@mailsac.com", true);
    await Nav_topage.Datepicker();
    await onDatepickerPage.selectcommondataepicker_Range(37);


})



























