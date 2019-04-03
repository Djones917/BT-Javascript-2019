 // NOTE: IF STATEMENTS DON'T NEED BRACES {} BUT THEY ARE RECOMMENDED!!!! 
 
 //   if(something) {
 //   do something
 //   } else {
 //       do something else
 //   }


 const id = 100;



 // Equal to  NOTE: = is to assign and == is equal to and === is equal and type!
// if(id == 100) {
  // console.log('Correct!');
 //} else {
  //  console.log('Incorrect!'); 
 //}




 // Not Equal NOTE: = is to assign and != is equal to and !== is equal and type!
//if (id != 100) {
 //   console.log('Correct!');
//} else {
 //   console.log('Incorrect!');
//}




// Equal to Value and Type NOTE: MOST OF THE TIME THIS IS BETTER AS IT PREVENTS ERRORS LATER ON!
//if (id === 100) {
 //   console.log('Correct!');
//} else {
//    console.log('Incorrect!');
//}




// Not equal to Value and Type NOTE: MOST OF THE TIME THIS IS BETTER AS IT PREVENTS ERRORS LATER ON!
//if (id !== 100) {
//    console.log('Correct!');
//} else {
 //   console.log('Incorrect!');
//}





// Now lets test to see if the above is actually difined NOTE: you might think you would do this!!!
// WARNING: IF YOU COMMIT OUT THE ABOVE CONST ID IT WILL THROW AN ERROR FOR THE CODE!
//if(id) {
 //  console.log(`The ID is ${id}`);
//} else {
//  console.log('No ID');
//}

// THIS IS THE CORRECT WAY TO TEST If undefined So the best is to use typeof to test
//if(typeof id !== 'undefined') {
//  console.log(`The ID is ${id}`);
//} else {
//  console.log('No ID');
//}





// GREATER OR LESS THAN NOTE: > < >= <=
//if(id > 200) {
//  console.log('Correct');
//} else {
//  console.log('Incorrect');
//}




// IF ELSE
const color = 'red';

//if(color === 'red') {
//  console.log('Color is red');
//} else if(color === 'blue') {
//  console.log('Color is blue');
//} else {
//  console.log('Color is not red or blue');
//}






// LOGICAL OPERATORS NOTE: AND && both sides need to be true
const name = 'Steve';
const age = 20;

if(age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`{name} is an adult`);
}


// OR ||
if(age < 16 || age > 65) {
  console.log(`${name} can not run in the race!`);
} else {
  console.log(`${name} is registered for the race!`);
}


// Ternary Operator - Shorthand for conditionals Ternary operator is ? else is :
console.log(id === 100 ? 'Correct' : 'Not Correct');


