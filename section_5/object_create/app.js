//console.log('Connected!');

// This is ES5 but ES6 is better for this!

// THIS IS ONE WAY TO DO THIS!!!!
// Using Object.create
const personPrototypes = {
    greeting: function() {
        return `Hello there, ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName) {
       this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);

mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting()); // this creats an object with information above



// NOW LETS DO IT ANOTHER WAY!!! USING THE personPrototypes above
const derek = Object.create(personPrototypes, {
     firstName: {value: 'Derek'},
     lastName: {value: 'Jones'},
     age: {value: 25}
});

console.log(derek);

console.log(derek.greeting());