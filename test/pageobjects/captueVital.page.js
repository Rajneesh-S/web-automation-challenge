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

}
export default new captureVital();