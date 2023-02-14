const fibonacci = function(fib) {
    const fibNumber = Number(fib);

    let currentNumber = 0;
    let fPrev = 1;
    let fPrevPrev = 0;

    if (fibNumber < 0) return "OOPS";
    else {
        for(let i = 0; i <= fibNumber; i++){
            if (i === 0) currentNumber = fPrevPrev;
            else if (i === 1) currentNumber = fPrev;
            else {
                currentNumber = fPrev + fPrevPrev;
                fPrevPrev = fPrev;
                fPrev = currentNumber;
            }
        };
    };  
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
