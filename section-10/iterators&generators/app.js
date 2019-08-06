// Iterators - are kind of like advanced loops that can be paused! Generators - are functions that can be paused and return multiple values!


// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
        return nextIndex < names.length ? { value: names[nextIndex++], done: false} : {done: true}
    }
  }
} 





// Create an array of names
const nameArr = ['Jack', 'Jill', 'John'];
