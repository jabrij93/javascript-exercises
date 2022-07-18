const leapYears = function(years) {
    return years % 4 === 0 && ( years % 100 !== 0 || years % 400 === 0)
};

leapYears(1900);


// Do not edit below this line
module.exports = leapYears;


// leap years  -  must be divided by 4. 
// if it is divided by 100 but not by 400,
// then it is not a leap year.
// so a leap year must be divided by 4 and 400. 


// 