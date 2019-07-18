//console.log('Connected!');

// This is a basic "try and catch" this helps trouble shoot code the "e" is not for "event" it is for "error" or "err" catch takes that argument of "e"
try {
  // Produce a reference error
  myFunction();
  // Produce a type error
  null.myFunction();
} catch(e) {
  console.log(e);

  // This will work too it will just hide error in console and just show message
  //console.log(e.message);

  // This will give name of error 
  //console.log(e.name);

  // This will give referenceerror this will return a boolean
  //console.log(e instanceof ReferenceError);

  // This will give Typeerror this will return a boolean
  //console.log(e instanceof TypeError);
}

// The nice thing about try and catch is that you don't have to stop the whole script from running the console.log below works
console.log('Program continues...');






// You can also add "finally" to a try and catch example below
try {
  someFunction();
} catch(e) {
  console.log(e);
} finally {
  console.log('Finally runs regardless of result...');
}