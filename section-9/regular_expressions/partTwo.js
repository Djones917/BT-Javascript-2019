// Part Two - Metacharacter Symbols


let re;
// Literal Character
re = /hello/;
re = /hello/i; // remember i for case insensitive


// Metacharacter Symbols
re = /^h/i;        // ^ Must Start With
re = /d$/i;        // $ Must End With
re = /^hello$/i;   // ^ Must start With $ And End With 
re = /h.llo/i;     // . Matches Any One Character
re = /h*llo/i;     // * Matches Any Character One or more times
re = /gre?a?y/i;  // ? Optional Character means the word could be spelled two different ways example: 'grey' or 'gray' So it will take both NOTE: it will work if it's just 'gry' because 'e' and 'a' or Optional.
re = /gre?a?y\?/i;  // Escape Character is the backslash \ Just like you would escape in javascript.


// String to match
const str = 'Hello';

// Log results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
    if(re.test(str)) {
      console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);