const reverseString = function(word) {

    let splitStr = word.split("").reverse().join("");
    console.log(splitStr);
    return splitStr;
    
};

// Do not edit below this line
module.exports = reverseString;
