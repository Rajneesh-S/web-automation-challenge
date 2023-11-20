class accountSystem{
    get systemadministrationButton(){
        return $('//*[@id="coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension"]/i');
        
    }
      get  manageAccountButton (){
        return  $('#org-openmrs-module-adminui-accounts-app');
        
    }

    get createAccountButton (){
        return $('//*[@id="content"]/a');
    }

    get userName(){
        return $('#adminui-username-field');;
    }
    get userPassword(){
        return $('#adminui-password-field');
    }
    get confirmPassword(){
        return  $('#adminui-confirmPassword-field');
    }
    get selectPrivilage(){
        return $('#adminui-privilegeLevel-field');
    }

    get administrativeCapabilitescheck(){
        return $('//*[@id="adminui-capabilities-Application: Administers System"]');
    }

    get  addProviderAccCheck(){
        return $('#adminui-addProviderAccount');
    }

    get  identifierInput(){
        return $('#adminui-identifier-field');
    }

    get provioderRoleInput(){
        return  $('#adminui-providerRole-field');
    }
    get cancelButton(){
        return  $('#adminui-account-cancel');
    }
    get saveButton(){
        return   $('#save-button');
    }

    get search(){
        return   $('[aria-controls="list-accounts"]');
    }
    
    get foundaccount(){
        return   $('//*[@id="list-accounts"]/tbody/tr/td[1]');
    }

    get familyname(){
        return   $('[id="adminui-familyName-field"]');
    }
    get givenname(){
        return $('#adminui-givenName-field');

    }

    get malebox(){
        return $('//*[@id="adminui-accounts"]/form/div[1]/fieldset/div/p[3]/label');

    }
    get femalebox(){
        return $('//*[@id="adminui-accounts"]/form/div[1]/fieldset/div/p[4]/label')

    }
    get male(){
        return $('#adminui-gender-0-field');
    }
    

} 

export default new accountSystem();