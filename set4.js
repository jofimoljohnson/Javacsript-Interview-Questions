
// Find the Factorial of a Number 

function findFactorial(num) {
  if (num === 0 || num === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}


console.log(findFactorial(5)); 
// Output: 120

console.log(findFactorial(0)); 
// Output: 1