// Replace Element

// Create Element
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

console.loog(newHeading);