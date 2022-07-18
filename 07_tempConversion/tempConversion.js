const ftoc = function(temp) {
  let calc = (temp - 32) * (5/9);
  return Number(calc.toFixed(1))  ;
};

const ctof = function(temp) {
  let calc = (temp * (9/5) + 32);
  return Number(calc.toFixed(1))  ;
};


ftoc(100);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


// solution from github
// const ftoc = function(f) {
//   return Math.round((f - 32) * (5/9) * 10) / 10;
//  };
 
//  const ctof = function(c) {
//    return Math.round(((c * 9/5) + 32) * 10) / 10;
//  };