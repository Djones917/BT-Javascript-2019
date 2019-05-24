// 1. Define UI Variables
const form = document.querySelector('#goal-form');
const goalList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-goals');
const filter = document.querySelector('#filter');
const goalInput = document.querySelector('#goal');
console.log(goalInput);

// 2. Load all Event Listener
loadEventListeners();

// 3. Load all Event Listeners
function loadEventListeners() {
    // 4. add task event
    form.addEventListener('submit', addTask);
    
}


// 4. add task event function
function addTask(e) {
    if(goalInput.value === '') {
      alert('Please add a goal.');
    }

    // Create li element
    const li = document.createElement('li');
    // add a class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(goalInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add html icon
    link.innerHTML = ' <i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);


    // append li to ul
    goalList.appendChild(li);

    // clear input
    goalInput.value = '';

    e.preventDefault();
}


