import { expect, Locator, test } from '@playwright/test'


test.beforeEach(async ({ page }) => {


    await page.goto("http://localhost:4200");

})

test('Date Picker: Dynamically handling - 1', async ({ page }) => {


    await page.getByTitle('Forms').click();
    await page.getByTitle('Datepicker').click();
    const Locator_datechoice: Locator = page.getByPlaceholder('Form Picker');
    await Locator_datechoice.click();

    //Best way to pick date exact from Date Picker is to select current month with perfect mach locator 
    //step 2: getbytext will give the date which you inserted and exact true will check perfect exact match 
    //step with this locator will hold on date :18 postion then give a click ...

    await page.locator('[class="day-cell ng-star-inserted"]').getByText('18', { exact: true }).click();
    expect(Locator_datechoice).toHaveValue('Sep 18, 2024');
})


test('Date Picker : Dynamically handling -2', async ({ page }) => {


    await page.getByTitle('Forms').click();
    await page.getByTitle('Datepicker').click();
    const Locator_datechoice: Locator = page.getByPlaceholder('Form Picker');
    await Locator_datechoice.click();

    // Used Data class and selected tommorow date  with +1 if i want next week it will be +7
    let date = new Date();
    date.setDate(date.getDate() + 7);
    const date_recevied_after_setDate = date.getDate().toString()

    //Acquring shoretst form of month :ex August Aug 
    const shoterst_form_of_month = date.toLocaleString('EN-US', { month: 'short' })

    //Acquring year like 2023 ...2024 
    const year = date.getFullYear();

    //Framed a string 
    const expected_date = `${shoterst_form_of_month} ${date_recevied_after_setDate},${year}`

    //using class name clicking on date we need 
    await page.locator('[class="day-cell ng-star-inserted"]').getByText(date_recevied_after_setDate, { exact: true }).click();

    const alpha = await Locator_datechoice.textContent();

    //check why this is not appearing 
    //await expect(Locator_datechoice).toHaveText(expected_date);

})



test('Date Picker : Dynamically handling - 3  ', async ({ page }) => {

    await page.getByTitle('Forms').click();
    await page.getByTitle('Datepicker').click();
    const Locator_datechoice: Locator = page.getByPlaceholder('Form Picker');
    await Locator_datechoice.click();

    // Used Data class and selected tommorow date  with +1 if i want next week it will be +7
    let date = new Date();
    //here i am clinking after 37 days
    date.setDate(date.getDate() + 37);
    const date_recevied_after_setDate = date.getDate().toString()

    //Acquring shoretst form of month :ex August Aug 
    const shoterst_form_of_month = date.toLocaleString('EN-US', { month: 'short' })
    const Long_form_of_month = date.toLocaleString('EN-US', { month: 'long' })
    //Acquring year like 2023 ...2024 
    const year = date.getFullYear();
    //Framed a string 
    const expected_date = `${shoterst_form_of_month} ${date_recevied_after_setDate},${year}`

    let calnder_month_Date = await page.locator('nb-calendar-view-mode').textContent();
    const expectedmonthandyear = ` ${Long_form_of_month} ${year}`

    //here exratcting calender month : if its not matching we are iterating loop and clicking on chevron 
    while (!calnder_month_Date.includes(expectedmonthandyear)) {

        //performing click on chevron if Month is not matching 
        await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
        calnder_month_Date = await page.locator('nb-calendar-view-mode').textContent();
    }

    //using class name clicking on date we needed
    await page.locator('[class="day-cell ng-star-inserted"]').getByText(date_recevied_after_setDate, { exact: true }).click();
    //check why this is not appearing ,Due to page Htnl Structure change unable to identify Locator
    //await expect(Locator_datechoice).toHaveText(expected_date);
})





































