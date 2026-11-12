// Question 29: What will be the output of this code? 

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  console.log(key);
}

for (const value of Object.values(obj)) {
  console.log(value);
}

const arr = ["x", "y", "z"];

for (const i in arr) {
  console.log(typeof i);
}

for (const item of arr) {
  console.log(item);
}

console.log(Object.entries(obj));


// Answer: for...in loops over the keys (property names) of an object, so it prints a, b, c. Object.values(obj) gives an array of the values, and for...of loops over them, printing 1, 2, 3. When you use for...in on an array, it gives the indexes as strings ("0", "1", "2"), so typeof i is "string" each time. for...of loops over the actual values of the array, so it prints x, y, z. Object.entries(obj) returns an array of [key, value] pairs.

// Output:

// a
// b
// c
// 1
// 2
// 3
// string
// string
// string
// x
// y
// z
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]



// Question 30: What will be the output of this code?


console.log(typeof function () {});
console.log(typeof class {});
console.log(typeof Symbol());
console.log(typeof 10n);
console.log(void 0);
console.log([10, 20, 30].indexOf(20), [NaN].indexOf(NaN), [NaN].includes(NaN));

// Answer: Functions are special objects, but typeof reports them as "function". Classes are also functions underneath in JavaScript, so typeof class {} is "function" too. Symbol() creates a unique primitive value, so its type is "symbol". A number with n at the end is a BigInt, so typeof 10n is "bigint". The void operator evaluates the expression and always returns undefined, so void 0 gives undefined. indexOf(20) returns the position 1. indexOf uses strict equality (===), and NaN === NaN is false, so [NaN].indexOf(NaN) returns -1. But includes uses a different comparison that treats NaN as equal to itself, so [NaN].includes(NaN) is true.

// Output:

// function
// function
// symbol
// bigint
// undefined
// 1 -1 true