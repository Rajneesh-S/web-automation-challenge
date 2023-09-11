


import changePasswordPage from "../pageobjects/changePassword.page";

import loginpage from "../pageobjects/loginpage";

describe('Login functionality', () => {
    it('should able to go at the login page  ', async()=>{
                await browser.url('/');
                await browser.pause(3000);
                await expect(browser).toHaveTitle('Login');
     });


  it('should be able to login', async () => {
    await browser.url('/');
    await $('[id="Inpatient Ward"]').click();
    await loginpage.login('virat', 'Rajneesh123');
    await expect(browser).toHaveTitle('Home');
  });
});



describe('change the password',function(){
    it('should be able to get my account button', async()=>{
        await $('//*[@id="navbarSupportedContent"]/ul/li[1]').click();
    //    let myaccountButton = await $('//*[@id="user-account-menu"]/li/a');
       await expect(changePasswordPage.myaccountButton).toBeDisplayed();
    //    await myaccountButton.click()
       await browser.pause(3000);


    })

    it('should be able to go to the change password option button', async()=>{
        // let myaccountButton = await $('//*[@id="user-account-menu"]/li/a');
        await changePasswordPage.myaccountButton.click();
        await expect($('//*[@id="tasks"]/a[1]/div/i')).toBeDisplayed();

    })

    it('should able click on  the change password button ', async()=>{
        // let changePassButton = await $('//*[@id="tasks"]/a[1]/div/i');
        await expect(changePasswordPage.changePassButton).toBeClickable();

    })

    it('should able  to  change password  ', async()=>{
        // let changePassButton = await $('//*[@id="tasks"]/a[1]/div/i');
        await changePasswordPage.changePassButton.click();
        // let oldPassInput = await $('#oldPassword-field');
        await changePasswordPage.oldPassInput.setValue('Rajneesh123');

         await $('#newPassword-field').setValue('Rajneesh987');
         await browser.pause(3000);
        //  let confirmPassword = await $('#confirmPassword-field');
         await changePasswordPage.confirmPassword.setValue('Rajneesh987')

        //  let saveButton = await $('#save-button');
         await changePasswordPage.saveButton.click();
         await browser.pause(3000);


    })
    

})