

// 📌 Question 15: Maximum Subarray Sum (Kadane's Algorithm)

// Question: Oru array-il ulla adjacent (contiguous) numbers-inte sum eduthathil etavum kooduthal value (maximum sum) kittunna subarray-ude sum kandupidikuna JavaScript function ezhuthuka. (Ithinu Kadane's Algorithm enn parayum).


function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    // Current number mathram edukkunnatheyo, allel mumbulla sum-um kooti edukkunnatheyo etavum valiyathu ennu nokkunnu
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Max sum update cheyyunnu
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}



console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
// Output: 6 (Subarray [4, -1, 2, 1]-inte sum aanu 6)

console.log(maxSubArray([1])); 
// Output: 1