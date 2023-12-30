// const coding = ['js', 'ruby' , 'java' , 'python' , 'cpp']

// const values = coding.forEach ((item) => {
//     return item
// })
// console.log(values);  // it doesn't return any things

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter( (num) => { return num > 4 } )
// console.log(newNums);

// const newNums = []
// myNum.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// Now lets add 10 to each element of above arr using map

// const newNums = myNum.map( (num) => num+10 )

// const newNums = myNum
//                 .map( (num) => { return num*10})
//                 .map( (num) => { return num+10})
//                 .filter( (num) => num >=40 )
// console.log(newNums);


// Reduce Method
const arr = [1,2,3]

const res = arr.reduce( (acc , currVal) => {
    return acc + currVal
}, 0)

console.log(res);

const cart = [
    {
        bookName:'C++',
        price:1200
    },
    {
        bookName:'py',
        price:1209
    },
    {
        bookName:'java',
        price:1230
    }
]

const total = cart.reduce( (acc,currVal) => {
    return acc+ currVal.price
}, 0)

console.log(`Total Price of Cart is ${total}`);

