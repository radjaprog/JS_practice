// // Async f-je zadatak 1: Rewrite the following example using async / await
// // ZadataK:
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status !== 200) {
//         return response.json()
//       } else {
//         throw new Error(response.status)
//       }
//     })
// }

// const result = loadJson('no-such-user.json')
//   .catch(alert)

// //   RESENJE:
//  async function loadJson(url) {
//   try {
//     const response = await fetch(url);

//     if (response.status !== 200) {
//       throw new Error(response.status)
//     }

//     return response.json();
//   } catch(error) {
//     console.error(error);
//   }
// }

//   const finalResult = loadJson('no-such-user.json')
//   console.log(finalResult);

// const finalResult = loadJson('no-such-user.json')
// .catch(error => alert(error))
//.then(result => console.log(result));

// fetch(url) // promise
// await fetch(url) // promise-a, response

// return response.json() // const jsonPromise = response.json();

// finalResult.then(x => console.log(x));
//   .then(r => {
//    console.log(result)
//    result = r;}); //resultat je promise
// mnnogo je intuitivnije sa async/await

// .then vraca promise
// catch vraca promise (greske)
// await vraca uvek promise

// -----------------------------------------------------------
// Primer , dodatno - extra:
// Jos jedan primer sa async i await da odradi jednu funkciju pa klikom bilo gde drugde na ekran odradjuje drugu funkciju sa promise.

// async function clickToContinue() {
//     alert('click OK and then anywhere on the page to continue');
//     // document.addEventListener('click', () => {  // umesto ovoga -> await
//     await waitForClick();
//         alert('OK');
//     // });
// }

// clickToContinue();

// function waitForClick() {
//     return new Promise((resolve) => {
//     document.addEventListener('click', () => {
//         resolve();
//     });
// });
// }
//----------------------------------------------------------------
//----------------------------------------------------------------
// 2. U drugom primeru sto treba da se odradi, mozemo da vidimo na cemu se pozivaju catch i then pa mozemo samim tim da vidimo sta je promise a sta nije
// Rewrite using async / await
//ZADATAK:
// 'use strict'
// function getAPIData(url) {
//     return contentData(url)
//     .catch(e => {
//       return somethingElse(url)
//     })
//     .then(v => {
//       return someOtherThing(v)
//     })
//     .then(x => {
//       return anotherOtherThing(x)
//     })
//   }

// // // RESENJE kad je .catch na kraju:
// async function getAPIData(url) {
//   try {
//     let v = await contentData(url);
//     let x = await someOtherThing(v);
//     anotherOtherThing(x);
//   } catch (e) {
//     return somethingElse(url);

//   return contentData(url)
//     .then(v  => {
//       return someOtherThing(v)
//     })
//     .then(x => {
//       return anotherOtherThing(x)
//     })
//     .catch(e => {
//       return somethingElse(url)
//     })
//   }

//-------------------------------------
// 'use strict'

// async function getAPIData(url) {

//   let v;

//   try {
//     v = await contentData(url);
//   } catch (e) {
//   }
//
//
//   let x = await someOtherThing(v);
//   return anotherOtherThing(x);

//   return contentData(url)
//     return somethingElse(url)
//   })
//   .then(v  => {
//     return someOtherThing(v)
//   })
//   .then(x => {
//     return anotherOtherThing(x)
//   })
// }

// ----------------------------------------------------------
// // 3. Zada tak, nadji gresku Error:
// async function f() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Success')
//     }, 1000)
//   })
// }

// async function idiPoPivo() {
//   return new Promise((resolve, reject) => {
//     if (nogaSlomljena) {
//       reject('ne mogu slomio sam nogu');
//     }

//     dosetajDoRadnje();
//     nadjiPivo();
//     platiPivo();
//     vratiSeKuci();

//     resolve(pivo);
//   })
// }

// function foo() {

// }

// () => {

// }

// .then(() => {
//    return someOtherThing(v)
// })

// .then(() => someOtherThing(v))

// let response = await f()

// const obj = {
//   property1: '1',
//   property2: '2'
// }
// obj.property1; // '1'

// const { property1, property2 } = obj; //
// const property1 = obj.property1; //
// property1; // '1'

// const array = [1,2,3,4,5]
// const [prviEl, drugiEl, ...rest] = array;
// const [...rest, pretposlednjiEl, poslednjiEl] = array;

// // --------------------------------------------------------------
// // pocetak DESTRUCTURING
// Promise.resolve
// Promise.reject
// ovo se pise ako ocekujemo da cemo dobiti Promise.

// Promise.resolve(123)    // <fullfilled>:123
//                         // return someOtherThing(v)

// // ---------------------
// try
// {
// } catch (e) {

// } finally {

// }
// // -----------------------------
// let arr = [ 1, 2, 3 ]
// let [item, item2, item3] = arr
// // --------------------------------
// // stari nacin za objekte:
// let person = {
//   name: 'Jane',
//   surname: 'Doe',
//   age: 23
// }
// let name = person.name
// let surname = person.surname
// let age = person.age
// // novi nacin destructuring:
// let person = {
//   name: 'Jane',
//   surname: 'Doe',
//   age: 23
// }
// let {name, surname, age} = person;
// // --------------------------------------
// // Primer 1:
// let arr = [1, 2, 3, 4, 5]
// let [ el1, el2, el3] = arr

// arr = [1, 2]

// el1 = arr[0]
