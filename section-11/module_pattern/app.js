// Module and Revealing Module Pattern
// Basic Structure - IIFE Function

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions
//   }
// })();


// STANDARD MODULE PATTERN - CAN'T ACCESS WHAT'S INSIDE!
// const UICtrl = (function() {
//   let text = 'Hello World!';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();




// REAVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = []; // let _data = [];  NOTE: UNDER SCORE IS A PRIVATE VARIABLE!!!

  function add(item) {
    data.push(item);
    console.log('Item added...');    
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});

