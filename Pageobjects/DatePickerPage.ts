import { Locator, Page, expect } from '@playwright/test'


export class DatePickerpage {
    private readonly page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async selectcommondataepicker_Range(number_of_days_today: number) {
        await this.page.getByTitle('Forms').click();
        await this.page.getByTitle('Datepicker').click();
        const Locator_datechoice: Locator = this.page.getByPlaceholder('Form Picker');
        await Locator_datechoice.click();
        const expected_date = await this.date_calender_select(number_of_days_today);
        //await expect(Locator_datechoice).toHaveText(expected_date);



    }





    private async date_calender_select(number_of_days_today: number) {


        let date = new Date();
        date.setDate(date.getDate() + number_of_days_today);
        const date_recevied_after_setDate = date.getDate().toString()
        const shoterst_form_of_month = date.toLocaleString('EN-US', { month: 'short' })
        const Long_form_of_month = date.toLocaleString('EN-US', { month: 'long' })
        const year = date.getFullYear();
        const expected_date = `${shoterst_form_of_month} ${date_recevied_after_setDate},${year}`
        let calnder_month_Date = await this.page.locator('nb-calendar-view-mode').textContent();
        const expectedmonthandyear = ` ${Long_form_of_month} ${year}`
        while (!calnder_month_Date.includes(expectedmonthandyear)) {

            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
            calnder_month_Date = await this.page.locator('nb-calendar-view-mode').textContent();
        }
        await this.page.locator('[class="day-cell ng-star-inserted"]').getByText(date_recevied_after_setDate, { exact: true }).click();
        return expected_date;

    }

}





















