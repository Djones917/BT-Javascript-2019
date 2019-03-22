const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Salt Lake City';
let html;

// Without template literals (es5) 
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// NOTE: YOU CAN BREAK THIS CODE FROM ABOVE UP AND PUT EACH LI ON IT'S OWN LINE USING MORE CONCATENATION, IT'S THE OLD WAY OF DOING IT!
html = '<ul>' +
    '<li>Name: ' + name +'</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';


    
function hello() {
    return 'Hello';
}


// With template literals
html = `
    <ul>  
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>${2 + 2}</li>
      <li>${hello()}</li>
      <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;


document.body.innerHTML = html;
