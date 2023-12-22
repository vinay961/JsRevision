const arr = [1,2,3,4,5]
// console.log(arr);

const heros = new Array(1,2,3,4)

// Array methods

/* arr.push(6)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(0)
console.log(arr);

arr.shift()
console.log(arr);

console.log(arr.includes(6));
console.log(arr.indexOf(4));  */

// slice and splice 

//const arr1 = arr.slice(1,4);
//console.log("slice:",arr1); //range include nhi hota hai
//console.log("A:",arr); //original array me koi change nhi hota hai


//const arr2 = arr.splice(1,4);
//console.log("splice:",arr2); //range include hota hai
//console.log("B:",arr); //elements array se gayab ho jate hai


// ************************* Concatenation and spread **************************

const a = [1,2,3]
const b = [4,5,6]

const c = a.concat(b)
//console.log(c); // output- [1,2,3,4,5,6]


//Let's perform above operation through spreading
const d = [...a,...b]
// console.log(d);

const e = [1,2,3,[3,4,5],6,[7,8,[9,6]]]
// now if we need single array then we can use flat
const real = e.flat(Infinity)
// console.log(real);

// ****************************** convert to arrays *****************************

// console.log(Array.isArray("Vinay")); //false
// console.log(Array.from("Vinay")); //['V','i','n','a','y']

// in same way we can convert any things in array

let score1 = 12;
let score2 = 10;
let score3 = 15;

console.log(Array.of(score1,score2,score3));
