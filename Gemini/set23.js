// 📌 Question 23: 3Sum

// Question: Oru numbers-nte array input aayi eduthu, athil ninnu sum zero (0) varunna ellam unique triplets ([a, b, c] where a + b + c = 0) kandupidikuna JavaScript function ezhuthuka.



function threeSum(nums) {
  // Aadyam array-ine ascending order-il sort cheyyunnu
  nums.sort((a, b) => a - b);
  let result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    // Duplicate values ozhivakkan check cheyyunnu
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        
        // Duplicate numbers ozhivakkan pointers move cheyyunnu
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
}

// Output:


console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
// Output: [[-1, -1, 2], [-1, 0, 1]]