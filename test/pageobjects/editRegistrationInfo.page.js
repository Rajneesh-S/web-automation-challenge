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


    get check(){
        return $('//*[@id="content"]/h2')
    }
    

    get patientsearch(){
        return $('//*[@id="patient-search"]')
    } 

    get patientsearchtable(){
        return $('//*[@id="patient-search-results-table"]/tbody/tr/td[2]');
    }

    get editinfo(){
        return $('//*[@id="application.registrationapp.summary.editPatientLink"]/div/div[2]')
    }

    get editinfocheck(){
        return $('//*[@id="content"]/div[9]/div[1]/div/div[1]/div[1]/div[1]/h3');

    }

    get demography(){
        return  $('#demographics-edit-link');

    }

    get saveform(){
        return  $('#save-form');

    }

    get text(){
        return $('//*[@id="content"]/div[9]/div[1]/div/div[1]/div[1]/div[2]/div[1]/p');

    }

    get phonenumberlabel(){
        return $('//*[@id="phoneNumberLabel"]/p/label');
    }

    get phnum(){
        return  $('[name="phoneNumber"]');
    }

    get nextButton(){
        return  $('#next-button');
    }
    

    get phcheck(){
        return  $('//*[@id="dataCanvas"]/div/p[2]/span');
    }

}
export default new editRegistrationDetails();