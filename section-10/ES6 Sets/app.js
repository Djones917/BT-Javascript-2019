// SETS - Store unique values of any type!

const set1 = new Set();

// Add values to set - NOTE: YOU CAN USE SET1 OR SET2 FORMATS TO ADD VALUES!
// SET1
set1.add(100);
set1.add('A string');
set1.add({name: 'Derek'});
set1.add(true);
// set1.add(100); NOTE: console.log will only print (4) it will not add the first copy because it's already there! Set values have to be unique!
console.log(set1);


// SET2 
// const set2 = new Set([1, true, 'string']);
// console.log(set2);


// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100)); // return true
console.log(set1.has(50 + 50)); // return true
console.log(set1.has({name: 'John'})); // return false because it's a reference object!
// Example from data types
//console.log({ name: 'John' } === { name: 'John' }); // Return false 

// Delete from the set
set1.delete(100);


