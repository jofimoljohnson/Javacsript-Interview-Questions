

// 📌 Question 10: Find the Missing Number in an Array 

function findMissingNumber(arr, n) {
  // 1 to n vareyulla total sum kanakkanulla formula: n * (n + 1) / 2
  let expectedSum = (n * (n + 1)) / 2;
  
  // Array-il ulla total numbers-nte sum reduce() vechu kandupidikunnu
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  
  // Expected sum-il ninnu actual sum kurachal missing number kittum
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); 
// Output: 3 (1 to 6-il 3 aanu missing)

console.log(findMissingNumber([1, 3, 4, 5], 5)); 
// Output: 2