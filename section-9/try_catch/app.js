//console.log('Connected!');

// This is a basic "try and catch" this helps trouble shoot code the "e" is not for "event" it is for "error" or "err" catch takes that argument of "e"
try {
  // produce a reference error
  myFunction();
} catch(e) {
  //console.log(e);

  // This will work too it will just hide error in console and just show message
  //console.log(e.message);

  // This will give name of error 
  //console.log(e.name);

  // This will give referenceerror
  console.log(e instanceof ReferenceError);
  
  // This will give Typeerror
  console.log(e instanceof TypeError);
}

// The nice thing about try and catch is that you don't have to stop the whole script from running the console.log below works
console.log('Program continues...');