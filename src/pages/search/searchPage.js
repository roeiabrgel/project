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
        let bool = true;
        let ContValue ;
        let  PreviousValue =0 ;
    
        for (let index = 0; index < arr.length && bool == true; index++) {
    
            ContValue = arr[index];
    
            if(index != 0 && ContValue > PreviousValue){
    
            bool = false;
            console.log(arr[index]);
            }
            PreviousValue = ContValue;
    }    
    return bool;
    }
    
     
}
module.exports = searchPage