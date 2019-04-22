// document.getElementsByClassName(); This will give us an HTML Collection or index of all class name items

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
