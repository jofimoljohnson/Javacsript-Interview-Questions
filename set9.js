

// 📌 Question 9: Check for Anagram 

function areAnagrams(str1, str2) {
  // Length vyathyasamanel anagram aakan chance illa
  if (str1.length !== str2.length) return false;
  
  // 1. Lowercase akkunnu
  // 2. split('') - array akkunnu
  // 3. sort() - alphabetical order-il sort cheyyunnu
  // 4. join('') - veendum string akkunnu
  let sorted1 = str1.toLowerCase().split('').sort().join('');
  let sorted2 = str2.toLowerCase().split('').sort().join('');
  
  return sorted1 === sorted2;
}

console.log(areAnagrams("listen", "silent")); 
// Output: true

console.log(areAnagrams("hello", "world")); 
// Output: false