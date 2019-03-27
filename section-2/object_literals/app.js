// Object literal
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['Music', 'Sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 1987;
    }
}


let val;

val = person;

// Get specific value
// Dot notation - recommended!
val = person.firstName;
// Bracket notation
val = person['firstName'];

console.log(val);