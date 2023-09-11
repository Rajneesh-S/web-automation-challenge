class editRegistrationDetails{
    get  patientRecordButton(){
        return $('//*[@id="coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension"]');

    }
    get  serachButton(){
        return $('#patient-search');
        
    }
    get serachButton(){
        return $('//*[@id="list-accounts_filter"]/label/input');
        
    }
    get givenNameInput(){
        return $('[name="givenName"]');
        
    }

    get confirmButton(){
        return $('#registration-submit');
    }

    get editContactinfo(){
        return  $('#contactInfo-edit-link');
    }
    get address1(){
        return $('//*[@id="address1"]');
    }
    get  saveButton(){
        return $('//*[@id="next-button"]/icon');
    }

    get  phoneNumber (){
        return $('//*[@id="formBreadcrumb"]/li[1]/ul/li[2]/span');
    }
   
    get editphoneNumber(){
        return $('[name="phoneNumber"]');
    }

    get submitButton(){
        return $('#registration-submit');
    }

}
export default new editRegistrationDetails();