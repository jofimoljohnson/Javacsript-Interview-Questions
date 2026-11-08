
// 📌 Question 12: Two Sum Problem 

function twoSum(nums, target) {
  let map = {};
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    // Complement map-il undo ennu check cheyyunnu
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    
    // Current number-um athinte index-um map-il store cheyyunnu
    map[nums[i]] = i;
  }
  return [];
}


console.log(twoSum([2, 7, 11, 15], 9)); 
// Output: [0, 1] (Indices: nums[0] + nums[1] = 2 + 7 = 9)

console.log(twoSum([3, 2, 4], 6)); 
// Output: [1, 2] (Indices: nums[1] + nums[2] = 2 + 4 = 6)