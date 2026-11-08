

// 📌 Question 16: Rotate Array

// Question: Oru array-um oru integer k-yum input aayi eduthu, array-ile elementsine right side-ilekku k steps rotate cheyuna JavaScript function ezhuthuka. 


function rotate(nums, k) {
  // k array length-inekkal kooduthal aakumpol ulla cycles ozhivakkan
  k = k % nums.length;
  
  // End-il ulla k elements-ine splice cheythu eduthu aadyathekk mathri vekkunnu
  let removed = nums.splice(nums.length - k);
  nums.unshift(...removed);
  
  return nums;
}


let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); 
// Output: [5, 6, 7, 1, 2, 3, 4]