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

//console.log(person1.greeting());




// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
   // Call is a function that allows us to call another function calls it from above!!!
   Person.call(this, firstName, lastName);
   this.phone = phone;
   this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constuctor = Customer;

//  Create Customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard' );

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function() {
   return `Hello there, ${this.firstName} ${this.lastName} welcome to our company!`;
}

console.log(customer1.greeting());