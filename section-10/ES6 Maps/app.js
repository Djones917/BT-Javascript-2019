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
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// We can also count the values inside a map
console.log(map1.size); // returns Value of key1, Value of key2, Value of key3

