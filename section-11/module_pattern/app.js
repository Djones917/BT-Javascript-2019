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

    if(type === 'simple') {
      member = new SimpleMembership();      
    } else if (type === 'standard') {
      member = new StandardMembership();  
    } else if (type === 'super') {
      member = new SuperMembership();
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}



const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'super'));
members.push(factory.createMember('David Smith', 'simple'));
members.push(factory.createMember('Skipper Doody', 'standard'));

// console.log(members);

members.forEach(function(member) {
  member.define();
});


