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

// Get child element nodes NOTE: Returns a HTML collection
val = list;

console.log(val);