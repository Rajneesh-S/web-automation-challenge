class LoginPage {
    get usernameInput() {
      return $('[id="username"]');
    }
  
    get passwordInput() {
      return $('[id="password"]');
    }
  
    get loginButton() {
      return $('[id="loginButton"]');
    }
  
    async login(username, password) {
      await this.usernameInput.setValue(username);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
    }
  }
  
  export default new LoginPage();
  