// prototypes are objects that are associated with every function and objects by default.

function example(username,score){
    this.username = username
    this.score = score
}

example.prototype.increment = function(){
    this.score++
}
example.prototype.printMe = function(){
    console.log(`${this.username} took chai of rupee ${this.score}`);
}

const x = new example("Vinay",10)
x.increment()
// x.printMe()

// let's summaries the above work here , we create a function example and then using new keyword we create the instance of example function with the argument given and the prototype is linked with that and when the contructor function example is called then the new object is returned.


// ## Prototype

let myName = "Vinay        "
console.log(myName.length); // lenght is 13, now we want a funtion truelength that return true lenght of string, but this type of function doesn't exist so In order to introduce it we use prototype.

let myHeroes = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spider power id ${this.spiderman}`);
    }
}

// As we know that top level hererical is object so all other things go through when we declare a function using prototype in object than it is present for all other things(like array, string, etc) also.

Object.prototype.Vinay = function(){
    console.log("I am present at all places.");
}
// myHeroes.Vinay()



// ## Prototype Inheritance 
const user = {
    username:"Vinay"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(Teacher,TeachingSupport)
console.log(TeachingSupport[isAvailable]);