import { expect, Locator, test } from '@playwright/test'

test('Default test timeout', async ({ page }) => {

    await page.goto("http://www.uitestingplayground.com/ajax");
    const Button_ajax: Locator = page.getByRole('button', { name: 'Button Triggering AJAX Request' });
    await Button_ajax.click();

    const Loc_greenflag: Locator = page.locator('.bg-success');


    // //wait for particular locator 
    // await page.waitForSelector('.bg-success');

    // //wait for particular Response calls and then proceed  
    // await page.waitForResponse("http://www.uitestingplayground.com/ajaxdata");

    // //Just a general wait ,best only to debug .not a proffesional way of coding 
    // await page.waitForTimeout(6000);


    // textcontent and alltextcontent helps to exract text into string:
    // const greenflag_data: string = await text_greeflag.textContent();
    // expect(greenflag_data).toContain("AJAX")

    await Loc_greenflag.waitFor({ state: "attached" });
    const alltext_arry: string[] = await Loc_greenflag.allTextContents();
    expect(alltext_arry).toContain("Data loaded with AJAX get request.");

    //but toghavetext will extarct from a  locator that is inside expect 
    expect(Loc_greenflag).toHaveText("Data loaded with AJAX get request.", { timeout: 20000 })




})

test('Automwaiting mechanism', async ({ page }) => {

    //even though our timeout is 15000 seconds it will fail because set time out is 10000
    //Always high priortiy for set time out 
    test.setTimeout(10000);


    //this will help default timeout X 3 Times 
    //if i set timeout :10000 is playwright config .ts file .i will multiply 3 time the number 
    test.slow();

    await page.goto("http://www.uitestingplayground.com/ajax");
    const Button_ajax: Locator = page.getByRole('button', { name: 'Button Triggering AJAX Request' });
    await Button_ajax.click({ timeout: 15000 });

    const Loc_greenflag: Locator = page.locator('.bg-success');


    // //wait for particular locator 
    // await page.waitForSelector('.bg-success');

    // //wait for particular Response calls and then proceed  
    // await page.waitForResponse("http://www.uitestingplayground.com/ajaxdata");

    // //Just a general wait ,best only to debug .not a proffesional way of coding 
    // await page.waitForTimeout(6000);


    // textcontent and alltextcontent helps to exract text into string:
    // const greenflag_data: string = await text_greeflag.textContent();
    // expect(greenflag_data).toContain("AJAX")

    await Loc_greenflag.waitFor({ state: "attached" });
    const alltext_arry: string[] = await Loc_greenflag.allTextContents();
    expect(alltext_arry).toContain("Data loaded with AJAX get request.");

    //but toghavetext will extarct from a  locator that is inside expect 
    expect(Loc_greenflag).toHaveText("Data loaded with AJAX get request.", { timeout: 20000 })




})