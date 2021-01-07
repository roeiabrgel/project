const registerTest = new (require("../../../src/pages/registration/registerPage"))();
const registrFiledData = require("../../../src/pages/registration/registrationFiledData.json");

describe("Registration", () => {

    before(() => {
         registerTest.goToRegisterPage();
        
        expect(registerTest.verifyHomePageBtn(registrFiledData.selectors.button).length).to.equal(0, "All buttons exists");
    });

    beforeEach(() => {
        Cypress.Cookies.defaults({
            preserve: [
                'session_id',
                'session-token', 
                'session-id-time', 
                'ubid-main', 
                'csm-hit', 
                'adblk', 
                'uu'
            ]
        });
    })
    
    it("is Valid Url", () => {
        
        expect((registerTest.isValidUrl())===true);
    });


    it("open registration form", () => {
        registerTest.goToRegisterPage();
    });

    it("Make sure we moved to the registration form", () => {
        registerTest.isElementeQual(registrFiledData.selectors.button.registerPageHeading,"הרשמה");

    });

    it("Fill registration fields", () => {

        registerTest.fillRegistrationForm();

    });

    it("log out", () => {

        registerTest.disconnectFromTheUser();


    });

    it("Make sure we move to the home page", () => {

        // registerTest.isElementContains(logInFiledData.selectors.loginBtn,"התחברות");
        registerTest.containOnElement(registrFiledData.selectors.loginBtn,"התחברות");

    });

});