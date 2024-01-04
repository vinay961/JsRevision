// The Promises object represents the eventual completion(or failure) of asynchronous operation and its resulting value.
// Promise future me jakr complete hota hai, Promise three states me hoskta hai 1.pending 2.fulfilled 3.rejected

const promiseOne = new Promise(function(resolve,rejected){
    // Do an async task
    setTimeout(function(){ 
        // console.log("Async Task completed.")
        resolve()
    },1000)
});

promiseOne.then(function(){
    // console.log("Promise Comsumed");
})

// when we run without resolve() we get output that Async task completed only but when we write resolve() then it connect the this with .then then Promise consumed also printed.

const promiseTwo = new Promise(function(resolve,rejected){
    setTimeout(function(){
        resolve({username: "Vinay", email:"vinay@student.com"})
    },1000)
})
promiseTwo.then(function(user){
    // console.log(user);
})

// In above we learn that whatever parameter we pass from resolve it get found on .then function as well, where we can consume it.

const promiseThree = new Promise(function(resolve,rejected){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"VinayRai",email:"123@rai.com"})
        }
        else{
            rejected('ERROR: Something went wrong.')
        }
    },1000)
})

promiseThree.then((user)=>{
    // console.log(user);
    return user.username
}).then((username) => {
    // console.log(username);
}).catch(function(error){
    // console.log(error);
}).finally(function(){
    // console.log('I am always get executed.');
})

// In above code we can understand that something returned by .then() can be handled by other .then(), as we have to access the username then first we print user and then return the user.username then the username get in another .then() and we print that thing. finally always get executed.

const promiseFour = new Promise(function(resolve,rejected){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }else{
            rejected("ERROR: JS went wrong.")
        }
    },1000)
})

async function consumePromiseFour(){
    try {
        const response = await promiseFour
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumePromiseFour()


// Let's try to fetch some data from server

// async function fetching(){
//     try {
//         const response = await fetch('https://api.github.com/users/vinay961')
//         const res = await response.json()
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetching()


// fetch('https://api.github.com/users/vinay961').then(function(response){
//     return response.json()
// }).then(function(res){
//     console.log(res);
// }).catch(function(err){
//     console.log(err);
// })

