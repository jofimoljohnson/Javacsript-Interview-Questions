
// 📌 Question 7: Find the First Non-Repeating Character

function firstNonRepeatingChar(str) {
  let charCount = {};
  
  // Ovvoru character-inteyum frequency (count) kandupidikunnu
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // String-il aadyam count 1 ulla character return cheyyunnu
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null; // Ellam repeat cheyyunundenkil null return cheyyum
}


console.log(firstNonRepeatingChar("swiss")); 
// Output: "w" (s-um i-um repeat cheyyunnu, pakshe w repeat cheyyunnilla)

console.log(firstNonRepeatingChar("programming")); 
// Output: "p"