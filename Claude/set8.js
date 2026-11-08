// Question 15: What will be the output of this code?


console.log([1, 2, 3].map((n) => n * 2));
console.log([1, 2, 3, 4].filter((n) => n % 2 === 0));
console.log([1, 2, 3, 4].reduce((sum, n) => sum + n, 0));
console.log(["1", "2", "3"].map(parseInt));

// Answer: map returns a new array with each element transformed, so the first line gives [2, 4, 6]. filter keeps only the elements where the callback returns true, so only the even numbers 2 and 4 remain. reduce adds up all the numbers starting from 0, so the result is 10. The last line is a famous trick question: map passes three arguments to the callback (element, index, array), so parseInt gets called as parseInt("1", 0), parseInt("2", 1), parseInt("3", 2). Radix 0 is treated as the default base 10, so the first gives 1. Radix 1 is invalid, so it gives NaN. In base 2, the digit "3" is not valid, so it also gives NaN.

// Output:

// [ 2, 4, 6 ]
// [ 2, 4 ]
// 10
// [ 1, NaN, NaN ]



// Question 16: What will be the output of this code?


function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi, " + this.name);
};

const p1 = new Person("Arun");
p1.sayHi();

console.log(p1.hasOwnProperty("name"));
console.log(p1.hasOwnProperty("sayHi"));
console.log("sayHi" in p1);

// Answer: name is set directly on the object inside the constructor, so it is an own property. sayHi is defined on Person.prototype, not on p1 itself. JavaScript looks for a property on the object first and then goes up the prototype chain, so p1.sayHi() still works. hasOwnProperty checks only the object itself, so "name" gives true and "sayHi" gives false. The in operator checks the whole prototype chain, so "sayHi" in p1 is true.

// Output:

// Hi, Arun
// true
// false
// true