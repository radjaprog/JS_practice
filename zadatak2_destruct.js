//Make a shallow copy of an array of any length in one destructuring assignment. 
//If you don’t know what shallow copy is read about it here, as this is a common programming concept.
'use strict'
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8]
let [no1, no2, no3, no4, no5, no6, no7] = numbers6
let numbers6coppieddestr = [...numbers6]
