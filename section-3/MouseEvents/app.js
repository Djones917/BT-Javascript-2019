const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click
//clearBtn.document.addEventListener('click', runEvent);

// Double Click
//clearBtn.document.addEventListener('dblclick', runEvent);

// Mouse Down -NOTE: TO FIRE MOUSE DOWN IT"S A CLICK AND HOLD!!!!
clearBtn.document.addEventListener('mousedown', runEvent);

// Mouse UP -NOTE: TO FIRE MOUSE up IT"S A CLICK AND HOLD THEN LET GO AND IT WILL FIRE!!!!
clearBtn.document.addEventListener('mousedown', runEvent);

// Mouse ENTER
clearBtn.document.addEventListener('mouseenter', runEvent);

// Mouse Leave
clearBtn.document.addEventListener('mouseleave', runEvent);

// Mouse OVER
clearBtn.document.addEventListener('mouseover', runEvent);

// Mouse OUT
clearBtn.document.addEventListener('mouseout', runEvent);

// Mouse Move NOTE: ANY MOVEMENT INSIDE SELECTED ELEMENT!!!
clearBtn.document.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);

   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

