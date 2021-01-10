/// <reference types= "cypress"/>
const  searchTest = new (require("../../../src/pages/search/searchPage"))();
const  searchData = require ("../../../src/pages/search/search.json")

describe("search", () => {
    let arr = [];
   
    before(() => {
        searchTest.goToPage();
        expect(searchTest.verifyHomePageBtn(searchData.selectors.button).length).to.equal(0, "All buttons exists");
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
    

    it("search in search bar",()=>{

        searchTest.sendString(searchData.selectors.button.searchBar,searchData.arguments.searchInput);
        // searchTest.clickOnBtn(searchData.selectors.button.searchBtn);


    })


    it("Make sure we list in the title the search we were looking for",()=>{

        searchTest.goToPage("/search?q=JBL&key=8150F5F5AD2B9B091D01D69AD2B352BB");

        searchTest.containOnElement(searchData.selectors.pageTitle,searchData.arguments.searchInput);

        searchTest.isElementeQual(searchData.selectors.pageTitle,"תוצאות לחיפוש 'JBL'");

    })


    it("Selects according to what I want to sort",()=>{

      searchTest.selectByValue(searchData.selectors.slectFilter,"מחיר גבוה לנמוך")

    })
        it("Entering prices into an array",()=>{
            cy.wait(10000)
            arr = searchTest.verificationSorting()
      
              })
                it("Make sure the results are sorted from high to low",()=>{

                    expect((searchTest.arrayComparison(arr))===true);
                    console.log(searchTest.arrayComparison(arr))
                 
                   });

              });

  
