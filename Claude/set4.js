
// Question 7: What will be the output of this code?


console.log(NaN === NaN);
console.log([1, 2, 3] == "1,2,3");
console.log(null == undefined);
console.log(null === undefined);

// Answer: NaN is the only value in JavaScript that is not equal to itself, so NaN === NaN is false (use Number.isNaN() to check for it). With ==, the array is converted to the string "1,2,3", so the comparison is true. null == undefined is true because loose equality treats them as equal to each other. With ===, the types differ (null is an object type, undefined is its own type), so it is false.

// Output:

// false
// true
// true
// false

console.log([] == false); // true
console.log(null === null);//true
console.log(typeof NaN); // number


// Question 8: What will be the output of this code?


console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");

// Answer: JavaScript runs all the synchronous code first, so start and end print first. After that, the event loop checks the queues. Promise callbacks go to the microtask queue, which has higher priority. setTimeout callbacks go to the macrotask queue, which runs only after all microtasks are done. So promise prints before timeout, even though the timeout is 0 ms.

// Output:

// start
// end
// promise
// timeout