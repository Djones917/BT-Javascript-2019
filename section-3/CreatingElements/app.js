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



// Create new link element
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML('<i class="fa fa-remove"></i>');
// Append link into li
li.appendChild(link);




// Append li as child to ul
document.querySelector('ul.collection').appendChild('li');


console.log(li);