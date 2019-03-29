let val;

const today = new Date();

// This will print that date! dates can be written different ways and still work 9-10-81 and 9/10/81 and September 10 1981.
let birthday = new Date('9-10-81 11:25:00'); // The 11:25:00 is the time and you can set that too!

//val = today;
val = today.getMonth(); // Months are zero based January = 0
// Get the day of the month
val = today.getDate();
// Get day - Sunday, Monday, Tuesday ect zero based!
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// Get today's time stamp
val = today.getTime();

// Set month
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);




// If you add typeof you will get an object but this will give today's date!
console.log(val);