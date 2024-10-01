import { Page } from '@playwright/test'

export class Naviagation_Page {

    readonly page: Page


    constructor(page: Page) {
        this.page = page
    }

    async Form_layout_pageNav() {

        await this.selectgroupmenu_Nav("Forms");
        await this.page.locator('[title="Form Layouts"]').click();
    }


    async Datepicker() {

        await this.selectgroupmenu_Nav("Forms");
        await this.page.getByTitle('Datepicker').click();
    }

    async tooltip() {

        await this.selectgroupmenu_Nav("Modal & Overlays");
        await this.page.getByTitle('Tooltip').click();

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
