const form = document.querySelector('form');
const taskInput = document.getElementById('task');


// Let's add an Event Listener to the form
form.addEventListener('submit', runEvent);

// Create runEvent function
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
}