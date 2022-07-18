const sumAll = function( min, max ) {
    let fullArr = [];
    let sum = 0; 

    const reducer = (accumulator, currentValue) => accumulator + currentValue; 

    // let highestToLowest =

    // if (min > max) {
    //     const temp = min;
    //     min = max;
    //     max = temp;
    // }

    if ( min < 0 || max < 0 ) { 
        return "ERROR";
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }

    //solution from nem0z from stackoverflow
    for ( let i = ( min <= max ? min : max) ; i <= (max >= min ? max : min); i++) {
        fullArr.push(i);
    }

    // sumAll.sort(function(min,max)) {
    //     return max - min;
    // }
        
    // // let lowestToHighest = fullArr.sort((a, b) => a - b);
    // let highestToLowest = fullArr.sort((min, max) => max-min);

    sum = fullArr.reduce(reducer);

    return sum;
}

sumAll(1,4);
sumAll(-10, 4);


// if (max > min) {
//     for ( let i = min; i <= max ; i++) {
//     fullArr.push(i);
//     } else if (min > max) {
//       for ( let i = max; i <= min ; i--) {
//       fullArr.push(i);
//        }   
//     }
// }   

// if (min > max) {
//     return sumAll.sort( (min, max) => max - min );
// } else if ( max > min) {
//     return sumAll.sort((min, max) => min - max );
// }


// Do not edit below this line
module.exports = sumAll;
