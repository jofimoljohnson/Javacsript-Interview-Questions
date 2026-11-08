
// Question 3: What will be the output of this code?

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);


// Answer: typeof null returns "object". This is a long-standing bug in JavaScript from its first version, and it was never fixed to avoid breaking existing code. typeof undefined is "undefined". Arrays are objects in JavaScript, so typeof [] also returns "object" (use Array.isArray([]) to check for arrays).

// Output:

// object
// undefined
// object



// Question 4: What will be the output of this code?

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

// Answer: JavaScript uses 64-bit floating point numbers (IEEE 754), and numbers like 0.1 and 0.2 cannot be stored exactly in binary. So the sum comes out slightly more than 0.3, and the strict comparison fails. To compare safely, use something like Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON.

// Output:

// false
// 0.30000000000000004