// Question 27: What will be the output of this code?


console.log(Math.max());
console.log(Math.min());
console.log(Math.max(...[1, 5, 3]));
console.log(Math.max([1, 5, 3]));
console.log(parseInt("42px"));
console.log(Number("42px"));

// Answer: Math.max() with no arguments returns -Infinity, and Math.min() with no arguments returns Infinity. This is because -Infinity is the starting point for finding a maximum (any number is bigger than it), and Infinity is the starting point for a minimum. Spreading the array gives Math.max(1, 5, 3), which is 5. But Math.max([1, 5, 3]) passes a single array, which is converted to the string "1,5,3" and then to a number. That conversion fails, so the result is NaN. parseInt("42px") reads digits from the start and stops at the first invalid character, so it gives 42. Number("42px") needs the whole string to be a valid number, so it gives NaN.

// Output:

// -Infinity
// Infinity
// 5
// NaN
// 42



// Question 28: What will be the output of this code?


const promise1 = Promise.resolve("A");
const promise2 = new Promise((resolve, reject) => reject("B"));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("C"), 100));

Promise.all([promise1, promise3]).then((result) => console.log(result));

Promise.allSettled([promise1, promise2]).then((result) => console.log(result));

Promise.race([promise2, promise3]).catch((err) => console.log(err));

Promise.any([promise2, promise3]).then((result) => console.log(result));

// Answer: Promise.all waits for all promises to succeed and gives an array of results, but it needs promise3, which takes 100 ms, so it prints last among the two long ones. Promise.allSettled never rejects; it waits for every promise to finish and gives an array of objects describing each outcome (fulfilled or rejected), so it prints quickly (in the microtask queue). Promise.race settles as soon as the first promise settles. promise2 rejects immediately, so the catch prints "B" quickly. Promise.any ignores rejections and returns the first fulfilled promise, so it skips promise2 and waits for promise3, giving "C" after 100 ms. The two 100 ms outputs print in the order their .then calls were registered: Promise.all first, then Promise.any.

// Output:

// [
//   { status: 'fulfilled', value: 'A' },
//   { status: 'rejected', reason: 'B' }
// ]
// B
// [ 'A', 'C' ]
// C