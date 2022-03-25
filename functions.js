/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];


/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

export function getDogs(arr) {
    return arr.filter(dog => { if(dog.type === 'dog') return dog;});
}

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    return arr.map(dog => dog.name);
}

/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    return arr.filter(dog => { if(dog.type === 'dog') return dog;}).map(dog => dog.name);
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    return arr.map(dog => dog.type).reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    return arr.map(dog => {return { nombre: dog.name, tipo: dog.type };});
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    return arr.map(pet => {pet['isHungry'] = true; return pet;});
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    return arr.map(pet => {pet.name = pet.name.toUpperCase(); return pet;});
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    return arr.map(pet => pet.name + pet.type);
}

/*
findByName('jumpy', petsArray)

(hint: how do you get the first item out of an array?)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    return arr.filter(pet => name === pet.name)[0];
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    return arr.map(pet => Object.entries(pet));
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    return arr.filter(vehicle => vehicle.type === 'car');
}

/*
Output:
[
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
] ;

*/

export function getChevyCars(arr) {
    return arr.filter(vehicle => vehicle.type === 'car' && vehicle.make === 'chevy');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    return arr.reduce((acc, curr) => {
        const newAcc = acc + curr.model;

        return newAcc;
    }, '');
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    return arr.reduce((acc, curr) => {
        const newAcc = acc + curr.age;

        return newAcc;
    }, 0);
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return arr.reduce((acc, curr) => {
        if(curr.type === 'car') {
            acc.car++;
        }
        if(curr.type === 'truck') {
            acc.truck++;
        }
        if(curr.type === 'van') {
            acc.van++;
        }
        return acc;
    }, { car: 0, truck: 0, van: 0 });
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return arr.reduce((acc, curr) => {
        acc = Object.keys(curr).join('');
        return acc;
    }, '');
}
