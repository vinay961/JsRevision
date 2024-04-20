// Spotify Interview question on javascript

function sample1(a,b){

}
console.log(sample1.length);  // output is 2

function sample2(a,b, ... rest){
}

console.log(sample2.length);  // output is 2 as rest doesn't count here.

function sample3(a,b=0,c){
}

console.log(sample3.length);  // output is 1, when we assign a value to the parameter then that and after that parameter is not considered.