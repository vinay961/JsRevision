//*************************************** Date ***************************

let myDate = new Date();
// console.log(myDate.toDateString());

let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// note - month always start from 0(jan), when written in above format.

let timestamp = Date.now()
console.log(timestamp);

// how to convert above find milli-seconds in seconds

console.log(Math.floor(timestamp/1000));

myDate.toLocaleString('default', {
    weekday: "long"
})
console.log(myDate.toString());