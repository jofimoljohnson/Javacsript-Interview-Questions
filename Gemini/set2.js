// Check for Palindrome 

function isPalindrome(str) {
  // 1. String-ine lowercase akki (case sensitivity ozhivakkan)
  // 2. split('') - array akkum
  // 3. reverse() - thirichu idum
  // 4. join('') - veendum string akkum
  let reversed = str.toLowerCase().split('').reverse().join('');
  
  return str.toLowerCase() === reversed;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("Hello")); // Output: false