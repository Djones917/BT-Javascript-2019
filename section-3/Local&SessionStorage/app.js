// NOTE: THE DIFFERENCE BETWEEN LOCAL STORAGE AND SESSION STORAGE IS SESSION CLEARS WHEN YOU CLOSE BROWSER. LOCAL HAS TO BE CLEARED MANUALLY

// Set local storage item 
//localStorage.setItem('name', 'John');


// Set session storage item 
//sessionStorage.setItem('name', 'Beth');


// Remove from storage  
//localStorage.removeItem('name');


// Get from storage
//localStorage.setItem('name', 'John');
//localStorage.setItem('age', '30');
//const name = localStorage.getItem('name');
//const age = localStorage.getItem('age');


// Clear from local storage
//localStorage.clear();
//console.log(name, age);






// To add it to the form NOTE: REMEMBER WHEN ADDIN TO STORAGE ANYTHING YOU SET WILL BE REPLACED SO MAKE AN ARRAY TO HOLD MULTIPLE TASKS AND STORE AS A STRING!!!
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved!');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});

