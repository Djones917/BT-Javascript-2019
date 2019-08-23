// Module and Revealing Module Pattern
// Basic Structure - IIFE Function

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions
//   }
// })();


// STANDARD MODULE PATTERN - CAN'T ACCESS WHAT'S INSIDE!
const UICtrl = (function() {
  let text = 'Hello World!';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
    }
  }
})();