// Higher order function--> If we pass a function as argument in another function then it is called HOF.
// function hof(fun,a,b){
//     return fun(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// console.log(hof(add,6,6))

// function greet(){
//     return function fun(){
//         console.log("I am Vinay");
//     }
// }
// let ans = greet()
// console.log(ans);

// Using higher order function we do async process

// forEach()-->
// let player = [1,2,3,4,5]
// const newPlayer = player.forEach((num,index)=>{player[index] = num*num})
// console.log(player); // note foreach doesn't return anything.it just do work silently.

// map()-->
// let player = [1,2,3,4,5]
// const newPlayer = player.map((num)=>{return num*num})
// console.log(newPlayer); // output: [ 1, 4, 9, 16, 25 ]

// filter()-->
// let number = [1,2,3,4,5,6];
// number.filter((val,ind)=>{
//     if(ind%2==0){
//         console.log(val);
//     }
// })

// reduce()-->
// let arr = [1,2,3,4,5,6];
// arr.reduce((x,y)=>{
//     x+=y;
//     console.log(x);
// })
