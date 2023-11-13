"use strict";
//Object
/*
const person: {
    name: string,
    age: number
} =  {
    name: 'wachirawit',
    age: 21
};
console.log(person.name);
*/
//Array
/*
const general  = {
    name: 'JJ',
    age: 22,
    hobbies: ['Sports', 'Cooking']
};
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of general.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERROR !!!
}
*/
//Tuple
/*
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string ]
} = {
    name: 'wachirawit',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

person.role.push('admin');
// person.role[1] = 10;

console.log(person.role);
*/
//Enums
/*
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum ROLE { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };


const person = {
    name: 'JJ',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: ROLE.ADMIN

};

if (person.role === ROLE.AUTHOR) {
    console.log('is author');
}
*/
