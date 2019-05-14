// Event bubbling up of events through the Dom to it's parent.
// Event Bubbling Remember bubbles up from child all the way up to parent!
//document.querySelector('.card-title').addEventListener('click', function(){
//    console.log('Card Title');
//});

//document.querySelector('.card-content').addEventListener('click', function () {
//    console.log('Card Content');
//});

//document.querySelector('.card').addEventListener('click', function () {
//    console.log('Card');
//});

//document.querySelector('.col').addEventListener('click', function () {
//    console.log('COL');
//});










// Event Delegation is the opposite of Event bubbling with delegation we put the event listener on the parent and use logic to target the element.
const deleteItem = document.querySelector('.delete-item');
