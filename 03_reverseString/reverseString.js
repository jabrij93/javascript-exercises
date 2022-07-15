const reverseString = function(reverseString) {
    let splitString = reverseString.split("");
    let reverseString2 = splitString.reverse();
    let joinString = reverseString2.join("");
    return joinString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
