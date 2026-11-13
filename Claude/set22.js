// Question 43: What will be the output of this code?


function* gen() {
  console.log("start");
  const x = yield 1;
  console.log("x =", x);
  const y = yield 2;
  console.log("y =", y);
  return 3;
}

const g = gen();
console.log(g.next());
console.log(g.next("A"));
console.log(g.next("B"));
console.log(g.next());

const it = [10, 20][Symbol.iterator]();
console.log(it.next());
console.log([...gen2()]);

function* gen2() {
  yield* [1, 2];
  yield 3;
}

// Answer: Calling gen() does not run the function body; it only creates a generator object. The first g.next() starts the body, so "start" prints, and it pauses at yield 1, returning { value: 1, done: false }. The second g.next("A") resumes, and the value "A" becomes the result of the yield 1 expression, so x = A prints, then it pauses at yield 2. The third g.next("B") gives y = B, and the function reaches return 3, so the result is { value: 3, done: true }. The fourth g.next() is called on a finished generator, so it returns { value: undefined, done: true }. Arrays are iterable, so [10, 20][Symbol.iterator]() creates an iterator, and its first next() gives { value: 10, done: false }. gen2 is a function declaration, so it is hoisted and can be used before its line. yield* delegates to another iterable, so the spread collects 1, 2 and then 3, giving [1, 2, 3].

// Output:

// start
// { value: 1, done: false }
// x = A
// { value: 2, done: false }
// y = B
// { value: 3, done: true }
// { value: undefined, done: true }
// { value: 10, done: false }
// [ 1, 2, 3 ]



// Question 44: What will be the output of this code?

const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : `no_${prop}`;
  },
  set(target, prop, value) {
    if (typeof value !== "number") {
      throw new TypeError("Only numbers allowed");
    }
    target[prop] = value;
    return true;
  },
};

const p = new Proxy({ a: 1 }, handler);

console.log(p.a);
console.log(p.b);

p.c = 5;
console.log(p.c);

try {
  p.d = "hello";
} catch (e) {
  console.log(e.message);
}

console.log("d" in p);

const wm = new WeakMap();
const key = {};
wm.set(key, "secret");
console.log(wm.get(key));
console.log(wm.has({}));

// Answer: A Proxy wraps an object and lets you intercept operations using handler “traps”. The get trap runs on every property read: p.a exists in the target, so it gives 1, but p.b does not exist, so the trap returns the string "no_b". The set trap runs on every assignment: p.c = 5 passes the number check and is stored, so p.c gives 5. p.d = "hello" is not a number, so the trap throws a TypeError and the catch prints its message Only numbers allowed. Since the assignment never completed, d was not added to the target, so "d" in p is false (there is no has trap, so it checks the target directly). A WeakMap uses objects as keys, and it holds them weakly, so they can be garbage collected. wm.get(key) gives "secret". wm.has({}) is false because {} is a brand new object, which is a different reference from key.

// Output:

// 1
// no_b
// 5
// Only numbers allowed
// false
// secret
// false