// Question 21: What will be the output of this code?

function foo() {
  console.log(arguments.length);
}

foo(1, 2, 3);
foo();

function bar(a, b = 5, ...rest) {
  console.log(a, b, rest);
}

bar(1);
bar(1, 2, 3, 4);

// Answer: arguments is an array-like object that holds all the values passed to a normal function, so foo(1, 2, 3) gives 3 and foo() gives 0. In bar, b has a default value of 5, which is used when the argument is missing or undefined. The rest parameter ...rest collects all the remaining arguments into a real array. So bar(1) gives a = 1, b = 5, and rest = []. For bar(1, 2, 3, 4), a = 1, b = 2, and rest = [3, 4].

// Output:

// 3
// 0
// 1 5 []
// 1 2 [ 3, 4 ]


// Question 22: What will be the output of this code?


const { a, b: { c }, ...others } = { a: 1, b: { c: 2 }, d: 3, e: 4 };
console.log(a, c, others);

const [x, , y = 10, ...rest] = [1, 2, undefined, 4, 5];
console.log(x, y, rest);

let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n);

// Answer: In object destructuring, a takes the value 1, and b: { c } goes inside b and takes c as 2 (note that b itself is not created as a variable). ...others collects the remaining properties, d and e, into a new object. In array destructuring, the empty slot between the commas skips the second element. The third element is undefined, so the default value 10 is used for y. ...rest collects the remaining elements, 4 and 5. The last part swaps two variables without a temporary variable, so m becomes 2 and n becomes 1.

// Output:

// 1 2 { d: 3, e: 4 }
// 1 10 [ 4, 5 ]
// 2 1