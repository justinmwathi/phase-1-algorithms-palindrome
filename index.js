function isPalindrome(word) {
  // Write your algorithm here
  if(word.split('').reverse().join('')===word){
    return true;
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
-The function isPalindrome is expected to take a string as an argument.
-If the string is a palindrome('a word that is read the same either from left to right or otherwise') it should return true else it should return false.
-The .split(''),.reverse(),.join() is arguably more appropriate.

*/

/*
  Add written explanation of your solution here.
-Below is a description of how my solution
By using the .split(''),I am creating an array of characters of the word passed as an argument.
-Then the .reverse changes the order of arrangement of the characters.
-the .join('')method joins the reversed order of characters to form a word.
If the word passed as an argument is a palindrome the return should be true.Else,it should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
