const palindromes = function (str) {
 // Remove non-alphanumeric characters and convert to lowercase
 str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
 // Compare the string with its reverse
 let reversedStr = str.split('').reverse().join('');
 return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
