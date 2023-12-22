
//*********************** Object Literals *************************

const jsUser = {
    name: "Vinay",
    age: 21,
    location: "Kanpur",
    isLoggedIn: false,
    lastLoginDays:["monday","friday"]
}

/* There are two ways to access object 1. Dot Notation, 2.Square Notation */

// console.log(jsUser.age);
// console.log(jsUser["isLoggedIn"]);

// Interview Question is that take a symbol and use it in object and print that symbol

const mySym = Symbol("Win")
const jsUser1 = {
    name:"Nihal",
    age:18,
    [mySym]:"MySym1"
}

// console.log(jsUser1[mySym]);   

// we can change the value in object by using = sign , but if we want that no one can change the value of object than we can freez them.
jsUser.isLoggedIn = true

Object.freeze(jsUser)
jsUser.isLoggedIn = false

console.log(jsUser);
console.log(jsUser1);


