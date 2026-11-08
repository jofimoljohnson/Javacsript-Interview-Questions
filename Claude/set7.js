// Question 13: What will be the output of this code?


const arr = [10, 1, 5, 100, 25];
console.log(arr.sort());

const nums = [10, 1, 5, 100, 25];
console.log(nums.sort((a, b) => a - b));

// Answer: By default, sort() converts the elements to strings and compares them in dictionary order. So 10, 1, 100 come before 25 and 5, because "1" comes before "2" and "5" as characters. To sort numbers correctly, pass a compare function like (a, b) => a - b, which sorts in ascending order.

// Output:

// [ 1, 10, 100, 25, 5 ]
// [ 1, 5, 10, 25, 100 ]


// Question 14: What will be the output of this code?


const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);

const x = { name: "Ravi" };
const y = { ...x };
y.name = "Anu";
console.log(x.name);

console.log([1, 2] === [1, 2]);


// Answer: Arrays and objects are reference types. const b = a copies only the reference, so a and b point to the same array, and b.push(4) changes what a sees too. The spread operator { ...x } creates a new object (a shallow copy), so changing y.name does not affect x, and x.name stays "Ravi". [1, 2] === [1, 2] is false because === compares references for objects, and these are two different arrays in memory.

// Output:

// [ 1, 2, 3, 4 ]
// Ravi
// false