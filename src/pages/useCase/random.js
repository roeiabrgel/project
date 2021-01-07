
class randomNumber {
    constructor() {
    }
    
randomNumber(range ,lowNumber = 0){
        
    return (Math.floor(Math.random() * range) + lowNumber)

        }
    }

    module.exports = randomNumber;