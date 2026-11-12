// 📌 Question 19: Merge Two Sorted Arrays

// Question: Randu sorted (already order cheytha) arrays input aayi eduthu, avarude elements-ine combine cheythu oru single sorted array aakki return cheyuna JavaScript function ezhuthuka.


function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  
  // Randu arrays-um compare cheythu smallest element-ine push cheyyunnu
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  
  // Oru array-il bakki ulla elements undengil avarude koode concat cheyyunnu
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Output:

// JavaScript
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 
// Output: [1, 2, 3, 4, 5, 6]

// console.log(mergeSortedArrays([1, 2, 3], [4, 5])); 
// Output: [1, 2, 3, 4, 5]