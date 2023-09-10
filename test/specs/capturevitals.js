// import { expect } from 'chai';

describe(' visit the login page', function(){
    it('should able to go at the login page  ', async()=>{
        await browser.url('/');
        await browser.pause(3000);
        await expect(browser).toHaveTitle('Login');
    })

    it('should able to login',async()=>{
        let userName = await $('[id="username"]');
        await userName.setValue('admin');
        let userPassword = await $('[id="password"]');
        await userPassword.setValue('Admin123');
        await $('[id="Inpatient Ward"]').click();
        await $('[id="loginButton"]').click();
        // await browser.pause(3000);
        await expect(browser).toHaveTitle('Home');

    })
    
    
})

describe('register a patient',function(){
    it('register patient',async()=>{
        await $('#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension').click();
        await $('[name="givenName"]').setValue('rishi');
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



describe('cheking the capture vitals', function(){
    it('should be visible ', async()=>{
        await expect($('[class="icon-vitals"]')).toBeDisplayed();
        await browser.pause(3000);

    })
    it('should be clickable',async()=>{
        let capturevitalButton = await $('[class="icon-vitals"]');
        await expect(capturevitalButton).toBeClickable();
        await capturevitalButton.click(); 

        await browser.pause(3000);
    }) 
    
    // it('should be able to search by identifier id',async()=>{
    //     let serachButton = await $('[id="patient-search"]');
    //     await serachButton.setValue('10012R');
    //     await expect($('//*[@id="patient-search-results-table"]/tbody/tr[1]/td[2]')).toBeDisplayed();
    //     await browser.pause(2000);
        
    // })


    it('should be able to search by name',async()=>{
        let serachButton = await $('[id="patient-search"]');
        await serachButton.setValue('rishi');
        await expect($('//*[@id="patient-search-results-table"]/tbody/tr[1]/td[2]')).toBeDisplayed();
        await browser.pause(3000);

    })

   

    

    it('should able to go to the record vital page', async()=>{
        await $('//*[@id="patient-search-results-table"]/tbody/tr/td[2]').click();
        await $('//*[@id="coreapps-vitals-confirm"]/i').click();
        await expect($('//*[@id="vitals"]/fieldset[1]/h3')).toBeDisplayed();

    })

    it('should get error notification after entering height more than limit ',async()=>{
        let heightInput = await $('//*[@id="w8"]');
        await heightInput.setValue(400);
        await $('//*[@id="next-button"]/icon').click();
        await expect($('//*[@id="w7"]')).toBeDisplayed();

    })//negative test

    it('should be able to fill the height',async()=>{
        let heightInput = await $('//*[@id="w8"]');
        await heightInput.setValue(170);
        await $('//*[@id="next-button"]/icon').click();
        await expect($('//*[@id="formBreadcrumb"]/li[1]/ul/li[1]/i')).toBeDisplayed();

    })


    it('should be able to fill the wieght',async()=>{
        let wightInput = await $('//*[@id="w10"]');
        await wightInput.setValue(80);
        await $('//*[@id="next-button"]/icon').click();
        await expect($('//*[@id="vitals"]/fieldset[3]/h3')).toBeDisplayed();
        
    })

    it('should be able to save the record after filling only  hieght and weight  ',async()=>{
        let confirmButton = await $('//*[@id="formBreadcrumb"]/li[2]/span');
        await confirmButton.click();
        
        await expect($('//*[@id="confirmationQuestion"]/p[1]/button')).toBeDisplayed();
        
    })//negative test


   
    
})