// Normal String Declaration
const firstname = "Vinay"
const secondname = "  Rai "

// console.log(firstname + secondname);


// Object Declaration of String
const name = new String("Vinay")
/* Object methods */
// console.log(name[2])
// console.log(name.length)
/* Prototype method */
// console.log(name.toUpperCase())
// 44492

// trim - remove the white spaces  from string
// console.log(secondname);
// console.log(secondname.trim());

// substring - give substring from given string
const newString = firstname.substring(0,4)
// console.log(newString);

// slice - work in same way as substring, it can also accept negavite numbers
const newString1 = firstname.slice(-2,4)
console.log(newString1);

// why we took string immutable in almost every language
// Ans-> string is immutable , that why we use this to store sensitive information like passwords, username,etc, also it make easy to work.

// let x = 'Janhavi'
x = 'Rai'

console.log(x);

// split of string
const str = 'Vinay Rai'
// console.log(str.split("")); 
// output:  [
//     'V', 'i', 'n',
//     'a', 'y', ' ',
//     'R', 'a', 'i'
//   ]

console.log(str.split(" "));  // output: [ 'Vinay', 'Rai' ]