import { Locator, Page, expect } from '@playwright/test'
import { Naviagation_Page } from '../Pageobjects/Navigation_Page';
import { Forms_layoutpage } from '../Pageobjects/Forms_layoutpage';
import { DatePickerpage } from '../Pageobjects/DatePickerPage';


export class pageManager {

    private readonly page: Page
    private readonly navigationPage: Naviagation_Page
    private readonly formsLayoutPage: Forms_layoutpage
    private readonly datePickerpage: DatePickerpage



    constructor(page: Page) {

        this.page = page;
        this.navigationPage = new Naviagation_Page(this.page);
        this.formsLayoutPage = new Forms_layoutpage(this.page);
        this.datePickerpage = new DatePickerpage(this.page);

    }

    Nav_topage() {



        return this.navigationPage
    }

    formpager() {

        return this.formsLayoutPage
    }

    onDatepickerPage() {

        return this.datePickerpage
    }















}