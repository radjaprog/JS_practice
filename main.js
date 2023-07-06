// var person1 = {
//     personName: 'Vladimir',
//     greeting: function() {
//         alert('Hi! I\'m' + this.name + '.');
//     },

// // person1.greeting();

//     hobbies: ['skiing', 'gardening', 'bowling'],
//     showHobbies: function() {
//         // var that = this;
//         [1, 2, 3].forEach(function(){
//             console.log('Hi! I\'m ' + this.personName);
//         },this);

//         [1, 2, 3].forEach(() => {
//             console.log('Hi! I\'m ' + this.personName);
//         });

//     }
// };

// person1.showHobbies();

// function add(x, y) {
//     return x + y;
// };

// var add = (x, y) => {
//     return x + y;
// };

// var add = (x, y) => x + y;
// var add = () => console.log('hi');
// sayHi();

// var sayX = x => console.log(x);
// sayX(2);
// this.hobbies.join(', ')

//forEach(function(hobby)) {}

//-----------------------------------------
// 'use strict'

// function Person(personName, personAge) {
//     this.name = personName;
//     this.age = personAge;

//     this.getName = function() {
//         return this.name;
//     };

//     this.getAge = function() {
//         return this.age;
//     };
// }
//------------------------
// [].__proto__
// [].__proto__.__proto__
// [].__proto__.__proto__.___proto__
// nasledjivanje prototipova

// Person.prototype.getName , isto kao i Object.create([])

// function Person(personName, personAge) {
//     this.name = personName;
//     this.age = personAge;

//     Person.prototype.getName = function() {
//         return this.name;
//     };

//     Person.prototype.getAge = function() {
//         return this.age;
//     };
// }

// Array.prototype.sayBanana = function(){console.log('Banana')}
// kad se ovako set-uje
// onda sami pozivom:
// [].sayBanana()
//  response:
// Banana
// [].__proto__.sayBanana  // setovanje na prototip

// Array.prototype === [].__proto__    // true
