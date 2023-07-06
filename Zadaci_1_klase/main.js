// 1. Write an arrow function that prints out “Hello, world!” 😎

// 1.1. resenje:
//  const helloWorld = () => { console.log('Hello, world!'); }

// 1.2. resenje:
//  'use strict'
// let hello;
// hello = () => "Hello World";

// 2. Write an arrow function that receives an array of integers and 
// returns their sum. Hint: Google Array.prototype.reduce()

// 2.1. resenje:
//const banana = [12, 5, 7, 9].reduce((a, b) => a + b);

// 2.2. resenje:
// 'use strict'

// const banana = [12, 5, 7, 9];
// console.log(banana.reduce((a, b) => a + b));
//

// 2.3 resenje:
// 'use strict'

// const banana = [12, 5, 7, 9];
// const jabuka = banana.reduce((a, b) => a + b);

// 3. Rewrite the code on the next slide, so it uses arrow 
// functions wherever it makes sense to use them

// var Entity = function(name, delay) {
//     this.name = name;
//     this.delay = delay;  
//   }
  
//   Entity.prototype.greet = function() {
//       setTimeout(function() {
//           console.log('Hi, I am ' + this.name)
//       }.bind(this), this.delay)
//   }
  
//   var java = new Entity('Java', 5000)
//   var cpp = new Entity('C++', 30)
  
//   java.greet()
//   cpp.greet()

//---------------------------------

// Entity = (name, delay) => 
//     this.name = name;
//     this.delay = delay;  
  
// Entity.prototype.greet = () =>
//       setTimeout(function() {
//           console.log('Hi, I am ' + this.name)
//       }.bind(this), this.delay)
  
// var java = new Entity('Java', 5000)
// var cpp = new Entity('C++', 30)
  
// java.greet()
// cpp.greet()



// 1. Write a class called Point, which represents a point in two-dimensional 
// space. A point has x and y properties, given as arguments to its constructor.


// 2. It also has a single method plus, which takes another point and returns the sum
//  of the two points, that is: a new point whose x is the sum of the x properties of the 
//  two original points, and whose y is the sum of their y properties.

// 'use strict'

// class Point extends NekaKlasa {
//     x;
//     y;

//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     plus(point) {
//         return new Point(this.x + point.x, this.y + point.y);
//     }
// }

// var point = new Point(1, 2);
// point.log();

// array.reduce(() => {})
//------------------------------------

// 3. Klase:
// Create a PlayerCharacter and a NonPlayerCharacter with a common ancestor Character. T
// The characters are located in a 10x10 game field, meaning they have x and y position. 
// All characters appear at a random location. Create those three classes, and make sure you can query where each character is.
// Make sure the Character class cannot be instantiated.
// Add an option to set both x and y ( at the same time ) using a function
// Keep count of created Characters using a static property
// Throw an error if user tries to set x and y that are out of bounds ( 10x10 )

// Resenje 3-eg zadatka:
// class Character {
//     x;
//     y;
//     static count = 0;

//     constructor () {
//         if (this.constructor === Character) {
//             throw new Error('Character class is abstract cannot be instantiated.');
//         }

//         this.x = Math.round(Math.random() * 10); // npr 0,2 * 10 = 2
//         this.y = Math.round(Math.random() * 10);

//         // this.count = this.count + 1;
//         // this.count += 1;
//         // this.count ++;
//         Character.count +=1;
//     } 

//     getPosition() {
//         console.log("x :", this.x, "y: ", this.y);
//     }

//     setPosition(x, y) {
//     if (x > 0 && x <= 10 && y > 0 && y <= 10){
//         this.x = x;
//         this.y = y;

//     } else {
//         throw new Error('Entries are out of bounds');
//     }  
//     }
// }

// // 1 == '1' ovo prolazi
// // 1 === '1' ovo ne prolazi jer provarava i tip podatka

// class PlayerCharacter extends Character {
// }

// class NonPlayerCharacter extends Character {
// }

// const player1 = new PlayerCharacter();
// player1.getPosition();
// console.log(Character.count);
// const player2 = new PlayerCharacter();
// player2.getPosition();
// console.log(Character.count);

// -----------------------------------------------------------
// Asynchrone f-je 
// // PROMISE
// 'use strict'
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 2000); 
// });
// console.log('start');
// promise1.then(result => {console.log('end1, result:', result); 
//     return getRandomTimeoutPromise();
// }).then(result => {                     
//     console.log('end2, result:', result);
//     return getRandomTimeoutPromise();
// }).then(result => {
//     console.log('end3, result:', result);
//     return getRandomTimeoutPromise();
// }).then(result => {
//     console.log('end4, result:', result);
//     return getRandomTimeoutPromise();
// }).catch(error => {
//     throw error;
// });
// function getRandomTimeoutPromise() {    
//     return new Promise((resolve, reject) => {
//         const timeout = Math.floor(Math.random() * 3000);
//         setTimeout(() => {
//             if (Math.random() < 0.3) {
//                 reject('Error');
//             } else {
//                 resolve(timeout)
//             }
//         resolve(timeout)
//     }, timeout); /
//     });
// }
// ----------------------------------
// pojednostavljivanje promise-a sa async/await f-jama

// 'use strict'
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 2000); // na koliko sekundi je ovo logovano ? 2s ?
// });

// async function async1() {
//     try { 
//     console.log('start');
//     // opcija a: 
//     //const promise1 = getRandomTimeoutPromise();
//     //let result1 = await promise1;      
//     // let result1 = await getRandomTimeoutPromise();
//     // console.log(result1);
//     // let result2 = await getRandomTimeoutPromise(); 
//     // console.log(result2);
//     // let result3 = await getRandomTimeoutPromise();
//     // console.log(result3);
//     // -------
//     // opcija b:
//     console.log(await getRandomTimeoutPromise());
//     console.log(await getRandomTimeoutPromise());
//     console.log(await getRandomTimeoutPromise());
//     } catch (e) {
//         console.error('Error caught:', e);   
//     }
//     }
//     // ---------

//     // opcija 1: 
//     // async1();       
//     // console.log('end?');    

//     // opcija 2 : end? 
//     (async () => {
//         await async1();
//         console.log('end?');       
//     })();


// promise1.then(result => {console.log('end1, result:', result); 
//     return getRandomTimeoutPromise();
// }).then(result => {                    
//     console.log('end2, result:', result);
//     return getRandomTimeoutPromise();
// }).then(result => {
//     console.log('end3, result:', result);
//     return getRandomTimeoutPromise();
// }).then(result => {
//     console.log('end4, result:', result);
//     return getRandomTimeoutPromise();
// }).catch(error => {
//     throw error;
// });
// function getRandomTimeoutPromise() {    
//     return new Promise((resolve, reject) => {
//         const timeout = Math.floor(Math.random() * 3000);      
//         setTimeout(() => {
//             if (Math.random() < 0.5) {
//                 reject('Error');
//             } else {
//                 resolve(timeout)
//             }
//         resolve(timeout)
//     }, timeout); // Math.floor je nula znaci ide random od nula do 5 sekundi.
//     });
// }

// ---------------------------------
//     function local() {         
//         var i = 2;     
//     }

// var f = function recursive {                                
//     var i = 2;
// }

// (function local() {          
//     var i = 2;     
//     console.log(i);
// })();  
// 


Async f-je zadatak 1: Rewrite the following example using async / await
ZadataK:
function loadJson(url) {         
  return fetch(url)              
    .then(response => {          
      if (response.status == 200) {      
        return response.json()           
      } else {                          
        throw new Error(response.status)
      }
    })
}

const result = loadJson('no-such-user.json')
  .catch(alert)

// RESENJE: