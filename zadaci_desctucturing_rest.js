// 1. Napisati funkciju koja prima niz sa proizvoljnim brojem elemenata i vraća novi niz 
// sa svim elementima posle petog, koristeći …rest. 
// (Ranija verzija je trazila prvih 5, sto ima manje smisla)

function numbers3(array) {
    console.log(numbers1);
    let [one, two, three, four, five, ...rest] = array;
    return rest;
    }

    //ili (koja dozvoljava upis brojeva kao niz bez [])
function numbers3(...array) {
    console.log(numbers3);
    let [one, two, three, four, five, ...rest] = [...array];
    return rest;
    }

// opcija 3 da se ne pisu elementi niza vec samo zarezi se ostavljaju , onda svaki element nece biti zapisan kao posebna nova varijabla
function numbers3(array) {
    console.log(numbers1);
    let [,,,,, ...rest] = array;
    return rest;
    }

// jer samo zapisivanje let arr = [1,2,3,,5] dobicemo kao rezultat [1,2,3,empty,5]

// 2. Napisati funkciju koja prima objekat i vraća kopiju gde je property "x" 
// setovan na broj 5, bez obzira da li postoji u originalnom objektu ili ne.

function persona(person) {
    return {
        ...person,
        x: 5,
    };
}

// Zadatak 3:  Napisati funkciju koja prima 3 parametra: objekat, string koji predstavlja ključ, 
// i vrednost koja će biti postavljena pod tim ključem. Funkcija treba da vrati kopiju objekta 
// koji prima kao prvi parametar, i da u property koji je određen drugim parametrom postavi treći:
//setObjPropTo({a: 1, b: 2}, 'c', 3) 
// vratiće objekat {a: 1, b: 2, c: 3}

function setKeyOnObj(obj, key, value) {
    let copy = {...obj};        
    copy[key] = value;          
    return copy;               

// shorter version:

    return {
        ...obj,                    
        [key]: value,           
    }
}

// 4. Napisati funkciju koja prima dva niza, i vraća novi niz koji se sastoji od svih elemenata iz dva 
// ulazna niza.

function concatTwoArrays(arr1, arr2) {  
    return [ ...arr1, ...arr2 ];       
}

     
// 5. Napisati funkciju koja prima dva objekta, i vraća novi koji sadrži sve property-e iz dva ulazna objekta. Ukoliko ima property-a sa istim imenom u oba objekta, u rezultatu će biti oni iz drugog.

function concatTwoObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

     
// 6. Napisati funkciju koja prima proizvoljan broj nizova i vraća novi, koji sadrži elemente iz svih ulaznih.
function concatMultiArrays(...arrays) {
    let newArray = [];
    for (let array of arrays) {
        // newArray = [ ...newArray, ...array ];
        newArray.push(...array);        
    }
    return newArray;
}

// kraca verzija:
function concatMultiArrays(...arrays) {
    return [].concat(...array);
}

     
// 7. Napisati funkciju koja prima proizvoljan broj objekata i vraća novi, koji sadrži sve property-e iz svih ulaznih objekata. Ukoliko ima property-a sa istim imenom, oni koji su definisani u kasnijim parametrima treba da budu u rezultatu.

function concatMultiObjects(...objects) {
    return Object.assign({}, ...objects);                 

// Object.assign(obj1, {b:2})     

// Object.assign({},obj1, {b: 2})  
