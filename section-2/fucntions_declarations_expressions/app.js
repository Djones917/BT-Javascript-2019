// FUNCTION DECLARATIONS

// This will give you Hello in the console! This is more for logging.
//function greet() {
//    console.log('Hello');
//}

//greet();



// So use return! But you have to log it with console.log()
function greet(firstName = 'John', lastName = 'Doe') {
    // This was the old way of setting defaults 
   //if(typeof firstName === 'undefined'){firstName = 'John'}
   //if(typeof lastName === 'undefined'){lastName = 'Doe'}
   return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greet('John', 'Doe'));









// Function Expressions NOTE: DON'T FORGET ; AS THEY ARE BASICALLY VARIABLES! These are kind of better when it comes to hoisting ect.

// Named Experssion
//const square = function square() {
//    return 'This is a name expression'
//};


// Anonymous Expression
const square = function(x) {
   return x * x;
};

//console.log(square(8));









// IMMEDIATELY ENVOKEABLE FUNCTION EXPRESSIONS - IIFEs - Used with the moduler pattern - sounds like a fun pattern!
// This won't run 
//(function() {
//   console.log('IIFE Ran!');
//})

// NOTE: You have to add (); to the end for it to run!
//(function () {
//   console.log('IIFE Ran!');
//})();

// Can also take paratmeters
//(function (name) {
//   console.log('Hello ' + name);
//})('Derek');










// Property Methods - A Methdod is just a function in and object

const todo = {
   add: function() {
      console.log('Add todo');
   },
   edti: function() {
      console.log(`Edit todo ${id}`);
   }
}


// You can define a function outside of the object too! NOTE: I believe this is referring to prototypes!
//todo.delete = function() {
//   console.log('Delete todo...');
//}

todo.add();
todo.edti();
//todo.delete();