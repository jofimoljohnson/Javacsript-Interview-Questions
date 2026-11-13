// Question 49: What will be the output of this code?


console.log([1, 2, 3].at(-1));
console.log([3, 1, 2].toSorted());
console.log([1, 2, 3].toReversed());

const arr = [1, 2, 3];
const arr2 = arr.with(1, 99);
console.log(arr, arr2);

console.log(Object.groupBy([1, 2, 3, 4], (n) => (n % 2 === 0 ? "even" : "odd")));
console.log(structuredClone({ a: [1, 2] }));
console.log("a-b-c".replaceAll("-", "+"));
console.log([1, 2, 3, 4].findLast((n) => n % 2 === 1));
console.log([1, 2, 3, 4].findLastIndex((n) => n > 10));
console.log(Object.fromEntries([["a", 1], ["b", 2]]));

// Answer: at(-1) reads from the end, so it gives the last element, 3. toSorted() and toReversed() are the newer non-mutating versions of sort() and reverse(): they return a new array and leave the original unchanged, giving [1, 2, 3] and [3, 2, 1]. with(1, 99) returns a new array with the element at index 1 replaced, so arr stays [1, 2, 3] and arr2 is [1, 99, 3]. Object.groupBy groups items by the key the callback returns, giving an object with odd and even arrays (the result has no prototype, so Node prints it as [Object: null prototype]). structuredClone makes a deep copy, so we get { a: [ 1, 2 ] }. replaceAll replaces every match, giving "a+b+c". findLast searches from the end, and the last odd number is 3. findLastIndex returns -1 when nothing matches. Object.fromEntries is the reverse of Object.entries, turning [key, value] pairs into an object.

// Output:

// 3
// [ 1, 2, 3 ]
// [ 3, 2, 1 ]
// [ 1, 2, 3 ] [ 1, 99, 3 ]
// [Object: null prototype] { odd: [ 1, 3 ], even: [ 2, 4 ] }
// { a: [ 1, 2 ] }
// a+b+c
// 3
// -1
// { a: 1, b: 2 }


// Question 50: What will be the output of this code?


console.log(typeof Array.prototype);
console.log(Array.prototype.constructor === Array);
console.log([].constructor === Array);
console.log(Object.getPrototypeOf([]) === Array.prototype);
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

function Foo() {}
const f = new Foo();
console.log(f.constructor === Foo);
console.log(f.__proto__ === Foo.prototype);
console.log(Foo.prototype.constructor === Foo);
console.log(Foo.__proto__ === Function.prototype);
console.log(f instanceof Object);
console.log(Object.create(null) instanceof Object);

// Answer: Array.prototype is itself an array object, so typeof Array.prototype is "object". Every prototype has a constructor property pointing back to its function, so Array.prototype.constructor === Array is true, and [].constructor finds the same thing through the chain, so it is true too. An array’s prototype is Array.prototype, so the fourth line is true. The chain continues upward: Array.prototype inherits from Object.prototype, so the fifth line is true. Object.prototype is the end of the chain, so its prototype is null. For f, there is no own constructor, but it finds Foo.prototype.constructor, which is Foo, so it is true. f.__proto__ is the same as Foo.prototype, so it is true, and Foo.prototype.constructor === Foo is true. Foo is a function, so its prototype is Function.prototype, which is true. f instanceof Object is true because the chain reaches Object.prototype. But Object.create(null) creates an object with no prototype at all, so the chain never reaches Object.prototype, and instanceof Object is false.

// Output:

// object
// true
// true
// true
// true
// null
// true
// true
// true
// true
// true
// false