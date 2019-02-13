//console.log('Connected!');

// Object.prototype
// Person.prototype

// Person Constructor
function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
    //this.calculateAge = function() {
       // const diff = Date.now() - this.birthday.getTime();
       // const ageDate = new Date(diff);
       // return Math.abs(ageDate.getUTCFullYear() - 1970);
   // }
}


// Calulate age - move this out of the constructor because it does the same thing over and over.
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Lets build another prototype with for fullname
Person.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
}

// Gets Married
Person.prototype.getsMarried = function(newlastname) {
    this.lastname = newlastname;
}



// __prototype__ object and person
// instantiate instance
const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

// Lets call calculate age now that it is out of the constructor
console.log(john.calculateAge()); 

// Lets call get full name
console.log(mary.getFullName());

// Use gets married
mary.getsMarried('Smith');

// Lets call new full name
console.log(mary.getFullName());


// Now lets look at object property
console.log(mary.hasOwnProperty('firstname')); // true
console.log(mary.hasOwnProperty(getFullName)); // false because it's not part of the property
