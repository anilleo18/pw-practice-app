import { Locator, Page } from '@playwright/test'

export class Naviagation_Page {

    readonly page: Page
    readonly formlayoutlocator: Locator
    readonly Datepickerlocator: Locator
    readonly tooltipLocator: Locator
    readonly tableDatalocator: Locator


    constructor(page: Page) {
        this.page = page
        this.formlayoutlocator = page.locator('[title="Form Layouts"]');
        this.Datepickerlocator = page.getByTitle('Datepicker');
        this.tooltipLocator = page.getByTitle('Tooltip');
        this.tooltipLocator = page.getByTitle('Tooltip');
    }



    async Form_layout_pageNav() {

        await this.selectgroupmenu_Nav("Forms");
        await this.formlayoutlocator.click();
    }


    async Datepicker() {

        await this.selectgroupmenu_Nav("Forms");
        await this.Datepickerlocator.click();
    }

    async tooltip() {

        await this.selectgroupmenu_Nav("Modal & Overlays");
        await this.tooltipLocator.click();

    }

    async table_Data() {

        await this.selectgroupmenu_Nav("Tables & Data");
        await this.page.getByTitle('Tree Grid').click();

    }




    private async selectgroupmenu_Nav(groupmenutitle: string) {

        const Menuitem = this.page.getByTitle(groupmenutitle);
        const Expanded_state = await Menuitem.getAttribute('aria-expanded');
        if (Expanded_state == 'false') {
            await Menuitem.click();
        }

    }






















}
