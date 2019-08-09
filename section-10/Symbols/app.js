// Create a Symbol - NOTE: symbole is actually a pure primitive value it does not need "new"
// const sym1 = Symbol();
// const sym2 = Symbol(sym2);

// console.log(sym1);
// console.log(typeof sym1);


// Symbols can never be the same!
// console.log(Symbol() === Symbol()); // false
// Even if you put the same identifier
// console.log(Symbol('123') === Symbol('123')); // false
// console.log(`Hello ${sym1.toString()}`);


// Unique Object Keys - is the bigest reason to use symbols!
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');



const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
// These are not symbols - just to demonstrate in for below
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);


// Symbols are not enumberable in for...in THIS WILL ONLY GIVE US myObj.key3 = 'Prop3' and myObj.key4 = 'Prop4'
// for(let i in myObj) {
//    console.log(`${i}: ${myObj[i]}`);
// }



// Symbols are also ignored when using JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));


