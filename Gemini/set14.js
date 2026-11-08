

// 📌 Question 14: Longest Substring Without Repeating Characters

// Question: Oru string input aayi eduthu, athil duplicate characters illathe etavum valiya substring-inte length (reconciliation/length) kandupidikuna JavaScript function ezhuthuka.

function lengthOfLongestSubstring(s) {
  let seen = new Map();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    
    // Character mumbum vanitundel, left pointer-ine adutha position-ilekk move cheyyunnu
    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }
    
    seen.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}



console.log(lengthOfLongestSubstring("abcabcbb")); 
// Output: 3 ("abc" aanu longest substring without repeating characters)

console.log(lengthOfLongestSubstring("bbbbb")); 
// Output: 1 ("b")

console.log(lengthOfLongestSubstring("pwwkew")); 
// Output: 3 ("wke")