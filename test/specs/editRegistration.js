

import editRegistrationInfoPage from "../pageobjects/editRegistrationInfo.page";
import loginpage from "../pageobjects/loginpage";
import captueVitalPage from "../pageobjects/captueVital.page";


describe('Login functionality', () => {
    it('should able to go at the login page  ', async()=>{
                await browser.url('/');
                await browser.pause(3000);
                await expect(browser).toHaveTitle('Login');
     });


  it('should be able to login', async () => {
    await browser.url('/');
    await $('[id="Inpatient Ward"]').click();
    await loginpage.login('admin', 'Admin123');
    await expect(browser).toHaveTitle('Home');
  });
});





describe('register a patient',function(){
    it('register patient',async()=>{
        
        await captueVitalPage.registerpatient.click();

        
        await captueVitalPage.givenname.setValue('rishi');
        await captueVitalPage.familyname.setValue('singh');
       
        await captueVitalPage.nextButton.click();

       
        await captueVitalPage.genderfield.click();

        
        await captueVitalPage.gfop1.click();
       
        await captueVitalPage.nextButtonicon.click();
        
        await captueVitalPage.birthdate.setValue('12');
        
        await captueVitalPage.birthmonth.selectByAttribute('value','2');
        
        
        await captueVitalPage.birthyear.setValue('2023');
        await $('#next-button').click();

        
        await captueVitalPage.address.setValue('qwer');
        
        await captueVitalPage.confirmation.click();
        await $('//*[@id="submit"]').click();
        await browser.pause(4000);
        
        await captueVitalPage.openmrs.click();
        
        await captueVitalPage.startvisit.click();
        
        await captueVitalPage.breadcrumbs.click();
  
        
    })

})

describe('edit the registration information', function(){
    it('should able to goto the patient record page', async()=>{
        
        await editRegistrationInfoPage.patientRecordButton.click();
         await browser.pause(3000);

       
        await expect(editRegistrationInfoPage.check).toBeDisplayed()
       
    })

    it('should be able to search patient ',async()=>{
        
        await editRegistrationInfoPage.patientsearch.setValue('gill');
        await browser.pause(3000);
       
        
        

    })

    it('should be able to goto the  patient details page ',async()=>{
        
        await editRegistrationInfoPage.patientsearchtable.click();

    
     })

    it('should be able to visit the edit information page', async()=>{

       
        await editRegistrationInfoPage.editinfo.click();

        
       
        expect(editRegistrationInfoPage.editinfocheck).toBeDisplayed();

    })

    it('should be able to edit the name in demographics ', async()=>{

        
        await editRegistrationInfoPage.demography.click()
       await browser.pause(3000);

       
        
        await editRegistrationInfoPage.givenNameInput.setValue('rohit');

        
        
        await editRegistrationInfoPage.saveform.click();
       

       
        await editRegistrationInfoPage.confirmButton.click();
        
         let textName = await editRegistrationInfoPage.text.getText();



        await expect(textName).toEqual('rohit');

       
        await browser.pause(4000);

    })

    it('should be able to visit the edit the contact info page', async()=>{
    
       await editRegistrationInfoPage.editContactinfo.click();
       await expect($('//*[@id="content"]/h2')).toBeDisplayed();
        
        

       

    })

    it('should be abale to edit the adress ', async()=>{
        
        await editRegistrationInfoPage.address1.setValue('domlur');

      
        await editRegistrationInfoPage.saveButton.click();

        
        await expect(editRegistrationInfoPage.phonenumberlabel).toBeDisplayed();
    })

    it('should be abale to edit the phone number  less than 10', async()=>{
        let phoneNumber  = await editRegistrationInfoPage.phnum;
        await phoneNumber.setValue('5678');

        
   
        await editRegistrationInfoPage.nextButton.click();

        
        await expect(editRegistrationInfoPage.phcheck).toBeDisplayed();
    })//negative test

    it('should be abale to edit the phone number ', async()=>{
       
        await editRegistrationInfoPage.phoneNumber.click();

        
        await editRegistrationInfoPage.editphoneNumber.setValue('9787654532');

        
        
        await editRegistrationInfoPage.nextButton.click();


    
        await expect(editRegistrationInfoPage.phcheck).toBeDisplayed();

        
        await editRegistrationInfoPage.submitButton.click();
    })



})