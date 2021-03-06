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
    // 9. DOM Load event
    document.addEventListener('DOMContentLoaded', getGoals);
    // 4. add goal event
    form.addEventListener('submit', addGoal);
    // 5. remove goal event
    goalList.addEventListener('click', removeGoal);
    // 6. clear goal event
    clearBtn.addEventListener('click', clearGoals);
    // 7. filter goal event
    filter.addEventListener('keyup', filterGoals);    
}


// 9. add getGoals function or get goals from LS
function getGoals() {
  let goals;
  if (localStorage.getItem('goals') === null) {
    goals = [];
  } else {
    goals = JSON.parse(localStorage.getItem('goals'));
  }
  goals.forEach(function(goal){
    // Create li element
    const li = document.createElement('li');
    // add a class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(goal));
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
  });
}


// 4. add goal event function NOTE: local storage starts in this function as 8.
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

    // 8a. store goal in local storage
    storeGoalInLocalStorage(goalInput.value);

    // clear input
    goalInput.value = '';

    e.preventDefault();
}


// 8b.  create store goal in local storage function
function storeGoalInLocalStorage(goal) {
  let goals;
  if(localStorage.getItem('goals') === null) {
    goals = [];
  } else {
    goals = JSON.parse(localStorage.getItem('goals'));
  }

  goals.push(goal);

  localStorage.setItem('goals', JSON.stringify(goals));
}


// 5. add remove goal event function
function removeGoal(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
    e.target.parentElement.parentElement.remove();

    // 10. Remove from LS
      removeGoalFromLocalStorage(e.target.parentElement.parentElement);
   }
  }
}


// 10. Remove from LS
function removeGoalFromLocalStorage(goalItem) {
  let goals;
  if (localStorage.getItem('goals') === null) {
    goals = [];
  } else {
    goals = JSON.parse(localStorage.getItem('goals'));
  }

  goals.forEach(function(goal, index){
    if(goalItem.textContent === goal) {
      goals.splice(index, 1);
    }
  });

  localStorage.setItem('goals', JSON.stringify(goals));
}


// 6. add clear goal event function
function clearGoals() {
  // goalList.innerHTML = '';

  // Fast way than above
  while(goalList.firstChild) {
     goalList.removeChild(goalList.firstChild);
  }

  // clear goals from local storage
  clearGoalsFromLocalStorage();
}


// Clear goals from local storage function
function clearGoalsFromLocalStorage() {
  localStorage.clear();
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


