const CyDriverInit  = require("../driver/driverPage")
const searchData = require ("./search.json")

class searchPage extends CyDriverInit  {

    constructor() { 
        super();
    }
      
    verificationSorting () {
        
       let x = [];
       let txt;
       let val;

        this.driver.get(searchData.selectors.PriceSearchResults)
        .each(($li, index, $lis) => {
                txt =  $li.text();
                val = txt.replace(/([^\d])/g,'');

                parseInt(val);
                x.push(val)

          });
          return x;
    }

    arrayComparison (arr){
        let ContValue ;
        let  PreviousValue =arr[0] ;
    
        for (let index = 1; index < arr.length; index++) {
    
            ContValue = arr[index];
    
            if(ContValue > PreviousValue){
    
                return false;
            
            }
            PreviousValue = ContValue;
    }    
    return true;
    }
    
     
}
module.exports = searchPage