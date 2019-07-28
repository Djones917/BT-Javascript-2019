// Part Two - Metacharacter Symbols
// Part Three - Character Sets and Quantifiers
// Part Four - Shorthand Character Classes


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


// Brackets [] - Charatcer Sets
re = /gr[ae]y/i;  // Must be an 'a' or 'e' this is better than escape in some ways
re = /[GF]ray/i;   // Must be a 'G' or 'F'
re = /^[GF]ray/i;   // Matches 'G' or 'F' NOTE: NOTICE WHERE THE ^ IS LOCATED!!!
re = /[^GF]ray/i;   // Matches anything except 'G' or 'F' NOTE: NOTICE WHERE THE ^ IS LOCATED!!!
re = /[A-Z]ray/;   // Matches any Uppercase Letter
re = /[A-Za-z]ray/;   // Matches any Uppercase or Lowercase Letter
re = /[0-9]ray/;      // Matches any digit 0 - 9
re = /[0-9][0-9]ray/;  // If you added 10ray it would work because of the double expressions [][] NOTE: YOU CAN USE MULTIPLE EXPRESSIONS!


// Braces {} - Quantifiers
re = /Hel{2}o/i;   // Must occur {m} exactly amount of times - This will look for 2 'l' Letter comes before number
re = /Hel{2,4}o/i;   // Must occur {m} exactly amount of times
re = /Hel{2,}o/i;   // Must occur at least {m} times


// Parenthesis () - Grouping
re = /^([0-9]x){3}$/;


// Shorthand Character Classes
re = /\w/;   // Word Character - alphanumeric (This is all letters or numbers) or _
re = /\w+/;  // + makes it look at all the word characters
re = /\W/;   // Non-word characters - Everything else except all letters, numbers or _




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