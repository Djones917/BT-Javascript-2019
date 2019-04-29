// Traversin the DOM - Move up and down throught the DOM Working with parents and children
// NOTE: So I'm seeing that there is HTML Collections, nodes and HTML elements

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes NOTE: Returns a node list
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType; // This will return a number Refer to the comments below

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype




// Get child element nodes NOTE: Returns a HTML collection - You wil use this more childNode above!
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
// First Child
val = list.firstChild; // This gives a text node
val = list.firstElementChild; // This gives you the first html element!
// Last Child
val = list.lastChild; // This gives a text node
val = list.firstElementChild; // This gives you the last html element!

// Get the count of child elements
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
// Get parents of parents
val = listItem.parentElement.parentElement;

// Get Siblings
val = listItem.nextSibling; // will give text node
val = listItem.nextElementSibling; // Wwll give next HTML sibling
// Get sibling of sibling
val = listItem.nextElementSibling.nextElementSibling;


// Get previous Siblings
val = listItem.previousSibling; // will give text node
val = listItem.previousElementSibling; // Wwll give next HTML sibling NOTE: This could return null because there is just no previous sibling




console.log(val);