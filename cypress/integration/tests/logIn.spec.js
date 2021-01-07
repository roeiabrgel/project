const logInTest = new (require("../../../src/pages/login/loginPage"))();
const logInFiledData = require("../../../src/pages/login/loginFiledData.json");

const registrFiledData = require("../../../src/pages/registration/registrationFiledData.json");

describe("Login with the user we created",() => {
    
    before(() => {
         logInTest.goToLogInPage();
        expect(logInTest.verifyHomePageBtn(logInFiledData.selectors).length).to.equal(0, "All buttons exists");
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


it("Make sure we moved to the login form", () => {

    logInTest.isElementeQual(logInFiledData.selectors.submit,"התחברות");

});

it("Fill login fields", () => {

    logInTest.typeUserAccountInfo();

});

it("Make sure we login with the user we created", () => {

    logInTest.isElementeQual(logInFiledData.usernameTitle.h1,"שלום,"+ " "
        + registrFiledData.arguments.applicationForm.userName
        + " " +registrFiledData.arguments.applicationForm.lastName);

});

});