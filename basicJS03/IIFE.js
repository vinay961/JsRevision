// Immediately Invoked Function Expression (IIFE)

/* Global scope se ho rhe polution se bachne k liye IIFE ka use krte hai */


// Name IIFE
(function(){})(); // semi colon is necessary so that compiler know where to end


// Just IIFE
( (name) => {console.log(`hello ${name}`);} )("Vinay");
