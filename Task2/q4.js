/*## Palindrome Check

Write a script to determine whether the  string is palindrome or not. consider case sensitivity and also add other code that handle case not sensitive of the string 
i.e. RADAR, NOON, MOOM are palindrome.
i.e. raDaR is not a palindrome if case sensitive and a palindrome if case not sensitive
*/

const str1 = "raDaR";
const str2 = "raDaR";
function checkPlaindromeCaseSensitive(str) {
  let reverse_str = str.split("").reverse().join("");
  return reverse_str == str;
}

function checkPlaindromeNotSensitive(str) {
  str=str.toLowerCase();
  let reverse_str = str.split("").reverse().join("");
  return reverse_str == str;
}

console.log(checkPlaindromeCaseSensitive(str1));
console.log(checkPlaindromeNotSensitive(str2));