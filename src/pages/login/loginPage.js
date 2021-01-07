const CyDriverInit  = require("../driver/driverPage")
const loginFiledData = require("./loginFiledData.json");

class loginPage extends CyDriverInit  {
    constructor() { 
        super();
    }

    typeUserAccountInfo() {
        this.sendString(loginFiledData.selectors.email, loginFiledData.arguments.email);
        this.sendString(loginFiledData.selectors.password, loginFiledData.arguments.password);
        this.clickOnBtn(loginFiledData.selectors.submit , {contains : "התחברות"});
        return this;
    }

    goToLogInPage() {
        this.goToPage();
        this.clickOnBtn(loginFiledData.selectors.loginBtn);
    }
}

module.exports = loginPage