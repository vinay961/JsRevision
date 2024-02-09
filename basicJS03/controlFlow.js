// 1. If-else

// const temp = 9
// if(temp>10){
//     console.log("December");
// }
// else{
//     console.log("January");
// }

// const balance = 1000
// if(balance<500){
//     console.log("Less than 500");
// }
// else if(balance>500){
//     console.log("Greater than 500");
// }
// else{
//     console.log("Equal to 500");
// }

//2. Switch

// switch (key) {
//     case value:
        
//         break; // break is important because without break,code doesn't terminate it execute all the cases except default.

//     default:
//         break;
// }
/** const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("No match for your input");
        break;
} 
**/

let a = 10
// if(a>0){
//     if(a>5){
//         console.log(" a is greater than 0 and 5");
//     }
//     else{
//         console.log(" a is greater than 0 but less than 5");
//     }
// }else{
//     console.log(" a is a negative number ");
// }

// Convert above task in ternary 

a>0 ? a>5 ? console.log(" a is greater than 0 and 5") : console.log(" a is greater than 0 but less than 5") : console.log(" a is a negative number ");

