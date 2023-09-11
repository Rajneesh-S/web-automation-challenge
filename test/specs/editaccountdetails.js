


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
    await loginpage.login('raj', 'Rajneesh123');
    await expect(browser).toHaveTitle('Home');
  });
});


describe('edit the account information', function(){
    it('should able to goto the manage accounts', async()=>{
        // let systemadministrationButton = await $('//*[@id="coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension"]/i');
        await editAccountPage.systemadministrationButton.click();
        // let manageAccountButton = await $('#org-openmrs-module-adminui-accounts-app');
        await editAccountPage.manageAccountButton.click();

        await expect($('//*[@id="content"]/a')).toBeDisplayed();
    })

    it('should be able to search user',async()=>{
        // let serachButton = await $('//*[@id="list-accounts_filter"]/label/input');
        await  editAccountPage.serachButton.setValue('Raj');
        await expect($('//*[@id="list-accounts"]/tbody/tr/td[1]')).toBeDisplayed();
        

    })
    it('should be able to goto the  edit  person details and click on edit button ',async()=>{
        // let editButton = await $('//*[@id="list-accounts"]/tbody/tr/td[5]/i');
        await editAccountPage.editButton.click();
        // let textPersonDetails = await $('//*[@id="adminui-person-details"]/form/div/fieldset/legend');
        
        await expect(editAccountPage.textPersonDetails).toBeDisplayed();
       


    })

    it('should be able to edit the person given name', async()=>{

        await $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/i').click();

        // let personNameInputButton = await $('//*[@id="adminui-givenName-field"]');
        await editAccountPage.personNameInputButton.click();
        await editAccountPage.personNameInputButton.setValue('Raja');
        // let saveButton = await $('//*[@id="adminui-person-save"]');
        await editAccountPage.saveButton.click();
        await browser.pause(5000);
        let changeName = await $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/table/tbody/tr[2]/td').getText();
        expect(changeName).toEqual('Raja');

    })

    it('should be able to edit the person family name', async()=>{

        await $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/i').click();

        // let familyNameInputButton = await $('#adminui-familyName-field');
        await editAccountPage.familyNameInputButton.click();
        await editAccountPage.familyNameInputButton.setValue('mishra');
        await $('//*[@id="adminui-person-save"]').click();
        // let saveButton = await $('//*[@id="adminui-person-save"]');
        // await saveButton.click();
        await browser.pause(3000);
        let changefamilyName = await $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/table/tbody/tr[1]/td').getText();
        expect(changefamilyName).toEqual('mishra');
        await browser.pause(4000);

    })

    


})