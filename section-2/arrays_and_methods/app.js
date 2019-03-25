// Create some arrays
const numbers = [43, 56, 33, 12, 9, 1, 22];
// Second way to create array is the array constructor
const numbers2 = new Array(6, 8, 2, 19, 21, 5, 4);
// Array of strings
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// Mixed array
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];



let val;



// Get array length
val = numbers.length;
// Check if it is an array
val = Array.isArray(numbers);
// Get a single value in array NOTE: Remember arrays are 0 based!
val = numbers[3];
// Insert into array
numbers[2] = 100;
// Find index value
val = numbers.indexOf(36);

// Mutating arrays
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,1);
// Reverse
numbers.reverse();


// Concatenate
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();   EXAMPLE: WILL RETURN SOMETHING LIKE THIS 102, 21, 30, 49, 55 IT'S KIND OF SORTING 1,2,3,4,5 BUT IT'S NOT DOING FROM LOWEST TO HIGHEST VALUE!
// SO USE THIS TO SORT NUMBERS
// USE THE COMPARE FUNCTION
//val = numbers.sort(function(x,y) {
//   return x - y;
//});
// Reverse sort
//val = numbers.sort(function(x,y) {
//   return y - x;
//});


// FIND
function under50(num){
   return num < 50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);
