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








// Generators - NOTE: The * tells it that it is a generator!

// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value); // Jack
// console.log(name.next().value); // Jill
// console.log(name.next().value); // John


// ID Creator - with generator *
function* createIds() {
    let index - 0;

    while(true) {
       yield index++;
    }
}


const gen = createIds();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // 5
console.log(gen.next().value); // 6 ect... 