
// (alert("this is a test"))
// brings in the assert module for unit testing
//const assert = require('assert');
// brings in the readline module to access the command line
//const readline = require('readline');
// use the readline module to print out to the command line
//const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// herePiggyPiggy is set to get the button.
// An event listener is then added to it with an anonymouse arrow function.
// Piggytransale identifies the word box input and then pigboxvalue is set to the value of the input box.

// I put console.log in the middle to make sure the value was being passed into the correct place.

// The second half of the function creates a new list item within the ul on the html page that has an id of wordList.  Then the innertext of the li item becomes whatever the output of the piglatin function.  The translatedWordList is finally appended to the ul.

let herePiggyPiggy = document.getElementById('toPigLatin')
herePiggyPiggy.addEventListener('click', () => {
  let piggyTranslate = document.getElementById("wordbox")
  let pigBoxValue = piggyTranslate.value
  console.log("Test for getting value ",pigBoxValue)

  let newListElement = document.createElement('li')
  let translatedWordList = document.getElementById('wordList')
  newListElement.innerText = pigLatin(pigBoxValue)
  translatedWordList.appendChild(newListElement)

  newListElement.value = ''
})


const pigLatinVowelFinder = (word) => {
  let letters = word.trim().toLowerCase().split('')
  let i = 0;
  for(i = 0; i < word.length; i++)
  {
      let letter = letters[i]
      
      //check if the letter is a vowel.
      //If letter is a vowel return position
      let hasVowel = 'aeiou'.includes(letter)
      if(hasVowel) {
          return i
      } 
  }
  return -1
}
const pigLatin = (word) => {
  let vowelFound = pigLatinVowelFinder(word)
 if (vowelFound == -1) {
  // if word has no vowels 
  let noVowelWord =  word + 'ay'
  return noVowelWord.toLowerCase().trim()
 }
 if (vowelFound == 0) {
   //if word starts with vowel
    let vowelWord =  word + "yay"
    return vowelWord.toLowerCase().trim()
 }
  if ( vowelFound > 0) { 
    // breaks word apart in two pieces
    //substring to the first vowel
    // secondhalf start the substring at vowelFound
    //returns full word plus "ay"
    let firstHalf = word.substring(0, vowelFound)
    let secondHalf = word.substring(vowelFound)
    let finalWord = secondHalf + firstHalf + "ay"
    return finalWord.trim().toLowerCase()

  }
}

//console.log(pigLatin("word"))







// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }



// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.