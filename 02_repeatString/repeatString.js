const repeatString = function(word, times) {

    if (times < 0) return "ERROR";

    let myVar = "";

    for (let i = 0; i < times; i++){
        myVar += word;
    }

    return myVar;
};

// Do not edit below this line
module.exports = repeatString;
