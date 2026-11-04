
// 📌 Question 5: Find the Maximum Number in an Array 

function findMaxNumber(arr) {
  // Math.max() multiple arguments edukum. 
  // Spread operator (...) use cheythu array elementsine individual arguments aayi pass cheyyunnu.
  return Math.max(...arr);
}

console.log(findMaxNumber([10, 45, 2, 89, 23])); 
// Output: 89

console.log(findMaxNumber([-5, -12, -3, -9])); 
// Output: -3