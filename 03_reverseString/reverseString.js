const reverseString = function(word) {
   let splitWord = word.split('');
   let reversedWord = ''
   for(i= splitWord.length -1; i>=0; i--) {
    reversedWord += splitWord[i];
   }
   return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
