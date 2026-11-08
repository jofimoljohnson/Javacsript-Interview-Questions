
// 📌 Question 8: Reverse a String Without Using Built-in Methods 

function reverseString(str) {
  let reversed = "";
  
  // Last character-il thudangi aadyathe character vare loop cheythu string build cheyyunnu
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  return reversed;
}


console.log(reverseString("hello")); 
// Output: "olleh"

console.log(reverseString("JavaScript")); 
// Output: "tpircSavaJ"