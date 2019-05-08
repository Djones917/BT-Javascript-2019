const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click
//clearBtn.document.addEventListener('click', runEvent);

// Double Click
//clearBtn.document.addEventListener('dblclick', runEvent);

// Mouse Down -NOTE: TO FIRE MOUSE DOWN IT"S A CLICK AND HOLD!!!!
clearBtn.document.addEventListener('mousedown', runEvent);

// Mouse up -NOTE: TO FIRE MOUSE up IT"S A CLICK AND HOLD THEN LET GO AND IT WILL FIRE!!!!
clearBtn.document.addEventListener('mousedown', runEvent);

// Event Handler
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);
}

