// function addTwoNumber(a,b){
//     console.log(a+b);
// }

// let result = addTwoNumber(2,4);
// console.log("Result:",result); // Result: undefined 

function addTwoNumber(a,b){
    let c = a+b;
    return c;
}

let result = addTwoNumber(1,3)
// console.log("Result:",result); // Result: 5

/* Note- code written after return statement doesn't executed. */

function isLoggedIn(userName){
    if(!userName){
        console.log("Enter UserName");
        return;
    }
    return `${userName} is LoggedIn.`
}

// console.log(isLoggedIn());
// here we pass parameter as Vinay, but if we do not pass parameter then it is undefined.


// ********************************* Number of argument is Unknown **********************

// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,500)); // output: 200

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500));
// while writing ... it give us array of all parameter


// ********************************** Array and Object as Argument **********************

const obj1 = {
    name:"Vinay",
    email:"india@gmail.com"
}

function takeObject(anyObject){
    console.log(`My name is ${anyObject.name}`);
}

takeObject(obj1)


let arr1 = [20,30,"Vinay",true,40]

function takeArray(anyArray){
    console.log(`Third element of array is ${anyArray[2]}`);
}

takeArray(arr1)





