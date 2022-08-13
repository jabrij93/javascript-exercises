const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

//solution by using sort method
let findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

const age = function(x) {
    let calcAge = (x.yearOfDeath || currentYear) - x.yearOfBirth;
    return calcAge;
  } 
  const oldest = people.sort((a, b) =>
    age(a) > age(b) ? -1 : 1
  );
  return oldest[0];
};

// simplified version of the above solution
// let findTheOldest = function (people) {
//   const age = (x) => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
//   const oldest = people.sort((a, b) =>
//     age(a) > age(b) ? -1 : 1
//   );
//   return oldest[0];
// };

// solution by using reduce method
// const findTheOldest = function(people) {
//     const currentYear = new Date().getFullYear();
  
//     return people.reduce((res, person) => {
//       const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
//       return age > res.age ? { person, age } : res;
//     }, { person: null, age: 0 }).person;
//   }

findTheOldest(people);

  //only works for test 1
  // let oldestPeople = test.sort(function(a,b) {
  //   const aFirstPerson = a.yearOfDeath - a.yearOfBirth;
  //   const bSecondPerson = b.yearOfDeath - b.yearOfBirth;
  
  //   if (aFirstPerson > bSecondPerson) {
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  // })
  // return test[0];

    // const sort = people.sort(function(a,b)) {
    //   let age = yearOfDeath - yearOfBirth;
    //     if (a.age > b.age) {
    //       return 1;
    //     }  else {
    //       return -1;
    //     }
    // }

// Do not edit below this line
module.exports = findTheOldest;

