const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8); // Rounds to 3
val = Math.ceil(2.4); // Will get 3 because it rounds up
val = Math.floor(2.8); // Will get 2 becasue it rounds down
val = Math.sqrt(64); // Will get square root of 8
val = Math.abs(-3); // Will give us 3 as absolute
val = Math.pow(8, 2); // Will get 64 power
val = Math.min(2,33,4,1,55,6,3,-2); // Will return -2 because it's looking for the min number
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // Will return 55 because it's looking for the max number
val = Math.random(); // This will keep on giving you random numbers in decimal. This works all by it's self.


// val = Math.random() * 20; // This will kick out number like 2.5, 1.2. 5.3 ect It will be whole numbers followed be decimals like 5.656595 ect
// val = Math.random() * 20 + 1; // This will do the same but keep it at 20
val = Math.floor(val = Math.random() * 20 + 1);


console.log(val);
