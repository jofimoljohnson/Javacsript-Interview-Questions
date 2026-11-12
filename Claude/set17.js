// Question 33: What will be the output of this code?

console.log([1, 2, 3].includes(2));
console.log([1, [2, [3, [4]]]].flat());
console.log([1, [2, [3, [4]]]].flat(Infinity));
console.log(Array.from({ length: 3 }, (_, i) => i * 2));
console.log(Array(3).fill(0));
console.log([..."abc"]);
console.log(Array.isArray([]));

// Answer: includes(2) checks whether the value exists in the array, so it gives true. flat() flattens only one level by default, so [1, [2, [3, [4]]]] becomes [1, 2, [3, [4]]]. Passing Infinity flattens all the levels, giving [1, 2, 3, 4]. Array.from({ length: 3 }, fn) creates an array of length 3 and fills it using the function, which receives the index i, so the values are 0, 2, 4. Array(3).fill(0) creates an array with 3 empty slots and fills each with 0. Spreading a string splits it into characters, giving ['a', 'b', 'c']. Array.isArray([]) is true.

// Output:

// true
// [ 1, 2, [ 3, [ 4 ] ] ]
// [ 1, 2, 3, 4 ]
// [ 0, 2, 4 ]
// [ 0, 0, 0 ]
// [ 'a', 'b', 'c' ]
// true


// Question 34: What will be the output of this code?


function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(3));
console.log(makeAdder(1)(2));

const compose = (f, g) => (x) => f(g(x));
const double = (n) => n * 2;
const inc = (n) => n + 1;

console.log(compose(double, inc)(5));
console.log(compose(inc, double)(5));

const once = (fn) => {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
};

const init = once((a) => a * 10);
console.log(init(2));
console.log(init(5));

// Answer: makeAdder returns a function that remembers x (closure), so add5(3) is 5 + 3 = 8, and makeAdder(1)(2) is 3. compose(f, g) runs g first and then f. So compose(double, inc)(5) does inc(5) = 6 and then double(6) = 12. compose(inc, double)(5) does double(5) = 10 and then inc(10) = 11. The once function runs the original function only on the first call and stores the result in a closure. So init(2) runs fn(2) and returns 20, and init(5) does not run the function again, it just returns the stored 20.

// Output:

// 8
// 3
// 12
// 11
// 20
// 20