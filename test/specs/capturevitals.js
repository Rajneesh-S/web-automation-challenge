

import captueVitalPage from "../pageobjects/captueVital.page";

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



describe('cheking the capture vitals', function(){
    it('should be visible ', async()=>{
        
        await expect(captueVitalPage.vitalicon).toBeDisplayed();
        await browser.pause(3000);

    })
    it('should be clickable',async()=>{
        
        await expect(captueVitalPage.capturevitalButton).toBeClickable();
        await captueVitalPage.capturevitalButton.click(); 

        await browser.pause(3000);
    }) 
    
    


    it('should be able to search by name',async()=>{
       
        await captueVitalPage.serachButton.setValue('rishi');
        
        await expect(captueVitalPage.patienttaable).toBeDisplayed();
        await browser.pause(3000);

    })

   

    

    it('should able to go to the record vital page', async()=>{
        
        await captueVitalPage.patienttaable.click();
       
        await captueVitalPage.confirmvital.click();
        await expect($('//*[@id="vitals"]/fieldset[1]/h3')).toBeDisplayed();

    })

    it('should get error notification after entering height more than limit ',async()=>{
       
        await captueVitalPage.heightInput.setValue(400);
        
        await captueVitalPage.nextButtonp.click()
        await expect($('//*[@id="w7"]')).toBeDisplayed();

    })//negative test

    it('should be able to fill the height',async()=>{
        
        await captueVitalPage.heightInput.setValue(170);
        
        await captueVitalPage.nextButtonp.click();
       
        await expect(captueVitalPage.frombreadcrumbs).toBeDisplayed();

    })


    it('should be able to fill the wieght',async()=>{
        
        await captueVitalPage.wightInput.setValue(80);
       
        await captueVitalPage.nextButtonp.click();
      
        await expect(captueVitalPage.vitals).toBeDisplayed();
        
    })

    it('should be able to save the record after filling only  hieght and weight  ',async()=>{
        
        await captueVitalPage.confirmButton.click();
        
        
        await expect(captueVitalPage.confirmques).toBeDisplayed();
        
    })//negative test


   
    
})