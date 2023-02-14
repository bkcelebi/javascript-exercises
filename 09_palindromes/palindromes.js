const palindromes = function (palindrome) {

    const removePunctuation = palindrome.replace(/[^\w\s\']|_/g, "")
                            .replace(/\s+/g, "");

    const caseInsensitive = removePunctuation.toLowerCase();

    const len = caseInsensitive.length;

    for(let i = 0; i < len/2; i++){
        if(caseInsensitive[i] !== caseInsensitive[len - 1 - i]){
            return false;
        };
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
