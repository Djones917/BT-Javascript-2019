// Object Literall - this is fine for one instance basic
const personOne = {
   name: 'Vincent',
   age: 6
}
console.log(personOne);
console.log(personOne.age);





// Basic Constructor NOTE: ON CONSTRUCTORS YOU CAPITALIAZE THE FIRST WORD!!!
/*function Person() {
  this.name = 'Derek';
}
// Instantiate a person object from above
const derek = new Person();
console.log(derek);
console.log(john);*/ // This will return DEREK because it's hard coded above!


// Another example of a basic constructor THIS IS NOT HARD CODED AS ABOVE!
/*function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Instantiate a person object from above - new is part of the constructor
const derek = new Person('Vincent', 6);
console.log(derek);*/






// Person constructor - CONSTRUCTORS START WITH A CAPITOL LETTER!!!
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
