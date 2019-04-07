// Window Object - document object is part of the window object
// In the console if you type window it will bring up all of the window properties
// Windows Methods / Objects / Properties


// Console.log - You could do this window.console.log('Hello');
// But this is better
//console.log(123);


// Alert - window.alert();
//alert('Hello, World');


// Prompt
// const input = prompt();
// alert(input);


// Confirm - often used when deleting something
// if(confirm('Are you sure?')) {
//  console.log('Yes');
// } else {
//   console.log('NO'); 
// }





let val;

// Outer Height and Width
val = window.outerHeight;
val = window.outerWidth;

// Inner Height and Width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points - Y is vertical X is horizontal - This is good for when you are building a site and you need to know when to start an animation ect.
val = window.scrollY;
val = window.scrollX;

// Location Objects
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


// Redirect
//window.location.href = 'http://google.com';
// Reload
//window.location.reload();



// History Object
// window.history.go(-1);
// val = window.history.length;


// Navagator Object - This works with the actual browswer Chrome, Firefox ect.
val - window.navigator;




console.log(val);