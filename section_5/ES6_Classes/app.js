//console.log('Connected!');

// create class ES6 
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there, ${firstName} ${lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    //This is a static method
    static addNumbers(x, y) {
       return x + y;
    }
}


// Remember this is instantiate!
const mary = new Person('Mary', 'Williams', '11-30-1980');

mary.getsMarried('Thompson');

//console.log(mary);
//console.log(mary.greeting());
//console.log(mary.calculateAge());
console.log(mary);


// Using the static method
console.log(Person.addNumbers(5,6));