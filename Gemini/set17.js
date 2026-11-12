// 📌 Question 17: Move Zeroes

// Question: Oru array-il ulla ellam 0-kalum array-inte end-il (attaṭṭil) kondu poyi vekkuka. Athulolla mathulla numbers-nte original order (relative order) marattirikukayum venam. (In-place aayi modify cheyyanam).


function moveZeroes(nums) {
  let nonZeroIndex = 0;
  
  // Non-zero elementsine aadyathekk shift cheyyunnu
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  
  // Array-inte bakki ulla indices-il 0 fill cheyyunnu
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  
  return nums;
}


// Output:

// JavaScript
// let arr = [0, 1, 0, 3, 12];
// moveZeroes(arr);
// console.log(arr); 
// Output: [1, 3, 12, 0, 0]