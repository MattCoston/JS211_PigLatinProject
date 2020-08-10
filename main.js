'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatinVowelFinder = (word) => {
  let letters = word.trim().toLowerCase().split('')
  let i = 0
  
  
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

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.