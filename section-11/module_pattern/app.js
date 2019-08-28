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
// const ItemCtrl = (function() {
//   let data = []; // let _data = [];  NOTE: UNDER SCORE IS A PRIVATE VARIABLE!!!

//   function add(item) {
//     data.push(item);
//     console.log('Item added...');    
//   }

//   function get(id) {
//     return data.find(item => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     get: get
//   }
// })();

// ItemCtrl.add({id: 1, name: 'John'});





// SINGLETON PATTERN - NOTE: I INCLUDED THIS IN BECAUSE IT WAS A SHORT LESSON

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Derek'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);





// FACTORY PATTERN 

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;
  }
}