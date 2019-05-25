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
    // 4. add goal event
    form.addEventListener('submit', addGoal);
    // 5. remove goal event
    goalList.addEventListener('click', removeGoal);
    // 6. clear goal event
    clearBtn.addEventListener('click', clearGoals);
    // 7. filter goal event
    filter.addEventListener('keyup', filterGoals);    
}

// 4. add goal event function
function addGoal(e) {
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


// 5. add remove goal event function
function removeGoal(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
    e.target.parentElement.parentElement.remove();
   }
  }
}


// 6. add clear goal event function
function clearGoals() {
  // goalList.innerHTML = '';

  // Fast way than above
  while(goalList.firstChild) {
     goalList.removeChild(goalList.firstChild);
  }
}


// 7. add filter goals event function
function filterGoals(e) {
  const text = e.target.value.toLowerCase();
 
  // remember use querySelectorAll as it returns a node list with a foreach NOTE: if you use something else it returns an HTML collection that you have to convert into an array in order to use foreach!!!
  document.querySelectorAll('.collection-item').forEach(function(goal){
    const item = goal.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1) {
      goal.style.display = 'block';
    } else {
      goal.style.display = 'none';
    }
  });

}


