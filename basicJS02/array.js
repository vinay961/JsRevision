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

const arr1 = arr.slice(1,4);
console.log("slice:",arr1); //range include nhi hota hai
console.log("A:",arr); //original array me koi change nhi hota hai


const arr2 = arr.splice(1,4);
console.log("splice:",arr2); //range include hota hai
console.log("B:",arr); //elements array se gayab ho jate hai