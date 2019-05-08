const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click
clearBtn.document.addEventListener('click', runEvent);
// Double Click
clearBtn.document.addEventListener('dblclick', runEvent);



// Event Handler
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);
}

