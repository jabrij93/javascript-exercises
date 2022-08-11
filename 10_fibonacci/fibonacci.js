const fibonacci = function(number) {
    let a = 0; 
    let b = 1; 
    let temp;

    if(number < 0) {
        return "OOPS";
    }
      
    while (number >= 0){
        temp = a;
        a = a + b;
        b = temp;
        number--;  
    }
    return b;
}

// Do not edit below this line
module.exports = fibonacci;