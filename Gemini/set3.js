
// Remove Duplicates from an Array 

function removeDuplicates(arr) {
  // Set object duplicate values automatically remove cheyyum. 
  // Athine spread operator (...) use cheythu veendum array akkunnu.
  return [...new Set(arr)];
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 1]));
// Output: [1, 2, 3, 4, 5]