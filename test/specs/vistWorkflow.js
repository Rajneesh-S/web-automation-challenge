

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


describe(' checking the visit workflow for a patient ', function(){
    it('should go to the patient record ',async()=>{
        let findPatient = await $('#coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension');
        await findPatient.click();
        await expect($('//*[@id="content"]/h2')).toBeDisplayed();

    })
    it('should be able to search  patient record ',async()=>{
        let serachButton = await $('//*[@id="patient-search"]');
        await serachButton.setValue('raj kumar');
        await expect($('//*[@id="patient-search-results-table"]/tbody/tr/td[2]')).toBeDisplayed();




        
    })
    it('should able to  reach to the start visit button  ',async()=>{
        await $('//*[@id="patient-search-results-table"]/tbody/tr/td[2]').click();
        let startvisitButton = await $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]');
        await expect(startvisitButton).toBeDisplayed();
        
    })
    it('should be able to start the visit ',async()=>{
        let startvisitButton = await $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]');
        await startvisitButton.click();
        await $('#start-visit-with-visittype-confirm').click();
        await browser.pause(3000);
        
    })
    it('should be able to go through visit note feature in visit  ',async()=>{
        let visitnoteButton = await $('//*[@id="referenceapplication.realTime.simpleVisitNote"]');
        await visitnoteButton.click();
        expect($('//*[@id="data-collection"]/p/label')).toBeDisplayed();
        await $('//*[@id="buttons"]/button').click();
        
        
        
    })
    it('should be able to through the admit to inpatient page ',async()=>{
        let addToInpatientButton = await $('//*[@id="referenceapplication.realTime.simpleAdmission"]');
        await addToInpatientButton.click();
        await expect($('//*[@id="htmlform"]/htmlform/h2/label')).toBeDisplayed(); 
        await $('//*[@id="breadcrumbs"]/li[2]/a').click();
        
    })
    it('should be able to through the capture Vital page',async()=>{
        let captureVitalButton = await $('//*[@id="referenceapplication.realTime.vitals"]');
        await captureVitalButton.click();
        await expect($('//*[@id="formBreadcrumb"]/li[1]/ul/li[1]')).toBeDisplayed(); 
        await $('//*[@id="breadcrumbs"]/li[2]/a').click();

        
    })
    it('should be able to vivit  the attachments page  ',async()=>{
        let attachments = await $('//*[@id="attachments.attachments.visitActions.default"]');
        await attachments.click();
        await expect($('//*[@id="att-page-main"]/div[1]/att-file-upload/div[3]/div/div[1]/h3')).toBeDisplayed(); 
        await $('//*[@id="breadcrumbs"]/li[2]/a').click();
        await browser.pause(5000);
        

        
    })
    // it('should be able to end the visit ',async()=>{
    //     let endvisitButton = await $('//*[@id="referenceapplication.realTime.endVisit"]/div/div[1]');
        
    //     await endvisitButton.click();
    //     await browser.pause(5000);
        
    //     await expect(endvisitButton.isExisting()).toBe(false);
        
        
    // })








})