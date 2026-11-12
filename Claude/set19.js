// Question 37: What will be the output of this code?


console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log("b" > "a");
console.log("10" < "9");
console.log(10 < "9");
console.log(null >= 0);
console.log(null > 0);
console.log(null == 0);
console.log(undefined == 0);

// Answer: Comparison operators are evaluated left to right. 1 < 2 < 3 becomes true < 3, and true converts to 1, so 1 < 3 is true. 3 > 2 > 1 becomes true > 1, which is 1 > 1, so it is false. Strings are compared character by character using their character codes, so "b" > "a" is true. "10" < "9" compares two strings, and "1" comes before "9", so it is true. But 10 < "9" has a number on one side, so "9" is converted to 9, and 10 < 9 is false. The null cases are a famous trick: relational operators (>, >=) convert null to 0, so null >= 0 is true and null > 0 is false. But == has a special rule where null is equal only to undefined (and itself), so null == 0 is false. Similarly, undefined == 0 is false.

// Output:

// true
// false
// true
// true
// false
// true
// false
// false
// false


// Question 38: What will be the output of this code?


const counter = {
  count: 0,
  inc() {
    this.count++;
    return this;
  },
  dec() {
    this.count--;
    return this;
  },
};

console.log(counter.inc().inc().dec().count);

const { inc } = counter;
try {
  inc();
} catch (e) {
  console.log(e.constructor.name);
}
console.log(counter.count);

const bound = counter.inc.bind(counter);
bound();
console.log(counter.count);

// Answer: Each method returns this, so the calls can be chained (method chaining). counter.inc().inc().dec() does +1, +1, -1, so count is 1. When inc is pulled out with destructuring, it loses its link to counter, so this is no longer counter when inc() is called. In a Node.js module (non-strict), this is the global object, so this.count++ quietly sets a global count to NaN and nothing is thrown. The catch does not run, so nothing is printed for it. (In strict mode, this would be undefined, and it would throw a TypeError.) Because the detached call did not touch counter, counter.count is still 1. Then bind(counter) fixes this to counter, so bound() increases it to 2.

// Output:

// 1
// 1
// 2