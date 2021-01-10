const CyDriverInit = require("../driver/driverPage");
const registrFiledData = require("./registrationFiledData.json");

class registerPage extends CyDriverInit {
    constructor()  {
        super();
    }

    fillRegistrationForm() {

        this.sendString(registrFiledData.selectors.applicationForm.username, registrFiledData.arguments.applicationForm.userName);
        this.sendString(registrFiledData.selectors.applicationForm.lastName, registrFiledData.arguments.applicationForm.lastName);
        this.sendString(registrFiledData.selectors.applicationForm.email, registrFiledData.arguments.applicationForm.email);
        this.sendString(registrFiledData.selectors.applicationForm.password, registrFiledData.arguments.applicationForm.password);
        this.sendString(registrFiledData.selectors.applicationForm.phoneNumber, registrFiledData.arguments.applicationForm.phoneNumber);


        
        this.checkBox(registrFiledData.selectors.applicationForm.cheakBox);
        this.clickOnBtn(registrFiledData.selectors.button.sumbitCreationBtn, {contains : "הרשמה"});
    }

    goToRegisterPage() {
        this.goToPage();
        this.clickOnBtn(registrFiledData.selectors.button.loginBtn, {contains : "התחברות"});
        this.clickOnBtn(registrFiledData.selectors.button.registerBtn, {contains : "לחץ להרשמה"});
        return this;
    }

    
    disconnectFromTheUser() {
        this.clickOnBtn(registrFiledData.selectors.logoutBtn, {contains : "התנתקות"});
        return this;
    }

}

module.exports = registerPage