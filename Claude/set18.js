// Question 35: What will be the output of this code?


const wait = (ms, val) =>
  new Promise((resolve) => setTimeout(() => resolve(val), ms));

async function run() {
  console.log("A");

  const r1 = await wait(100, "B");
  console.log(r1);

  const [r2, r3] = await Promise.all([wait(200, "C"), wait(100, "D")]);
  console.log(r2, r3);

  try {
    await Promise.reject(new Error("fail"));
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("done");
  }

  return "E";
}

run().then((v) => console.log(v));
console.log("F");

// Answer: run() starts executing synchronously, so "A" prints first. At the first await, the function pauses and control goes back to the main code, which prints "F". After 100 ms, wait(100, "B") resolves and "B" prints. Then Promise.all starts both timers at the same time, so it takes about 200 ms in total (not 300), and gives the results in the same order as the array, not by finish time: r2 = "C" and r3 = "D", printed as C D. Then await Promise.reject(...) throws inside the try, the catch prints the error message fail, and finally always runs, printing done. Finally, run returns "E", which the .then prints.

// Output:

// A
// F
// B
// C D
// fail
// done
// E



// Question 36: What will be the output of this code?


const a = { x: 1 };
const b = { x: 1 };
const c = a;

console.log(a == b);
console.log(a === c);
console.log(Object.is(a, c));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));
console.log(0 === -0);

const frozen = Object.freeze({ n: 1, inner: { m: 2 } });
frozen.n = 99;
frozen.inner.m = 99;
frozen.z = 5;
console.log(frozen);

// Answer: Objects are compared by reference, so a == b is false even though they look the same, while a === c is true because c points to the same object as a. Object.is works like === with two differences: Object.is(NaN, NaN) is true, and Object.is(0, -0) is false, while 0 === -0 is true. Object.freeze makes an object’s own properties read-only and stops new properties from being added, but only at the first level (shallow). So frozen.n = 99 and frozen.z = 5 are silently ignored in non-strict mode (they would throw a TypeError in strict mode), but frozen.inner.m = 99 works because inner is a separate object that is not frozen.

// Output:

// false
// true
// true
// true
// false
// true
// { n: 1, inner: { m: 99 } }