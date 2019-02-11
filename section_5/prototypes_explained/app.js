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



// __prototype__ object and person
// instantiate instance
const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);