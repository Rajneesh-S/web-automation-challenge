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

}
export default new visitWorkflow();