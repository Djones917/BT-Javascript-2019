// Create the element
const li = document.createElement('li');

// Add a class to it
li.className = 'collection-item';

// Add a id to it
li.id = 'new-item';

// Add a attribute to it
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));


console.log(li);