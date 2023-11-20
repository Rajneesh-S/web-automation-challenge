
import accountSystemPage from "../pageobjects/accountSystem.page";

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





describe('checking the accounts in system administration', function(){
    it('should go to system administration and check its  availbilty',async()=>{

       
        
        await expect(accountSystemPage.systemadministrationButton).toBeDisplayed();
        await expect(accountSystemPage.systemadministrationButton).toBeClickable();
        await accountSystemPage.systemadministrationButton.click();
    })

    it('should check the avilbility of manage accounts', async()=>{
        
        await expect(accountSystemPage.manageAccountButton).toBeDisplayed();
        await expect(accountSystemPage.manageAccountButton).toBeClickable();
        await accountSystemPage.manageAccountButton.click();
        await browser.pause(3000);

        

    })
})


    











describe('checking the functionalities in manage accounts', function(){
    it('should be able to search', async()=>{
        
        await accountSystemPage.search.setValue('Su');
        
        await expect(accountSystemPage.foundaccount).toBeDisplayed();
        await browser.pause(2000);
    })

    it('should be able to add person details in Add new account',async()=>{
       
        await accountSystemPage.createAccountButton.click();
       
        await accountSystemPage.familyname.setValue('Singh');
        
        await accountSystemPage.givenname.setValue('Raj');

        
        
        await expect(accountSystemPage.malebox).toBeClickable();
        
        await expect(accountSystemPage.femalebox).toBeClickable();
        
        let male = await accountSystemPage.male.click();
 
    })

    it('should be able to fill user accounts details', async()=>{
        await $('#adminui-addUserAccount').click();
    
        await accountSystemPage.userName.setValue('virat');
       
        await accountSystemPage.userPassword.setValue('Rajneesh123');
       
        await accountSystemPage.confirmPassword.setValue('Rajneesh123');
        await browser.pause(4000);
       
        await accountSystemPage.selectPrivilage.selectByAttribute('value','ab2160f6-0941-430c-9752-6714353fbd3c');

        let forcepasswordchange = await $('#adminui-forceChangePassword');
        await expect(forcepasswordchange).toBeClickable();

        

  

    })


    
    it('sould be able to select evry checkppoint',async()=>{
        
        await expect(accountSystemPage.administrativeCapabilitescheck).toBeClickable();
        await accountSystemPage.administrativeCapabilitescheck.click();
        await $('//*[@id="adminui-capabilities-Application: Configures Forms"]').click();
        await $('//*[@id="adminui-capabilities-Application: Edits Existing Encounters"]').click();

        await $('//*[@id="adminui-capabilities-Application: Enters Vitals"]').click();

        await $('//*[@id="adminui-capabilities-Application: Manages Atlas"]').click();

        await $('//*[@id="adminui-capabilities-Application: Records Allergies"]').click();

        await $('//*[@id="adminui-capabilities-Application: Requests Appointments"]').click();

        await $('//*[@id="adminui-capabilities-Application: Schedules Appointments"]').click();

        await $('//*[@id="adminui-capabilities-Application: Uses Capture Vitals App"]').click();

        await $('//*[@id="adminui-capabilities-Application: Writes Clinical Notes"]').click();

        await $('//*[@id="adminui-capabilities-Application: Configures Appointment Scheduling"]').click();

        await $('//*[@id="adminui-capabilities-Application: Configures Metadata"]').click();

        await $('//*[@id="adminui-capabilities-Application: Enters ADT Events"]').click();

        await $('//*[@id="adminui-capabilities-Application: Has Super User Privileges"]').click();

        await $('//*[@id="adminui-capabilities-Application: Manages Provider Schedules"]').click();
        await $('//*[@id="adminui-capabilities-Application: Registers Patients"]').click();

        await $('//*[@id="adminui-capabilities-Application: Schedules And Overbooks Appointments"]').click();

        await $('//*[@id="adminui-capabilities-Application: Sees Appointment Schedule"]').click();

        await $('//*[@id="adminui-capabilities-Application: Uses Patient Summary"]').click();

        await browser.pause(4000);




    })

    it('should be able to fill provider details',async()=>{
    
        await expect(accountSystemPage.addProviderAccCheck).toBeClickable();
        await accountSystemPage.addProviderAccCheck.click();

        
        await accountSystemPage.identifierInput.setValue('harsh');
        
        await accountSystemPage.provioderRoleInput.selectByAttribute('value','c110f9bc-c65f-44a2-a028-2af7e8fff534');
        await browser.pause(6000);
     })

     it('shouuld be able to save and cancel ', async()=>{
    
        await expect(accountSystemPage.cancelButton).toBeClickable();
        
        await expect(accountSystemPage.saveButton).toBeClickable();
        await accountSystemPage.saveButton.click();
        await browser.pause(5000);

     })


})



