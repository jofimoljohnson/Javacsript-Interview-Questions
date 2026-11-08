
// Question 1: What will be the output of this code? 

console.log(a);
var a = 5;
console.log(a);

// Answer: var declarations are hoisted to the top of their scope and initialized with undefined. The assignment a = 5 stays where it is, so the first console.log sees undefined.


// Output:
// undefined
// 5



// Question 2: What will be the output of this code? 

console.log(b);
let b = 10;

// Answer: let declarations are hoisted too, but they are not initialized. Until the line let b = 10 runs, b is in the “Temporal Dead Zone” (TDZ). Accessing it before that throws an error instead of giving undefined.

// Output:

// ReferenceError: Cannot access 'b' before initialization