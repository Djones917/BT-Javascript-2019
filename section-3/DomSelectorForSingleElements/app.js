// document.getElementById()
// console.log(document.getElementById('task-title'));



// Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);



// Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// Only do this with events ect.
// document.getElementById('task-title').style.display = 'none';



// Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// Insert HTML - example use ajax fetch then add some HTML with it.
// document.getElementById('task-title').innerHTML = '<span style="color: red">Task List</span>';






// INPORTANT: YOU NEED TO CASHE THE ABOVE TO MAKE IT EFFICIENT SO STORE IT IN A VARIABLE!!!  LETS CHANGE ABOVE THE 'CHANGE STYLING AND CHANGE CONTENT' AND ADD IT BELOW THE RIGHT WAY!
// const taskTitle = document.getElementById('task-title');



// Change styling but stored in a variable
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// Only do this with events ect.
// document.getElementById('task-title').style.display = 'none';



// Change content but stored in a variable
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// Insert HTML - example use ajax fetch then add some HTML with it.
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';








// document.querySelector() - Newer and more powerful because you can select both ID and Classes!

console.log(document.querySelector('#task-title'));
