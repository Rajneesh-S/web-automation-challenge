

describe(' visit the login page', function(){
    it('should able to go at the login page  ', async()=>{
        await browser.url('/');
        // await browser.pause(3000);
        await expect(browser).toHaveTitle('Login');
    })

    it('should able to login',async()=>{
        let userName = await $('[id="username"]');
        await userName.setValue('raj');
        let userPassword = await $('[id="password"]');
        await userPassword.setValue('Rajneesh123');
        await $('[id="Inpatient Ward"]').click();
        await $('[id="loginButton"]').click();
        // await browser.pause(3000);
        await expect(browser).toHaveTitle('Home');

    })
    
    
})

describe('change the password',function(){
    it('should be able to get my account button', async()=>{
       let admin =  await $('//*[@id="navbarSupportedContent"]/ul/li[1]').click();
       let myaccountButton = await $('//*[@id="user-account-menu"]/li/a');
       await expect(myaccountButton).toBeDisplayed();
    //    await myaccountButton.click()
       await browser.pause(3000);


    })

    it('should be able to go to the change password option button', async()=>{
        let myaccountButton = await $('//*[@id="user-account-menu"]/li/a');
        await myaccountButton.click();
        await expect($('//*[@id="tasks"]/a[1]/div/i')).toBeDisplayed();

    })

    it('should able click on  the change password button ', async()=>{
        let changePassButton = await $('//*[@id="tasks"]/a[1]/div/i');
        await expect(changePassButton).toBeClickable();

    })

    it('should able  to  change password  ', async()=>{
        let changePassButton = await $('//*[@id="tasks"]/a[1]/div/i');
        await changePassButton.click();
        let oldPassInput = await $('#oldPassword-field');
        await oldPassInput.setValue('Rajneesh123');

         await $('#newPassword-field').setValue('Rajneesh987');
         await browser.pause(3000);
         let confirmPassword = await $('#confirmPassword-field');
         await confirmPassword.setValue('Rajneesh987')

         let saveButton = await $('#save-button');
         await saveButton.click();
         await browser.pause(3000);


    })
    

})