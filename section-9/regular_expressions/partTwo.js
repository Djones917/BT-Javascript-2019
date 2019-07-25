// Part Two - Metacharacter Symbols


const str = '';
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
    if(re.test(str)) {
      console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}