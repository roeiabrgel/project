/// <reference types= "cypress"/>
const websiteUrl = require ("../../../cypress.json")
class CyDriverInit {
    constructor() {
        this.driver = cy;
    }

    goToPage(str = "") {
        this.driver.visit(str);

    }


    sendString(selector, param) {
        const isSuccess = this.isElementVisable(selector) ? false : true;
        this.driver.get(selector).type(param);
       
        return isSuccess;
    }

    selectByValue(selector, value) {
        this.driver.get(selector).select(value);
    }

    clickOnBtn(selector, options = {contains: ""},opt = {force: true}) {
        if(options.contains) {
            const isSuccess = this.isElementVisable(selector) ? false : true;

            this.driver.contains(selector,options.contains).click(opt);
            return isSuccess;
        } else {
            const isSuccess = this.isElementVisable(selector) ? false : true;
            this.driver.get(selector).click(opt);
           
            return isSuccess;
        }
        
    }

    checkBox(selector, options = {contains: ""},opt = {force: true}) {
        if(options.contains) {
            this.driver.contains(selector,options.contains).check(opt);
    
    
        } else {

            this.driver.get(selector).check(opt);
        }
        
    }

    trigeerOnBtn(selector,action = "mouseover",opt = {force: true}){

        this.driver.get(selector).trigger(action,opt);
        
     }

    isElementHasAttribute(selector, attribute, value = undefined ) {
        const ele = this.driver.get(selector);
        return (expect(ele).to.have.attr(attribute, value));
    }

    isElementHidden(selector) {
        const ele = this.driver.get(selector);
        return (expect(ele).to.be.hidden());
    }

    isElementHasValue(selector, value) {
        const ele = this.driver.get(selector);
        return (expect(ele).to.have.value(value));
    }
 
    isElementeQual(selector, value) {
        const ele = this.driver.get(selector);
        return ele.invoke('text').then(txt =>{
            expect(txt).to.equal(value);
        })
    }

    isElementExist(selector) {
        const ele = this.driver.get(selector);
        return (ele.should("exist"));
    }

    isElementDisabled(selector) {
        const ele = this.driver.get(selector);
        return (expect(ele).to.exist);
    }

    isElementVisable(selector) {
        const ele = this.driver.get(selector);
        return (ele.should("be.visible"));
    }

    isValidUrl() {
        return (expect(this.driver.location() === websiteUrl));
    }

    isElementLangth(selector,value) {

        return (expect(this.driver.get(selector).should('have.length',value)));
     
}

    isElementclassName(selector,claas) {

    return (expect(this.driver.get(selector).should('have.class',claas)));
 
}

    countOfObject(myObject){

        return Object.keys(myObject).length;

    }

    containOnElement(selector,txt){
        return (expect(this.driver.get(selector).should('contain',txt)));

    }

    verifyHomePageBtn(sel) {
        const notExistList = [];
        for (const key in sel) {
            const exist = this.isElementExist(sel[key]);
            if(!exist) notExistList.push(selectors.buttons[key]);
        }

        return (notExistList)
    }

    scrollToPosition(position, longTimeout = false) {
        longTimeout ? this.driver.scrollTo(position, {timeout: 10000}) :
         this.driver.scrollTo(position);
    }

}

module.exports = CyDriverInit;