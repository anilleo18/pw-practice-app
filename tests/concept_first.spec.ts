import { test } from '@playwright/test'




test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/pages/iot-dashboard");
    console.log("hello i am hook ")
})




test.describe('Suite - Alpha', () => {
    test.beforeEach(async ({ page }) => {
        console.log("hello i am inner hook  suite alpha")
        //so if we observe any test it will check for outer hook firstb 
        // step 2: then hook inside suite 
        //step 3: each test method will be executed 

        test('clicking on Auth text', async ({ page }) => {
            await page.getByText('Auth').click();
            await page.getByText('Login').click();
            console.log('alpha M1')


        })

    })

    test('clicking on Login ', async ({ page }) => {

        await page.getByText('Forms').click();
        await page.getByText('Datepicker').click();
        console.log('alpha M2')

    })
}
)

test.describe('Suite - beta', () => {

    test.beforeEach(async ({ page }) => {


        console.log("hello i am inner hook  suite beta")

    })




    test('clicking on Auth text', async ({ page }) => {

        console.log('beta M1')
    })
    test('clicking on Login ', async ({ page }) => {

        console.log('beta M2')

    })
}
)
























// This code is pulled from bordem and modifying with my own techniques and recreating 
//modifying for best practise and make code more scalable and Modularity benfit  