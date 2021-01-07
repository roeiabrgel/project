const  categoriesTest = new (require("../../../src/pages/Categories/categoriesPage"))();
const  categoriesData = require ("../../../src/pages/Categories/categoriesData.json")

const random = new (require("../../../src/pages/useCase/random"))();

describe("action on categories", () => {
    let child = random.randomNumber(12, 1);
    
    before(() => {
        categoriesTest.goToPage();
        expect(categoriesTest.verifyHomePageBtn(categoriesData.selectors).length).to.equal(0, "All buttons exists");
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
    

    it("click on categoris button", () => {

        categoriesTest.clickOnBtn(categoriesData.selectors.categoriesBtn);

    });


    
    it("Make sure the categories window opens",  ()  =>  {

        categoriesTest.isElementclassName(categoriesData.selectors.categoriesBtn,"open")

    });


    
    it("trigger on random categorie", () => {

        categoriesTest.clickOnBtn(categoriesData.selectors.categoriesBtn);
        categoriesTest.trigeerOnBtn("#top-categories li:nth-child("+ child + ")");

    });

    it("Takes the data of the DOM attribute", function () {
        
       categoriesTest.TakeFromDom(child)

    });

    it('Make sure a suitable window opens', function () {
        expect(this.a).to.be.eq(this.b)
    })

    it ("Make sure the category length are correct",()=>{

        categoriesTest.comparesAmountOfCategories(categoriesData.arr)
  });

   it("Make sure the category names are correct",()=>{


    categoriesTest.comparesTextOfCategories(categoriesData.selectors.allCategories)

    })
  
});

