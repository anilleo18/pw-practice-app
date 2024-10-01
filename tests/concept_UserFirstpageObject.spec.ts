import { test, expect } from '@playwright/test'
import { Naviagation_Page } from '../Page_Objects/Navigation_Page';



test.beforeEach(async ({ page }) => {


    await page.goto("http://localhost:4200");


})

test('calling first Page object Method from this Test to navigating to Multiple pages', async ({ page }) => {

    // So from this obj i am calling Naviagation_Page method and passing page instance into constructor
    const Nav_topage = new Naviagation_Page(page);

    // so next I  am navigating to with Nav_topage and calling the method to Navigate to form page 
    await Nav_topage.Form_layout_pageNav();

    // so next I  am navigating to with Datepicker and calling the method to Navigate to form page 


    await Nav_topage.Datepicker();

    await Nav_topage.tooltip();

    await Nav_topage.table_Data();

})


