// Traversin the DOM - Move up and down throught the DOM Working with parents and children

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
val = list.children[1].textContent = 'Hello';
// Children of children

console.log(val);