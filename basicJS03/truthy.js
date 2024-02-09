const userEmail = []

// if(userEmail){
//     console.log("Got the userEmail");
// }
// else{
//     console.log("Don't have user email");
// }

// Note --> Here string is consider automatically true, empty string is consider false. In same way empty array is considered true.

// so here two concept of truthy and falsy value arises:
//                     falsy value--> false,0,-0, BigInt 0n, "", null, undefined, NaN  they are considerd false always.
//                     truthy value--> "0", "false", " ",[], {}, function(){}


                    /*         How to Know array and object is empty or not           */

// array case
if(userEmail.length == 0){
    console.log("Array is empty.");
}

const obj1 = {}

// object case
if(Object.keys(obj1).length == 0){
    console.log("Object is empty.");
}


// *************** Nullish Coalescing Operator (??): used for null,undefiend

val1 = null ?? 10
// console.log(val1); //output:10

const val2 = undefined ?? 15
// console.log(val2); //output:15


// *************** Ternary operartor--> It is different from above operator
// condition ? true : false
const iceTea = 100
iceTea >=80 ? console.log("Greater than 80") : console.log("less then 80");

