// 📌 Question 30: Valid Parentheses

// Question: Oru string input aayi eduthu, athil ulla brackets ((), {}, []) properly open aayitt close cheythittundo enn check cheythu valid aanō enn kandupidikuna JavaScript function ezhuthuka.



function isValid(s) {
  let stack = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let char of s) {
    // Opening bracket aanel stack-ilekku push cheyyunnu
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      // Closing bracket aanel stack-il ninnu pop cheythu match cheyyunnu
      let topElement = stack.pop();
      if (topElement !== map[char]) {
        return false;
      }
    }
  }
  
  // Stack empty aanengil ellam bracketsum properly closed aanu
  return stack.length === 0;
}

// Output:


console.log(isValid("()[]{}")); 
// Output: true

console.log(isValid("(]")); 
// Output: false

console.log(isValid("([)]")); 
// Output: false