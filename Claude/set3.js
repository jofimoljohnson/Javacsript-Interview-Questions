
// Question 5: What will be the output of this code?


console.log(1 + "2");
console.log("3" - 1);
console.log(true + 1);
console.log([] + {});

// Answer: The + operator does string concatenation if either side is a string, so 1 + "2" becomes "12". The - operator only works on numbers, so "3" is converted to 3 and the result is 2. true converts to 1, so true + 1 is 2. For [] + {}, both sides are converted to strings: [] becomes "" and {} becomes "[object Object]", so the result is "[object Object]".

// Output:

// 12
// 2
// 2
// [object Object]



// Question 6: What will be the output of this code?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0);
}

// Answer: var is function scoped, so there is only one i shared by all three callbacks. setTimeout callbacks run only after the loop finishes, when i is already 3. let is block scoped, so each loop iteration gets its own j, and the callbacks print 0, 1, 2.

// Output:

// 3
// 3
// 3
// 0
// 1
// 2