
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

// console.log(jsUser);
// console.log(jsUser1);

// ******************************* Object Singalton ***********************
/* above we discuss about object literal now let's discuss about singalton objects */

const tinderUser = new Object() // this is called singalton object
tinderUser.id = "123abc"
tinderUser.name = "Ram"
// console.log(tinderUser);

const regularUser = {
    email : "abc@ramram.com",
    fullname : {
        firstname : "Vinay",
        lastname : "Rai"
    }
}

// console.log(regularUser);

// ******************************** Combining Objects **********************
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1 , obj2}
// console.log(obj3); // the problem is that we get object ke andar object

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// ******************************** Object_To_Arrays **********************

/* Lets Convert the keys of object tinderUser into array */
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

//********************************** Object Destructring ******************
const course = {
    course : "js in hindi",
    price : "999",
    courseInstructor : "vinay"
}

const {price,courseInstructor:Instruct} = course
console.log(price,Instruct,Instruct);

