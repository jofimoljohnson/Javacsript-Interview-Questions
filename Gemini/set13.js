
// 📌 Question 13: Valid Parentheses

// Question: Oru string-il brackets ((), {}, []) mathramanu ulla. Iva correct order-il aanu open cheythu close cheythirikkunnathu ennu check cheyuna JavaScript function ezhuthuka (Eg: "()[]{}" valid aanu, pakshe "(]" invalid aanu). 


function isValidParentheses(s) {
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
      // Closing bracket aanel, stack-inte top-il ulla matching opening bracket-odu compare cheyyunnu
      let topElement = stack.pop();
      if (topElement !== map[char]) {
        return false;
      }
    }
  }
  
  // Ellam correct aanel stack empty aayirikkum
  return stack.length === 0;
}



console.log(isValidParentheses("()[]{}")); 
// Output: true

console.log(isValidParentheses("(]")); 
// Output: false

console.log(isValidParentheses("([)]")); 
// Output: false