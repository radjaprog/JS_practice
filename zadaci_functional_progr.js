'use strict'

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katharine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

1. let inventorsBorn1500 = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year < 1600;
});
console.log(inventorsBorn1500);
-------------------------------------------
2. Give us an array of the inventors' first and last names
let userNamesOnly = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(userNamesOnly);
-------------------------------------------
3.How many years did all the inventors live?
 let inventorLive = inventors.map(n => n.passed - n.year);
 let sum = inventorLive.reduce((accumulator, current) => accumulator + current);
 console.log(sum);
-------------------------------------------------
5. Is at least one person 19 or older? 

izlistava true ili false , da li ima njih koji su 19godina ili vise
let adults = people.map(n => 2023 - n.year);
let newAge = adults.some(checkAdult);
function checkAdult(age) {
    return age >= 19;
};

console.log(newAge);

izlistava one koji su preko 19 godina
let adults = people.filter((person) => {
    return (2023 - person.year) >= 19});

console.log(adults);
---------------------------------------------------------------------
6. Is everyone 19 or older? ( Array.prototype.every())
vraca true ili false :
let adults = people.map(n => 2023 - n.year);
let newAge = adults.every(checkAdult);
function checkAdult(age) {
    return age >= 19;
};

----------------------------------------------------------------------
7. Find the comment with the ID of 823423 ( Array.prototype.find())

let commentWithId = comments.find(element => element.id === 823423);
console.log(commentWithId);
-------------------------------------------------------------------------------
8 Delete the comment with the ID of 823423
let commentWithOnlyId = comments.filter(element => element.id === 823423);
let commentWithoutId = comments.filter(element => element.id !== 823423);
console.log(commentWithOnlyId);
console.log(commentWithoutId);
console.log(comments);
// ------------------------------------------------------
// 4. Sum up the how many times each element appears in the data array
// -----
// 4.1.  imperativni nacin programiranja
// let countObj = {};               
// for (let word of data) {         
//     if (word in countObj) {      
//         countObj [word]++;       
//     }else {
//         countObj[word] =1;       
//     }
// }
// //console.log(countObj);         
// ---------
// 4.2.
// let DataUnique = [];
// for (let word of data) {
//     if (!dataUnique.includes(word)) {        
//         data.Unique.push(word);             
//     }
// }
// console.log(dataUnique);         

// // 4.3. funkcionalno programiranje
// let dataUnique = data.reduce((acc, word) => {
//     if (acc.includes(word)) {           
//         return acc;                
//     } else {
//         return [...acc, word]       
//     }
// }, []);

// // // console.log(dataUnique);            
// // proci kroz dataUnique i videti koliko puta se ponavlja             

// const countsObj = data.reduce((counts, word) => {  
//   if (word in counts) {             
//     return {                            
//       ...counts,                        
//         [word]: counts[word] + 1           
//         }; 
//     } else { return {
//         ...counts,                      
//         [word]:1
//     }
// }
    
    // return {
//         ...counts,
//         [word]: (word in counts) ? counts[word] +1 : 1
//     };
// }, {});                                
// console.log(countsObj);

4.4 funkcionalno programiranje
let dataUnique = data.reduce((acc, word) => {
    if (acc.includes(word)) {           
        return acc;                
    } else {
        return [...acc, word]       
    }
}, []);

console.log(dataUnique);

let countsObj = {};
dataUnique.forEach(uniqueWord => {            
    countsObj[uniqueWord] = data.filter(word => word === uniqueWord).length;   
});
console.log(countsObj);