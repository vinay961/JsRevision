// Some basic loops are study by our self

// Higher Order Array loop

const arr = [1,2,3,5,6]

// for-of loop
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    if(greet == " "){
        continue
    }
    // console.log(`Each char is ${greet}`);

}

// Maps -> same as object but only difference is that it doesn't contain duplicates, it also keep track of order means if you entered something first then it appear frist , second entered apppear second and so on.

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

// console.log(map);

// for (const key of map) {
//     console.log(key); // It give array of key and values of every entries
// }

// for (const [key,value] of map) {
//     console.log(key , ":-" , value);
// }

// Using above syntax we cann't iterate objects

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby'
}

// Lets use for-In loop 
for (const key in myObject) {
    // console.log(key);
}

const programming = ['js','rb','py']

for (const key in programming) {
    // console.log(key); // In case of for-of loop we get values insted of keys so this is difference between them.
}

// FOR-EACH LOOP

// programming.forEach( function (item) {
//     console.log(item);
// } )

// programming.forEach( (item) => {
//     console.log(item);
// } )

// programming.forEach( (item,index,arr) => {
//     console.log(item , index , arr);
// } )

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
