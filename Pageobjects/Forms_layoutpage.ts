import { Locator, Page } from '@playwright/test'

export class Forms_layoutpage {

    readonly page: Page

    constructor(page: Page) {

        this.page = page;

    }

    async startusingsmartgrid(username: string, Email: string, rememberme: boolean) {

        const inlineform: Locator = this.page.locator('nb-card', { hasText: "Inline form" });



        await inlineform.getByRole("textbox", { name: "Jane Doe" }).fill(username);


        await inlineform.getByRole("textbox", { name: "Email" }).fill(Email);



        if (rememberme) {

            await inlineform.getByRole('checkbox').check({ force: true })

        }
        await inlineform.getByRole('button').click();



    }


















}