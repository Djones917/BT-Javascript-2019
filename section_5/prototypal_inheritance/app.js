//console.log('connected!');

// Person Constructor
function Person(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
}

// Greeting "prototype method"
Person.prototype.greeting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}`;
}


const person1 = new Person('John', 'Doe');

console.log(person1.greeting());
