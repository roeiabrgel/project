const CyDriverInit  = require("../driver/driverPage")
const categoriesData = require("./categoriesData.json");


class categoriesPage extends CyDriverInit  {
    constructor() { 
        
        super();
    }

    
comparesAmountOfCategories(myObject){

    return this.isElementLangth(categoriesData.selectors.allCategories,
           (this.countOfObject(myObject)))

        }


        comparesTextOfCategories(arr){
            this.driver.get(arr)
            .each(($li, index, $lis) => {
    
                    this.containOnElement($li,categoriesData.arr[index + 1]);
            })
    
    }
      TakeFromDom(child){
          
     this.driver.get("#top-categories li:nth-child("+ child + ")").invoke('attr', 'data-id').as('a')
     this.driver.get(".sub-categories-inner:nth-child("+ child + ")").invoke('attr', 'data-parent').as('b')
       }
}

module.exports = categoriesPage