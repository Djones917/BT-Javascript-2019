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