





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



describe('checking the accounts in system administration', function(){
    it('should go to system administration and check its  availbilty',async()=>{

       
        let systemadministrationButton = await $('//*[@id="coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension"]/i');
        await expect(systemadministrationButton).toBeDisplayed();
        await expect(systemadministrationButton).toBeClickable();
        await systemadministrationButton.click();
    })

    it('should check the avilbility of manage accounts', async()=>{
        let manageAccountButton = await $('#org-openmrs-module-adminui-accounts-app');
        await expect(manageAccountButton).toBeDisplayed();
        await expect(manageAccountButton).toBeClickable();
        await manageAccountButton.click();
        await browser.pause(3000);

        

    })
})


    











describe('checking the functionalities in manage accounts', function(){
    it('should be able to search', async()=>{
        await $('[aria-controls="list-accounts"]').setValue('Su');//just searching by start of the word (can do for whole word)
        await expect($('//*[@id="list-accounts"]/tbody/tr/td[1]')).toBeDisplayed();
        await browser.pause(2000);
    })

    it('should be able to add person details in Add new account',async()=>{
        let createAccountButton = await $('//*[@id="content"]/a');
        await createAccountButton.click();
        await $('[id="adminui-familyName-field"]').setValue('Singh');
        await $('#adminui-givenName-field').setValue('Raj');
        
        await expect($('//*[@id="adminui-accounts"]/form/div[1]/fieldset/div/p[3]/label')).toBeClickable();
        await expect($('//*[@id="adminui-accounts"]/form/div[1]/fieldset/div/p[4]/label')).toBeClickable();
        let male = await $('#adminui-gender-0-field').click()

    })

    it('should be able to fill user accounts details', async()=>{
        await $('#adminui-addUserAccount').click();
        let userName = await $('#adminui-username-field');
        await userName.setValue('raj');
        let userPassword = await $('#adminui-password-field');
        await userPassword.setValue('Rajneesh123');
        let confirmPassword = await $('#adminui-confirmPassword-field');
        await confirmPassword.setValue('Rajneesh123');
        await browser.pause(4000);
        let selectPrivilage = await $('#adminui-privilegeLevel-field');
        await selectPrivilage.selectByAttribute('value','ab2160f6-0941-430c-9752-6714353fbd3c');

        let forcepasswordchange = await $('#adminui-forceChangePassword');
        await expect(forcepasswordchange).toBeClickable();

        

    


    

    })
    it('sould be able to select evry checkppoint',async()=>{
        let administrativeCapabilitescheck = await $('//*[@id="adminui-capabilities-Application: Administers System"]');
        await expect(administrativeCapabilitescheck).toBeClickable();
        await administrativeCapabilitescheck.click();
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
        let addProviderAccCheck = await $('#adminui-addProviderAccount');
        await expect(addProviderAccCheck).toBeClickable();
        await addProviderAccCheck.click();

        let identifierInput = await $('#adminui-identifier-field');
        await identifierInput.setValue('harsh');
        let provioderRoleInput  = await $('#adminui-providerRole-field');
        await provioderRoleInput.selectByAttribute('value','c110f9bc-c65f-44a2-a028-2af7e8fff534');
        await browser.pause(6000);
     })

     it('shouuld be able to save and cancel ', async()=>{
        let cancelButton = await $('#adminui-account-cancel');
        await expect(cancelButton).toBeClickable();
        let saveButton = await $('#save-button');
        await expect(saveButton).toBeClickable();
        await saveButton.click();
        await browser.pause(5000);

     })


})