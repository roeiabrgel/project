const CyDriverInit = require("../driver/driverPage");
const registrFiledData = require("./registrationFiledData.json");

class registerPage extends CyDriverInit {
    constructor()  {
        super();
    }

    // fillRegistrationForm( data = {} ) {
    //     if(Object.keys(data).length > 0) {
    //         registrFiledData.arguments.applicationForm = data;
    //     }
    fillRegistrationForm() {

        this.sendString(registrFiledData.selectors.applicationForm.username, registrFiledData.arguments.applicationForm.userName);
        this.sendString(registrFiledData.selectors.applicationForm.lastName, registrFiledData.arguments.applicationForm.lastName);
        this.sendString(registrFiledData.selectors.applicationForm.email, registrFiledData.arguments.applicationForm.email);
        this.sendString(registrFiledData.selectors.applicationForm.password, registrFiledData.arguments.applicationForm.password);
        this.sendString(registrFiledData.selectors.applicationForm.phoneNumber, registrFiledData.arguments.applicationForm.phoneNumber);


        // this.clickOnBtn(registrFiledData.selectors.applicationForm.cheakBox);
        
        this.checkBox(registrFiledData.selectors.applicationForm.cheakBox);
        // cy.get(".modal-content .checkbox :nth-child(1)#register-popup-isConfirm").check({force: true});
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

    verifyButtonsExistance() {
        
    }

    verifyFieldsExistance() {

    }

}

module.exports = registerPage