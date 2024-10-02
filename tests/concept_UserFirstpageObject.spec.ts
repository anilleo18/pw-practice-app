import { test, expect, Locator } from '@playwright/test'
import { Naviagation_Page } from '../Pageobjects/Navigation_Page';
import { Forms_layoutpage } from '../Pageobjects/Forms_layoutpage';
import { DatePickerpage } from '../Pageobjects/DatePickerPage';
import { pageManager } from '../Pageobjects/pagaManager';




test.beforeEach(async ({ page }) => {


    await page.goto("http://localhost:4200");


})


const onDatepickerPage = new DatePickerpage(page);
/**
 * 
 * Here we are not appraoching const onDatepickerPage = new DatePickerpage(page);
 * where we are creating pagemanger and creating all object there by passing this page reference
 * so that rate creating lot of object in this page like onDatepickerPage = new DatePickerpage(page);
 * const formpager =new formpage();
 * 
 * we are dedicating all object in Pagemanger page and calling those object here for clean code 

 */

test('calling first Page object Method from this Test to navigating to Multiple pages', async ({ page }) => {
    const pm = new pageManager(page);
    await pm.Nav_topage().Form_layout_pageNav();
    await pm.Nav_topage().Datepicker();
    await pm.Nav_topage().tooltip();
    await pm.Nav_topage().table_Data();

})


/**
 * This Method is inline Method 
 * @param this method is calling startusing grid ("anilleo18", "anil@mailsac.com", true)
 */
test('Inline form page click ', async ({ page }) => {


    const pm = new pageManager(page);
    await pm.Nav_topage().Form_layout_pageNav();
    await pm.formpager().startusingsmartgrid("anilleo18", "anil@mailsac.com", true);
    await pm.Nav_topage().Datepicker();
    await pm.onDatepickerPage().selectcommondataepicker_Range(37);


})



























