// Replace Element

// Create Element
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);












// Remove Element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Rmove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);


// Classes and attributes
const firstLi = doccument.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes

console.log(val);









