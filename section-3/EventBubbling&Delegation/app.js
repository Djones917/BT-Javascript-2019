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










// Event Delegation is the opposite of Event bubbling with delegation we put the event listener on the parent and use a condition/logic to target the element.
// This will only work on one so this is where you would use event delegation you would also you event delegation when you dynamically insert something into a particular place.
//const delItem = document.querySelector('.delete-item');

//delItem.addEventListener('click', deleteItem);

// So now lets do delegation by grabbing a parent and then going in to grab the particular child
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    //if(e.target.parentElement.className === 'delete-item secondary-content') {
    //   console.log('Delete Item!');
    //}

    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('Delete Item!');
        e.target.parentElement.parentElement.remove();
    }
}
