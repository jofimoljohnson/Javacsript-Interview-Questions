

// 📌 Question 11: Flatten a Nested Array 

function flattenArray(arr) {
  let result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      // Oru element array aanenkil, recursion use cheythu athine flatten cheythu result-ilekku concat cheyyunnu
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

// Note: JavaScript-il ithu cheyyan ore line-il edukkavunna built-in methodum undu: 
// arr.flat(Infinity) 


console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
// Output: [1, 2, 3, 4, 5, 6]