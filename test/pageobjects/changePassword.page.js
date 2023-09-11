class changePassword{
    get myaccountButton(){
        return $('//*[@id="user-account-menu"]/li/a');

    }
    get  changePassButton(){
        return $('//*[@id="tasks"]/a[1]/div/i');
        
    }
    get oldPassInput(){
        return $('#oldPassword-field');
        
    }
    get confirmPassword(){
        return $('#confirmPassword-field');
        
    }

    get saveButton(){
        return $('#save-button');
    }

}
export default new changePassword();