// solution three, way more advanced and yet much more shorter

let removeFromArray = function(...args) {
    const array = args[0];
    return array.filter(value => !args.includes(value));
}        

removeFromArray( [1, 2, 3, 4], 3);

removeFromArray( [1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;


// solution two

// const removeFromArray = function(...args) {
//     const array = args[0];

//     const newArray = [];

//     array.forEach( (item)  =>  {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });

//     return newArray;
// }    




// My solution without looking at solution

// const removeFromArray = function(para1, para2, para3, para4, para5) {
//     let i = 0;
//     while (i < para1.length) {
//         if (para1[i] === para2 || para1[i] === para3  || para1[i] === para4 || para1[i] === para5 )  {
//             para1.splice(i, 1);
//         } else {
//             ++i;
//         }
//     }
//     return para1;
// }