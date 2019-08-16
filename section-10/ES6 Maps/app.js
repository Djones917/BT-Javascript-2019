// MAPS = KEY-VALUE PAIRS - can use ANY type as a KEY or Value!

const map1 = new Map();

// Set Keys
const key1 = 'Some String',
      key2 = {},
      key3 = function() {
               console.log('Hi');
             }


// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// We can also count the values inside a map
// console.log(map1.size); // returns Value of key1, Value of key2, Value of key3

// Iterating through maps
// loop using for...of to get keys and values
// for(let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for (let key of map1.keys()) {
//   console.log(key);
// }

// Iterate values only
// for (let value of map1.values()) {
//   console.log(value);
// }



// Loop through with forEach
// map1.forEach(function(value, key){
//   console.log(`${key} = ${value}`);
// });


