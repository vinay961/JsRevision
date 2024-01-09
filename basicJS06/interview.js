// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// Here we can observe that value of PI cann't overight so in order to change the value of PI we can use getOwnPropertyDescriptor() method.

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);


const chai = {
    name:"Green Tea",
    price: 250,
    isAvaliable: true,

    fun : function(){
        console.log("Not Prepared at");
    }
}

const myObj = Object.getOwnPropertyDescriptors(chai,"name")
console.log(myObj);

// Now let's try to change the value of our properties

Object.defineProperty(chai,'price', {
    // writable:false,
    enumerable:false
})
// when we made the enumerable false then the taken property doesn't iterate.
// for true it works opposite of it.

// console.log(Object.getOwnPropertyDescriptors(chai,'name'));


// for iteration we have to take Object.entries to iterate over the object.
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);   
    }
}
