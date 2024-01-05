// prototypes are objects that are associated with every function and objects by default.

function example(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
example("Vinay","Rai",21)

console.log(example.lastName);
example.prototype.score = 20;
console.log(example.score);