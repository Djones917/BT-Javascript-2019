//console.log('Connected!');

// This is a basic "try and catch" this helps trouble shoot code the "e" is not for "event" it is for "error" or "err" catch takes that argument of "e"

try {
  // produce a reference error
  myFunction();
} catch(e) {
  console.log(e);
}