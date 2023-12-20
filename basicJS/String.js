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
