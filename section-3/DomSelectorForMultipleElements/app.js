// document.getElementsByClassName(); This will give us an HTML Collection  or index of all class name items (NOTE: HTML COLLECTION IS NOT AN ARRAY!!!!)

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello World';

// Another way to select

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);








// document.getElementsByTagName()

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello World';


// TURN HTML COLLECTION INTO AN ARRAY! (NOTE: HTML COLLECTION IS NOT AN ARRAY!!!!) Remeber use let to change something as const will not let you!
// lis = Array.from(lis);
// lis.reverse();
// Now that it's an array we can do a foreach
// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index} : Hello`;
// });

// console.log(lis);








// document.querySelectorAll() you can put any kind of css selector in!
const items = document.querySelectorAll('ul.collection li-collection-item');

console.log(items);

