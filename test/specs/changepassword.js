


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
    
       await expect(changePasswordPage.myaccountButton).toBeDisplayed();
    
       await browser.pause(3000);


    })

    it('should be able to go to the change password option button', async()=>{
        
        await changePasswordPage.myaccountButton.click();
        await expect($('//*[@id="tasks"]/a[1]/div/i')).toBeDisplayed();

    })

    it('should able click on  the change password button ', async()=>{
        
        await expect(changePasswordPage.changePassButton).toBeClickable();

    })

    it('should able  to  change password  ', async()=>{
        
        await changePasswordPage.changePassButton.click();
        
        await changePasswordPage.oldPassInput.setValue('Rajneesh123');

        
        await changePasswordPage.newPassword.setValue('Rajneesh987')
         await browser.pause(3000);
       
         await changePasswordPage.confirmPassword.setValue('Rajneesh987')

        
         await changePasswordPage.saveButton.click();
         await browser.pause(3000);


    })
    

})