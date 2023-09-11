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
    

} 

export default new accountSystem();