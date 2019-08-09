// Create a Symbol - NOTE: symbole is actually a primitive value it does not need "new"
const sym1 = Symbol();
const sym2 = Symbol(sym2);

console.log(sym1);