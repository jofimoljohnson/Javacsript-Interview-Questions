// Question 45: What will be the output of this code?


console.log(typeof undeclaredVar);

try {
  console.log(undeclaredVar);
} catch (e) {
  console.log(e.name);
}

undeclaredVar2 = 10;
console.log(undeclaredVar2);
console.log(delete globalThis.undeclaredVar2);

const o = { a: 1 };
console.log(delete o.a);
console.log(o);

console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));

console.log([1, 2, 3] + [4, 5]);
console.log(String(null), String(undefined), String([1, [2, 3]]));

// Answer: typeof is the only operator that does not throw on an undeclared variable; it safely returns "undefined". But actually reading undeclaredVar throws a ReferenceError, so the catch prints ReferenceError. In non-strict mode, assigning to an undeclared variable creates a global, so undeclaredVar2 = 10 works and prints 10 (in strict mode it would throw a ReferenceError). Such an implicit global is a normal configurable property of the global object, so delete globalThis.undeclaredVar2 returns true. delete o.a removes the property and returns true, so o becomes an empty object {}. The global isNaN first converts its argument to a number, and "hello" becomes NaN, so it returns true. Number.isNaN does no conversion and returns true only for the actual NaN value, so for a string it gives false. With +, both arrays are converted to strings, "1,2,3" and "4,5", and then joined, giving "1,2,34,5". String(null) is "null", String(undefined) is "undefined", and String([1, [2, 3]]) flattens through toString into "1,2,3".

// Output:

// undefined
// ReferenceError
// 10
// true
// true
// {}
// true
// false
// 1,2,34,5
// null undefined 1,2,3


// Question 46: What will be the output of this code?


const a = [1, 2, 3];
const [first, ...others] = a;
console.log(first, others);

const copy = [...a, 4];
console.log(copy, a);

const merged = { ...{ x: 1, y: 2 }, ...{ y: 3, z: 4 } };
console.log(merged);

function sum(...nums) {
  return nums.reduce((t, n) => t + n, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(...a, ...copy));
console.log(sum());

console.log(Math.max(...[]));
console.log([...Array(3).keys()]);
console.log(Object.assign({}, { a: 1 }, null, { b: 2 }));

// Answer: Array destructuring with ...others collects the remaining elements, so first is 1 and others is [2, 3]. Spread creates a new array copy, so adding 4 does not change a. When merging objects with spread, later properties overwrite earlier ones, so y becomes 3, giving { x: 1, y: 3, z: 4 }. sum(1, 2, 3) is 6. sum(...a, ...copy) spreads both arrays into one list of arguments, 1+2+3+1+2+3+4, which is 16. sum() has an empty nums array, so reduce returns the initial value 0. Math.max(...[]) is the same as Math.max(), so it gives -Infinity. Array(3).keys() gives an iterator of the indexes, and spreading it gives [0, 1, 2]. Object.assign copies properties from the sources into the target, and null sources are simply ignored, so the result is { a: 1, b: 2 }.

// Output:

// 1 [ 2, 3 ]
// [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
// { x: 1, y: 3, z: 4 }
// 6
// 16
// 0
// -Infinity
// [ 0, 1, 2 ]
// { a: 1, b: 2 }