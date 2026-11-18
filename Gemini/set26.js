// 📌 Question 26: Binary Search

// Question: Oru sorted array-um oru target value-um input aayi eduthu, binary search algorithm use cheythu target-inte index kandupidikuna JavaScript function ezhuthuka. Target array-il illengil -1 return cheyyanam.


function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // Target valiyathaanel right side-il search cheyyunnu
      left = mid + 1;
    } else {
      // Target cheruthraanel left side-il search cheyyunnu
      right = mid - 1;
    }
  }
  
  return -1;
}

// Output:

console.log(search([-1, 0, 3, 5, 9, 12], 9)); 
// Output: 4 (9-inte index aanu 4)

console.log(search([-1, 0, 3, 5, 9, 12], 2)); 
// Output: -1 (2 array-il illa)