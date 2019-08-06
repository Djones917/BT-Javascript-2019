// // Iterators - are kind of like advanced loops that can be paused! Generators - are functions that can be paused and return multiple values!

// // Iterator Example

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//         return nextIndex < names.length ? { value: names[nextIndex++], done: false} : {done: true}
//     }
//   }
// } 

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Initiatiate Iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value); // Jack
// console.log(names.next().value); // Jill
// console.log(names.next().value); // John





// Generators

