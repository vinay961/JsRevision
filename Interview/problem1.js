// Here we have to make a function that works as settimeout but doesn't block the thread of js as javascript is single threaded language.


// let x = 10
// setTimeout(()=>{
//     console.log("Value of x is:",x)
// },2000)


function blockingSleep(ms){
    let timeNow = new Date().getTime();
    while(true){
        const y = new Date().getTime();
        console.log(y,timeNow,timeNow+ms);
        if(y> timeNow+ms) break;
    }
}

async function process() {
    console.log('Hello!');
    blockingSleep(3000)
    console.log('Bye.');
}

console.log("Starting");
process();
console.log("End")