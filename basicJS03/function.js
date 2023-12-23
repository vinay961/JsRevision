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

console.log(isLoggedIn());
// here we pass parameter as Vinay, but if we do not pass parameter then it is undefined.





