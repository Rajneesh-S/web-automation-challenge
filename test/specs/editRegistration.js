

import editRegistrationInfoPage from "../pageobjects/editRegistrationInfo.page";
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



describe('register a patient',function(){
    it('register patient',async()=>{
        await $('#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension').click();
        await $('[name="givenName"]').setValue('gill');
        await $('[name="familyName"]').setValue('singh');
        await $('#next-button').click();
        await $('#gender-field').click();
        await $('//*[@id="gender-field"]/option[1]').click();
        await $('//*[@id="next-button"]/icon').click();
        await $('#birthdateDay-field').setValue('12');
        await $('#birthdateMonth-field').selectByAttribute('value','2');
        await $('#birthdateYear-field').setValue('2023');
        await $('#next-button').click();
        await $('#address1').setValue('qwer');
        await $('#confirmation_label').click();
        await $('//*[@id="submit"]').click();
        await browser.pause(4000);
        await $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]').click();
        await $('#start-visit-with-visittype-confirm').click();
        await $('//*[@id="breadcrumbs"]/li[1]/a/i').click();
  
        
    })

})

describe('edit the registration information', function(){
    it('should able to goto the patient record page', async()=>{
        // let patientRecordButton = await $('//*[@id="coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension"]');
        await editRegistrationInfoPage.patientRecordButton.click();
         await browser.pause(3000);

        await expect($('//*[@id="content"]/h2')).toBeDisplayed();
       
    })

    it('should be able to search patient ',async()=>{
        // let serachButton = await $('#patient-search');
        await $('//*[@id="patient-search"]').setValue('gill');
        await browser.pause(3000);
        // await expect($('//*[@id="patient-search-results-table"]/tbody/tr/td[2]')).toBeDisplayed();
        
        

    })

    it('should be able to goto the  patient details page ',async()=>{
        await $('//*[@id="patient-search-results-table"]/tbody/tr/td[2]').click();

    
     })

    it('should be able to visit the edit information page', async()=>{

        await $('//*[@id="application.registrationapp.summary.editPatientLink"]/div/div[2]').click();

        
        expect('//*[@id="content"]/div[9]/div[1]/div/div[1]/div[1]/div[1]/h3').toBeDisplayed();

    })

    it('should be able to edit the name in demographics ', async()=>{

        await $('#demographics-edit-link').click();
       await browser.pause(3000);

        // let givenNameInput = await $('[name="givenName"]');
        
        await editRegistrationInfoPage.givenNameInput.setValue('rohit');

        
        await $('#save-form').click();
       

        // let confirmButton = await $('#registration-submit');
        await editRegistrationInfoPage.confirmButton.click();
        let textName = await $('//*[@id="content"]/div[9]/div[1]/div/div[1]/div[1]/div[2]/div[1]/p').getText();

        await expect(textName).toEqual('rohit');

       
        await browser.pause(4000);

    })

    it('should be able to visit the edit the contact info page', async()=>{
    //    let editContactinfo =  await $('#contactInfo-edit-link');
       await editRegistrationInfoPage.editContactinfo.click();
       await expect($('//*[@id="content"]/h2')).toBeDisplayed();
        
        

       

    })

    it('should be abale to edit the adress ', async()=>{
        // let address1 = await $('//*[@id="address1"]');
        await editRegistrationInfoPage.address1.setValue('domlur');

        // let saveButton = await $('//*[@id="next-button"]/icon');
        await editRegistrationInfoPage.saveButton.click();

        await expect($('//*[@id="phoneNumberLabel"]/p/label')).toBeDisplayed();
    })

    it('should be abale to edit the phone number  less than 10', async()=>{
        let phoneNumber  = await $('[name="phoneNumber"]');
        await phoneNumber.setValue('5678');

        
       await  $('#next-button').click();

        await expect($('//*[@id="dataCanvas"]/div/p[2]/span')).toBeDisplayed();
    })//negative test

    it('should be abale to edit the phone number ', async()=>{
        // let phoneNumber  = await $('//*[@id="formBreadcrumb"]/li[1]/ul/li[2]/span');
        await editRegistrationInfoPage.phoneNumber.click();

        // let editphoneNumber = await $('[name="phoneNumber"]');
        await editRegistrationInfoPage.editphoneNumber.setValue('9787654532');

        
        await $('#next-button').click();

        await expect($('//*[@id="dataCanvas"]/div/p[2]/span')).toBeDisplayed();

        // let submitButton =await $('#registration-submit');
        await editRegistrationInfoPage.submitButton.click();
    })



})