const repeatString = function(string, multiply) {
    let text = string;
    let result = text.repeat(multiply);
    return result;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
