//  Let's define something using class then do the same task using prototype

// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username}`.toUpperCase()
//     }
// }

// const x = new User("Vinay","Rai@kanpur.com",123)
// console.log(x.encryptPassword());  // 123abc is our output
// console.log(x.changeUsername()); // VINAY is our output


// Now lets try to do the above task with the help of prototype

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username}`.toUpperCase()
}
const x = new user("Vinay","Rai@kanpur.com",123)
console.log(x.encryptPassword());
console.log(x.changeUsername());

// ## Note--> We use extends keyword for inheritence in js, 