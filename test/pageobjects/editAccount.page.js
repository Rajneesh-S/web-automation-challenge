class editAccountDetails{
    get systemadministrationButton(){
        return $('//*[@id="coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension"]/i');

    }
    get  manageAccountButton(){
        return $('#org-openmrs-module-adminui-accounts-app');
        
    }
    get serachButton(){
        return $('//*[@id="list-accounts_filter"]/label/input');
        
    }
    get editButton(){
        return $('//*[@id="list-accounts"]/tbody/tr/td[5]/i');
        
    }

    get textPersonDetails(){
        return $('//*[@id="adminui-person-details"]/form/div/fieldset/legend');
    }

    get personNameInputButton(){
        return $('//*[@id="adminui-givenName-field"]');
    }
    get saveButton(){
        return  $('//*[@id="adminui-person-save"]');
    }
    get  familyNameInputButton(){
        return $('#adminui-familyName-field');
    }
    get  content(){
        return $('//*[@id="content"]/a')
    }  

    get  list(){
        return $('//*[@id="list-accounts"]/tbody/tr/td[1]');
    }

    get  persondetails(){
        return  $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/i');
    }


    get  save(){
        return $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/table/tbody/tr[1]/td');
    }
   

    get  persontr2(){
        return  $('//*[@id="adminui-person-details"]/form/div/fieldset/div[1]/table/tbody/tr[2]/td');
    }

}
export default new editAccountDetails();