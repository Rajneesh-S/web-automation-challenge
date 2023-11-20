class visitWorkflow{
    get findPatient (){
        return $('#coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension');

    }
    get  serachButton(){
        return $('//*[@id="patient-search"]');
        
    }
    get startvisitButton(){
        return $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]');
        
    }
    get visitnoteButton(){
        return $('//*[@id="referenceapplication.realTime.simpleVisitNote"]');
        
    }

    get  addToInpatientButton(){
        return $('//*[@id="referenceapplication.realTime.simpleAdmission"]');
    }
    get  captureVitalButton(){
        return  $('//*[@id="referenceapplication.realTime.vitals"]');
    }
    get  attachments(){
        return  $('//*[@id="attachments.attachments.visitActions.default"]');
    }

    get  inpatientward(){
        return  $('[id="Inpatient Ward"]');
    }

    get  contenth2(){
        return  $('//*[@id="content"]/h2');
    }
    get  patientsearchtable(){
        return  $('//*[@id="patient-search-results-table"]/tbody/tr[1]/td[2]');
    }

    get  startvisit(){
        return  $('#start-visit-with-visittype-confirm');
    }

    get  collection(){
        return  $('//*[@id="data-collection"]/p/label');
    }

    get  button(){
        return $('//*[@id="buttons"]/button');
    }

   
    get  form(){
        return $('//*[@id="formBreadcrumb"]/li[1]/ul/li[1]');
    }
    
    get  breadcrumbs(){
        return $('//*[@id="breadcrumbs"]/li[2]/a');
    }
   

    get  fileupload(){
        return  $('//*[@id="att-page-main"]/div[1]/att-file-upload/div[3]/div/div[1]/h3');
    }


}
export default new visitWorkflow();