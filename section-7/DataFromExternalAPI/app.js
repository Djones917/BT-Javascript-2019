document.querySelector('.get-jokes').addEventListener('click', getJokes);

// Don't forget e.preventDefault and then add the elements of form ect inside to get values ect.
function getJokes(e) {
  //console.log('Get jokes!');
  const number = document.querySelector('input[type="number"]').value;
  //console.log(number);
  // Create xhr Request #1
  const xhr = new XMLHttpRequest();

  // xhr open #2
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  
  // xhr onload #4 NOTE: WHAT DO YOU WANT TO DO WITH THE JSON DATA SO YOU JSON.parse  this will put it into an object!!!!
  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      //console.log(response); 

      // Lets bring it to the DOM #5
      let output = '';
      // Lets check to make sure it is a success
      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong!</li>'; // appending with +=
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  // xhr send #3
  xhr.send();
  e.preventDefault();
}