if(true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // not defined
// console.log(b); // not defined
// console.log(c); // output:30

// function one(){
//     const userName = "Vinay"

//     function two(){
//         const website = "youtube"
//         // console.log(userName);  print hoga
//     }
//     two();
//     // console.log(website);  output print nhi hoga

// }

// one()


// console.log(addOne(5));  here we console the function before its initialization but it works correctly 
function addOne(num){
    return num + 1
}

// but if we declare the function like below then it not works properly because it here we store the result of function in a variable.
// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}


// *************************************** Arrow Function ********************************

const user = {
    userName:"Vinay",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`); // this here refer to current context, here current context means all variables that define in this object.
        // console.log(this); // while printing the value of this here we get current context.
    }
}

// user.welcomeMessage()
// user.userName = "Nihal"
// user.welcomeMessage()
// console.log(this); // while printing the value of this we get empty parenthesis {} 

/* When we print this in chrome then we get window because at that place the global object is window, but here it is empty parenthesis. */


function chai(){
    let userName = "Vinay"
    // console.log(this.userName); // here we get undefined, then we can observe that this works with object only.
}
chai()

const charcha = () =>{
    let userName = "Vinay"
    // console.log(this.userName); // here same case arises
}

charcha()

// const two = () => (2+3)
// console.log(two());

// When we need to return object
const two = () => ({user:"Vinay"}) // don't forgot to use parenthesis
console.log(two());