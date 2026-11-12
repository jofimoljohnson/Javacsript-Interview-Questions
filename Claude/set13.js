// Question 25: What will be the output of this code?


const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set);
console.log(set.size);

const unique = [...new Set([1, 2, 2, 3])];
console.log(unique);

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("a", 3);
console.log(map);
console.log(map.get("a"));

// Answer: A Set stores only unique values, so the duplicates are ignored and it keeps 1, 2, 3, giving a size of 3. Spreading a Set into an array is a common trick to remove duplicates from an array. A Map stores key-value pairs and keeps the insertion order of keys. When map.set("a", 3) is called with an existing key, it does not add a new entry but updates the value of "a" from 1 to 3. So the map has two entries, and map.get("a") is 3.

// Output:

// Set(3) { 1, 2, 3 }
// 3
// [ 1, 2, 3 ]
// Map(2) { 'a' => 3, 'b' => 2 }
// 3



// Question 26: What will be the output of this code?


function Counter() {
  this.count = 0;
  setTimeout(function () {
    this.count++;
    console.log(this.count);
  }, 0);
}

new Counter();

function Counter2() {
  this.count = 0;
  setTimeout(() => {
    this.count++;
    console.log(this.count);
  }, 0);
}

new Counter2();

// Answer: In Counter, the callback passed to setTimeout is a normal function, so this inside it is not the Counter object. In Node.js, this inside a setTimeout callback is the Timeout object, which has no count, so this.count++ makes it NaN (undefined + 1) and prints NaN. In a browser, this is window, and window.count is undefined, so the result is also NaN. In Counter2, the arrow function takes this from the surrounding scope, which is the new Counter2 object, so this.count goes from 0 to 1 and prints 1.

// Output:

// NaN
// 1