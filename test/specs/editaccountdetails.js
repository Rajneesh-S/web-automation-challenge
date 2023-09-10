
describe(' visit the login page', function(){
    it('should able to go at the login page  ', async()=>{
        await browser.url('/');
        // await browser.pause(3000);
        await expect(browser).toHaveTitle('Login');
    })

    it('should able to login',async()=>{
        let userName = await $('[id="username"]');
        await userName.setValue('raj');
        let userPassword = await $('[id="password"]');
        await userPassword.setValue('Rajneesh123');
        await $('[id="Inpatient Ward"]').click();
        await $('[id="loginButton"]').click();
        // await browser.pause(3000);
        await expect(browser).toHaveTitle('Home');

    })
    
    
})

describe('edit the account information', function(){
    it('should able to goto the manage accounts', async()=>{
        let systemadministrationButton = await $('//*[@id="coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension"]/i');
        await systemadministrationButton.click();
        let manageAccountButton = await $('#org-openmrs-module-adminui-accounts-app');
        await manageAccountButton.click();

        await expect($('//*[@id="content"]/a')).toBeDisplayed();
    })

    it('should be able to search user',async()=>{
        let serachButton = await $('//*[@id="list-accounts_filter"]/label/input');
        await serachButton.setValue('Raj');
        await expect($('//*[@id="list-accounts"]/tbody/tr/td[1]')).toBeDisplayed();
        

    })
    it('should be able to goto the  edit  person details and click on edit button ',async()=>{
        let editButton = await $('//*[@id="list-accounts"]/tbody/tr/td[5]/i');
        await editButton.click();
        let textPersonDetails = await $('//*[@id="adminui-person-details"]/form/div/fieldset/legend');
        
        await expect(textPersonDetails).toBeDisplayed();
       


    })

    it('should be able to edit the person given name', async()=>{

        await $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/i').click();

        let personNameInputButton = await $('//*[@id="adminui-givenName-field"]');
        await personNameInputButton.click();
        await personNameInputButton.setValue('Raja');
        let saveButton = await $('//*[@id="adminui-person-save"]');
        await saveButton.click();
        await browser.pause(5000);
        let changeName = await $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/table/tbody/tr[2]/td').getText();
        expect(changeName).toEqual('Raja');

    })

    it('should be able to edit the person family name', async()=>{

        await $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/i').click();

        let familyNameInputButton = await $('#adminui-familyName-field');
        await familyNameInputButton.click();
        await familyNameInputButton.setValue('mishra');
        let saveButton = await $('//*[@id="adminui-person-save"]');
        await saveButton.click();
        await browser.pause(3000);
        let changefamilyName = await $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/table/tbody/tr[1]/td').getText();
        expect(changefamilyName).toEqual('mishra');
        await browser.pause(4000);

    })

    it('should be able to change the username of the user', async()=>{
        await $('//*[@id="6b464e80-b5be-431d-9cf0-970a8d027df8"]/div[1]/i').click();
        
        let usernameInput = await $('//*[@id="adminui-username6b464e80-b5be-431d-9cf0-970a8d027df8-field"]');
        await usernameInput.setValue('rajneesh');

        let saveButton = await $('#adminui-user-save6b464e80-b5be-431d-9cf0-970a8d027df8');
        await saveButton.click();

       

    })


})