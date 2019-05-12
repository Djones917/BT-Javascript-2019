// Declare your elements
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear your input 
taskInput.value = '';

// Let's add an Event Listener to the form
//form.addEventListener('submit', runEvent);

// Keydown - Let's add an Event Listener to the taskInput NOTE: REMEMBER EVERYTIME YOU TYPE IT'S KEYDOWN
//taskInput.addEventListener('keydown', runEvent);

// Keyup - Let's add an Event Listener to the taskInput NOTE: REMEMBER EVERYTIME YOU TYPE AND THE KEY COMES UP IT'S KEYUP
//taskInput.addEventListener('keyup', runEvent);

// Keypress 
taskInput.addEventListener('keypress', runEvent);

// Focus - when you click in element focus comes in
taskInput.addEventListener('focus', runEvent);

// Blur - when you click outside of an element blur comes in
taskInput.addEventListener('blur', runEvent);


// Create runEvent function
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    // You might want to safe the values typed with the keydown above this is how you would do it!
    console.log(e.target.value);
    // Take the above e.target.value and print it to the h5
    //heading.innerText = e.target.value;


    // Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}