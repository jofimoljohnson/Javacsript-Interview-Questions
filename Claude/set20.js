// Question 39: What will be the output of this code?


const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3));
console.log(arr);

console.log(arr.splice(1, 2));
console.log(arr);

arr.splice(1, 0, "a", "b");
console.log(arr);

console.log(arr.length = 2);
console.log(arr);

const arr2 = [1, 2, 3];
arr2[5] = 6;
console.log(arr2);
console.log(arr2.length);

// Answer: slice(1, 3) returns a new array with elements from index 1 up to (not including) 3, and it does not change the original, so arr is still [1, 2, 3, 4, 5]. splice(1, 2) removes 2 elements starting at index 1 and returns the removed elements [2, 3], and it changes the original array, which becomes [1, 4, 5]. splice(1, 0, "a", "b") removes nothing but inserts "a" and "b" at index 1, so the array becomes [1, 'a', 'b', 4, 5]. arr.length = 2 is an assignment expression, so console.log prints the assigned value 2, and the array is cut down to its first two elements, [1, 'a']. For arr2, assigning to index 5 leaves empty slots at indexes 3 and 4 (not undefined, but real “holes”), and the length becomes 6.

// Output:

// [ 2, 3 ]
// [ 1, 2, 3, 4, 5 ]
// [ 2, 3 ]
// [ 1, 4, 5 ]
// [ 1, 'a', 'b', 4, 5 ]
// 2
// [ 1, 'a' ]
// [ 1, 2, 3, <2 empty items>, 6 ]
// 6


// Question 40: What will be the output of this code?


console.log(typeof typeof 1);
console.log(!!"false");
console.log(!!"");
console.log(!!0n);
console.log(!!-1);
console.log(!!document.all);

var x = 1;
{
  var x = 2;
}
console.log(x);

let y = 1;
{
  let y = 2;
}
console.log(y);

console.log(((a, b) => a + b).length);
console.log((function (a, b = 2, c) {}).length);

// Answer: typeof 1 is "number", and typeof "number" is "string". A non-empty string is truthy, even if the text is "false", so !!"false" is true, while !!"" is false. 0n (BigInt zero) is falsy, so !!0n is false, and any non-zero number including -1 is truthy. document.all is a strange legacy object that is falsy even though it is an object, so !!document.all is false (this line works only in a browser; in Node.js it throws a ReferenceError, so remove it if you run the code there). var is function scoped, so the var x = 2 inside the block is the same x as the outer one, and it prints 2. let is block scoped, so the inner y is a different variable, and the outer y stays 1. The length of a function is the number of parameters before the first one with a default value, so the arrow function gives 2, and function (a, b = 2, c) gives 1.

// Output (browser):

// string
// true
// false
// false
// true
// false
// 2
// 1
// 2
// 1