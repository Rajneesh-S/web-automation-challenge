


import editAccountPage from "../pageobjects/editAccount.page";

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


describe('edit the account information', function(){
    it('should able to goto the manage accounts', async()=>{
        
        await editAccountPage.systemadministrationButton.click();
        
        await editAccountPage.manageAccountButton.click();

       
        await expect (editAccountPage.content).toBeDisplayed();
    })

    it('should be able to search user',async()=>{
       
        await  editAccountPage.serachButton.setValue('Raj');
        
        await expect(editAccountPage.list).toBeDisplayed();
        

    })
    it('should be able to goto the  edit  person details and click on edit button ',async()=>{
        
        await editAccountPage.editButton.click();
        
        
        await expect(editAccountPage.textPersonDetails).toBeDisplayed();
       


    })

    it('should be able to edit the person given name', async()=>{

      
        await editAccountPage.persondetails.click()

        
        await editAccountPage.personNameInputButton.click();
        await editAccountPage.personNameInputButton.setValue('Raja');
       
        await editAccountPage.saveButton.click();
        await browser.pause(5000);
         let changeName = await editAccountPage.persontr2.getText();
        
        expect(changeName).toEqual('Raja');

    })

    it('should be able to edit the person family name', async()=>{

        
        await editAccountPage.persondetails.click();

        
        await editAccountPage.familyNameInputButton.click();
        await editAccountPage.familyNameInputButton.setValue('mishra');
        
        await editAccountPage.saveButton.click();
        
        await browser.pause(3000);
         let changefamilyName = await editAccountPage.save.getText();

        expect(changefamilyName).toEqual('mishra');
        await browser.pause(4000);

    })

    


})