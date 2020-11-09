let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);
console.log(result.sort());

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/gi; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result);
