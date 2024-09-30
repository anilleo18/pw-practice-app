import { test, Locator, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200");

})

test.describe('Suite -1 : UI Components', () => {


    test.beforeEach(async ({ page }) => {

        await page.locator('[title="Forms"]').click();
        await page.locator('[title="Form Layouts"]').click();

    })

    test('First UI Componet: Input Fields ', async ({ page }) => {

        //First finding the locator of email : 
        const Locator_EmailBox: Locator = page.locator('nb-card', { hasText: 'Using the Grid' })
            .getByRole('textbox', { name: 'Email' });

        await Locator_EmailBox.fill("anilleo18@gmail.com");
        await Locator_EmailBox.clear();
        // Here i am delaying every 2 sec for one charecter that is going to type in Email Box 
        await Locator_EmailBox.pressSequentially("Test@mailsac.com", { delay: 500 });

        //generic Assertion:

        // This method will get value out what we entered :inputvlue(),not liketext context:
        //for expect Async is not required due to validating only string 
        const Value_extracted_frm_Email: string = await Locator_EmailBox.inputValue();
        expect(Value_extracted_frm_Email).toEqual("Test@mailsac.com")

        //Locator Assertion :After email enetered into field directly if iwant to assert with loator 
        //the use  toHaveValue() method to extarct text which we enetered a second ago :
        //await is required becoause it is performing promise operation to extract value 
        await expect(Locator_EmailBox).toHaveValue("Test@mailsac.com")

    })

    test('Second Component: Radio Buttons', async ({ page }) => {

        //First finding the locator of radio button : 
        //const Locator_Radiobutton: Locator = page.locator('nb-card', { hasText: 'Using the Grid' }).locator('span', { hasText: 'option2' });
        const Locator_Radiobutton: Locator = page.locator('nb-card', { hasText: 'Using the Grid' }).locator('span', { hasText: 'option 1' });

        //const Locator_Radiobutton1: Locator = page.locator('nb-card', { hasText: 'Using the Grid' }).getByText('option 1');
        // or esle you can write in this way as well
        await Locator_Radiobutton.check({ force: true })

        //Second type of locating with role 
        const Locator_Radiobutton_2: Locator = page.locator('nb-card', { hasText: 'Using the Grid' }).getByRole('radio', { name: 'option 2' });
        await Locator_Radiobutton_2.check({ force: true });

        //two type of genric Assertion are there : 
        //type: 1 just check the boolean value.
        const flag_radio_2: boolean = await Locator_Radiobutton_2.isChecked()
        expect(flag_radio_2).toBeTruthy();

        //Locator way of checking is : use locator directly inside and validate it to be checked or not 
        await expect(Locator_Radiobutton_2).toBeChecked();

        //Now checking after clicking option 1 option 2 should be unchecked
        const flag_radio_1: boolean = await Locator_Radiobutton.isChecked()
        expect(flag_radio_1).toBeFalsy();

    })

})





test.describe('Suite - 2 : UI Componets', () => {

    test.beforeEach(async ({ page }) => {

        await page.getByTitle('Modal & Overlays').click();
        await page.locator('[title="Toastr"]').click();
    }
    )

    test('Third UI component: check Boxes :', async ({ page }) => {

        //if its already checked ,check() method will not care much sit idle :
        const Locator_checkbox1: Locator = page.getByLabel('Hide on click');
        Locator_checkbox1.check({ force: true });


        // Above is one style on clicking and below is other style :
        await page.getByRole('checkbox', { name: 'Hide on click' }).uncheck({ force: true });

        // Now clciking on check box - 2 // Traget to click on check box 
        await page.getByRole('checkbox', { name: 'Prevent arising of duplicate toast' }).check({ force: true });


        //Now performing all box uncheck with for loop://targeting multiple checkboxes :

        const Locators_Allcheckboxes: Locator = page.getByRole('checkbox');

        for (const element of await Locators_Allcheckboxes.all()) {

            await element.uncheck({ force: true });
            expect(await element.isChecked()).toBeFalsy();


        }





    })


    // test('fourth UI component: Select list box :', async ({ page }) => {


    //     const Locator_selectbutton: Locator = page.locator('ngx-header nb-select');
    //     await Locator_selectbutton.click();

    //     // page.getByRole('list'); //will be use when we have UL tag
    //     // page.getByRole('listitem'); //will be use when we have LI tag

    //     //Here we are throwing all elements into a const and filtering what we need 
    //     //step 2: After filtering with name Cosmic we are performing click action on Cosmic 
    //     const Locator_optionlist: Locator = page.locator('nb-option-list nb-option');
    //     await expect(Locator_optionlist).toHaveText(["Light", "Dark", "Cosmic", "Corporate"]);
    //     await Locator_optionlist.filter({ hasText: "Cosmic" }).click();



    //     //Now we want to go little bit Adavance mode :
    //     //we want to verify color is changing after click with RGB values:

    //     const header = page.locator('nb-layout-header');
    //     // await expect(header).toHaveCSS('background-color', 'rgb(50,50,89)');

    //     const colors = {
    //         "Light": "rgb(50,50,89)",
    //         "Dark": "rgb(34,43,69)",
    //         "Cosmic": "rgb(50,50,89)",
    //         "Corporate": "rgb(255,255,255)",

    //     }

    //     for (const color in colors) {
    //         await Locator_optionlist.filter({ hasText: color }).click();
    //         // if we want to validate with respective to css for all items 
    //         await expect(header).toHaveCSS('background-color', colors[color]);

    //        //waiting for corportate nd clicking on it 
    //         if(color == 'corporate'){
    //             await Locator_selectbutton.click(); 
    //         }



    //     }

    // })
})






















































