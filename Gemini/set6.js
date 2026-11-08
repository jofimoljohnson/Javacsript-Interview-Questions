
// 📌 Question 6: Count Vowels in a String 

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("JavaScript")); 
// Output: 3 (a, a, i)

console.log(countVowels("Hello World")); 
// Output: 3 (e, o, o)