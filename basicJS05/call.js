function setUserName(username){
    this.username = username;
    console.log("Yes");
}

// function setuser(username,email,age){
//     setUserName(username)
//     this.email = email
//     this.age = age
// }

// const x = new setuser("Vinay","Rai@buss.com",21)
// console.log(x);

// when we run above code then the output is Yes and setuser{email: 'Rai@buss.com',age: 21}, but they didn't set username, so to do this we use call.

function setuser(username,email,age){
    setUserName.call(this,username)
    this.email = email
    this.age = age
}

const x = new setuser("Vinay","Rai@buss.com",21)
console.log(x);