"Use strict"; // treat all JS code as newer version

// *************************** DATA_TYPES ******************************
// number => 2 to power 53
//  bigint
//  string => ""
//  boolean => true/false
//  null(null is not a datatype it just represent the abasence of any object)


// **************************** TYPE_CONVERSION *************************

// DataType Conversion
let score = "33"
// console.log(typeof(score));

// Convert String to number.
let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN(Not a Number) but NaN datatype is Number also.
// true => 1; false => 0

// conversion of number and string into boolean
let isLoggedIn = "vinay";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// empty string => false
// not empty string => true



// ****************************** OPERATIONS ****************************

// console.log(1 + "2");       output: 12
// console.log("1" + 2);       output: 12
// console.log("1" + 2 + 2);   output: 122
// console.log(1 + 2 + "2");   output: 32



// ***************************** Bitwise Operator ************************

// &--> AND Operation
// console.log(10 & 6); // output--> 2(1010 AND 0110 == 0010 -> 2)

// | --> OR Operation
// console.log(10 | 6); // output--> 14(1010 OR 0110 == 1110 -> 14)

// ***************************** COMPARISION ****************************

// console.log("2" > 1);  output: true
// console.log("02" > 1); output: true

// console.log(null > 0); output: false
// console.log(null == 0); output: false 
// console.log(null >= 0); output: true 

/* 
the reason is that an equality check == and comparisions <,<,>=,<= work differently.
comparisions convert the null into a number, treating it as 0.
that's why null >= 0 is true while other is false.
*/


// *************************** DATA_TYPES INTERVIEW SUMMARY ************
            
/* 
primitive data type -> 7 types and they are call_by_value means we get copy of memory reference not origin one.
                       string, number, boolean, null, undefined, Symbol, bigInt

reference type/non-primitive -> we can get memory reference.
                                Arrays, Objects, function

                                Note=> JavaScript is dynamic or static
*/

let x = null
//console.log(typeof x);  // output is object
let y = 987654322n
// console.log(typeof y); // output is bigint


// *********************************** MEMORY WORKING IN JS **************************
/* 
Two types of memory used 1. Stack and 2. Heap
Stack for primitive dataTypes and Heap for Non-primitive dataTypes.
*/