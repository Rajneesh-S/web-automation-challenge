class captureVital{
    get capturevitalButton(){
        return $('[class="icon-vitals"]');

    }
    get  serachButton(){
        return  $('[id="patient-search"]');
        
    }
    get  heightInput(){
        return $('//*[@id="w8"]');
        
    }
    get  wightInput(){
        return $('//*[@id="w10"]');
        
    }

    get confirmButton(){
        return  $('//*[@id="formBreadcrumb"]/li[2]/span');
    }

    get registerpatient(){
        return  $('#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension');
    }
    get familyname(){
        return  $('[name="familyName"]');
    }
    get givenname(){
        return $('[name="givenName"]');
    }
    get nextButton(){
        return $('#next-button');
    }

    get genderfield(){
        return $('#gender-field');
    }
    get gfop1(){
        return $('//*[@id="gender-field"]/option[1]');
    }
    get nextButtonicon(){
        return $('//*[@id="next-button"]/icon');
    }

    get birthdate(){
        return $('#birthdateDay-field');
    }
    
    get birthmonth(){
        return $('#birthdateMonth-field');
    }
    get birthyear(){
        return  $('#birthdateYear-field');
    }
    

    get address(){
        return  $('#address1');
    }

    get confirmation(){
        return  $('#confirmation_label');
    }
    get openmrs(){
        return  $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]');
    }
    get startvisit(){
        return $('#start-visit-with-visittype-confirm');
    }
    
    get breadcrumbs(){
        return $('//*[@id="breadcrumbs"]/li[1]/a/i')
    }

    get vitalicon(){
        return $('[class="icon-vitals"]');
    }

    get patienttaable(){
        return $('//*[@id="patient-search-results-table"]/tbody/tr[1]/td[2]');
    }
    get confirmvital(){
        return $('//*[@id="coreapps-vitals-confirm"]/i');
    }
    get nextButtonp (){
        return $('//*[@id="next-button"]/icon');
    }
    get frombreadcrumbs(){
        return $('//*[@id="formBreadcrumb"]/li[1]/ul/li[1]/i');
    }
    get vitals(){
        return $('//*[@id="vitals"]/fieldset[3]/h3');
    }

    get confirmques(){
        return $('//*[@id="confirmationQuestion"]/p[1]/button');
    }

}
export default new captureVital();