//console.log('Connected!');

const user = {email: 'jdoe@gmail.com'};

// This is a basic "try and catch" this helps trouble shoot code the "e" is not for "event" it is for "error" or "err" catch takes that argument of "e"
try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError NOTE: there is one example after that was '"Hello World"'
  // console.log(eval('2 + 2'));

  // Will produce URIError
  // decodeURIComponent('%');

  if(!user.name) {
    //throw 'User has no name';
    throw new syntaxError('User has no name');
  }

} catch(e) {

  console.log(e);

  // You can format errors 
  // console.log('It is NULL!!!');

  // This will work too it will just hide error in console and just show message
  // console.log(e.message);

  // This will give name of error 
  // console.log(e.name);

  // This will give referenceerror this will return a boolean
  // console.log(e instanceof ReferenceError);

  // This will give Typeerror this will return a boolean
  // console.log(e instanceof TypeError);
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