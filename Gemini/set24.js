// 📌 Question 24: Longest Palindromic Substring

// Question: Oru string input aayi eduthu, athile etavum valiya palindromic substring (rechu thirichu vayichalum onnayi irikkunna part) kandupidikuna JavaScript function ezhuthuka.


function longestPalindrome(s) {
  if (!s || s.length < 1) return "";
  let start = 0;
  let end = 0;
  
  for (let i = 0; i < s.length; i++) {
    // Odd length palindrome (eg: "aba")
    let len1 = expandAroundCenter(s, i, i);
    // Even length palindrome (eg: "abba")
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  
  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

// Output:


console.log(longestPalindrome("babad")); 
// Output: "bab" (or "aba")

console.log(longestPalindrome("cbbd")); 
// Output: "bb"