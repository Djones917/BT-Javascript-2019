// Global Scope - var is a function scope declaration so it can be the same outside and inside a function and carry two different values. let and const are block level scope.
// Let and const are the way most programming languages work. var will change!!! var can be a security issue if something is declared globally and then the same is declared in a block or function scope.
var a = 1;
let b = 2;
const c = 3;

// function test() {
//    var a = 4;
//   let b = 5;
//    const c = 6;  
//    console.log('Function Scope: ', a, b, c)
// } 

// test();









// Block Scope anything wrapped in {} if statement, for loop ect.
// if(true) {
    // Block Scope - If statement Note: THIS WILL PRINT OUT 4, 2, 3 BECAUSE OF VAR IMPORTANT!!!
//    var a = 4;
//    let b = 5;
//    const c = 6;  
//    console.log('Block Scope - if statement: ', a, b, c)
// }



// Block Scope Cont'd with for loop NOTE; USING LET THIS WILL RUN THROUGH 0-9 BECAUSE OF WHAT IS DECLARED ABOVE IF YOU CHANGE THE LET IN THE FOR LOOP TO VAR IT WILL PRINT SO THE GLOBAL SCOPE WILL PRINT 10,2,3
// for(let a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }




console.log('Global Scope: ',  a, b, c);