const sumAll = function(numberOne, numberTwo) {

    let sum = 0;

    if (
        numberOne < 0 
        || numberTwo < 0 
        || typeof numberOne !== "number" 
        || typeof numberTwo !== "number"
        ){

        return "ERROR";

    }else if (numberOne <= numberTwo) {
        
        for (; numberOne <= numberTwo; numberOne++) {
            sum += numberOne;
        }

    }else{
        
        for (; numberTwo <=  numberOne; numberTwo++) {
            sum +=numberTwo;
        }

    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
