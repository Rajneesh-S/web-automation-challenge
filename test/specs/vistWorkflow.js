


import visitWorkflowPage from "../pageobjects/visitWorkflow.page";
import loginpage from "../pageobjects/loginpage";

describe('Login functionality', () => {
    it('should able to go at the login page  ', async()=>{
                await browser.url('/');
                await browser.pause(3000);
                await expect(browser).toHaveTitle('Login');
     });


  it('should be able to login', async () => {
    await browser.url('/');
    
    await visitWorkflowPage.inpatientward.click();
    await loginpage.login('admin', 'Admin123');
    await expect(browser).toHaveTitle('Home');
  });
});




describe(' checking the visit workflow for a patient ', function(){
    it('should go to the patient record ',async()=>{
        
        await visitWorkflowPage.findPatient.click();
        
        await expect(visitWorkflowPage.contenth2).toBeDisplayed();
    
    })
    it('should be able to search  patient record ',async()=>{
        
        await visitWorkflowPage.serachButton.setValue('rohit');
        
        await expect(visitWorkflowPage.patientsearchtable).toBeDisplayed();
        await browser.pause(3000);




        
    })
    it('should able to  reach to the start visit button  ',async()=>{
        await $('//*[@id="patient-search-results-table"]/tbody/tr[1]/td[2]').click();
       
        await expect(visitWorkflowPage.startvisitButton).toBeDisplayed();
        
    })
    it('should be able to start the visit ',async()=>{
        
        await visitWorkflowPage.startvisitButton.click();
       
        await visitWorkflowPage.startvisit.click();
        await browser.pause(3000);
        
    })
    it('should be able to go through visit note feature in visit  ',async()=>{
        
        await visitWorkflowPage.visitnoteButton.click();
       
        await expect(visitWorkflowPage.collection).toBeDisplayed();
       
        await visitWorkflowPage.button.click();
        
        
        
    })
    it('should be able to through the admit to inpatient page ',async()=>{
        
        await visitWorkflowPage.addToInpatientButton.click();
        await expect($('//*[@id="htmlform"]/htmlform/h2/label')).toBeDisplayed(); 
        await $('//*[@id="breadcrumbs"]/li[2]/a').click();
        
    })
    it('should be able to through the capture Vital page',async()=>{
        
        await visitWorkflowPage.captureVitalButton.click();
        
        await expect (visitWorkflowPage.form).toBeDisplayed();
        
        await visitWorkflowPage.breadcrumbs.click();

        
    })
    it('should be able to vivit  the attachments page  ',async()=>{
        
        await visitWorkflowPage.attachments.click();
        
        await expect(visitWorkflowPage.fileupload).toBeDisplayed();
        await visitWorkflowPage.breadcrumbs.click();
        await browser.pause(5000);
        

        
    })
    








})