// Question 47: What will be the output of this code?


console.log("1");

setTimeout(() => console.log("2"), 0);

setImmediate(() => console.log("3"));

process.nextTick(() => console.log("4"));

Promise.resolve().then(() => console.log("5"));

queueMicrotask(() => console.log("6"));

(async () => {
  console.log("7");
  await null;
  console.log("8");
})();

console.log("9");

// Answer: This code runs in Node.js. All synchronous code runs first, in order: "1", then the async function starts running synchronously until its first await, so "7" prints, and then "9". After the main code finishes, Node.js runs process.nextTick callbacks first, since they have the highest priority, so "4" prints. Then the microtask queue runs in the order the tasks were added: the promise .then ("5"), then queueMicrotask ("6"), then the code after await null ("8"). After that, the event loop moves on to the macrotasks. setTimeout(..., 0) normally runs before setImmediate, so "2" prints before "3". But when both are called from the main module, the order of these two is not guaranteed, because it depends on how fast the process starts (if you put them inside an I/O callback, setImmediate always runs first).

// Output (usually):

// 1
// 7
// 9
// 4
// 5
// 6
// 8
// 2
// 3




// Question 48: What will be the output of this code?


const obj = {
  get full() {
    return this.first + " " + this.last;
  },
  set full(v) {
    [this.first, this.last] = v.split(" ");
  },
  first: "Arun",
  last: "Kumar",
};

console.log(obj.full);
obj.full = "Ravi Nair";
console.log(obj.first, obj.last);
console.log(Object.keys(obj));

const o2 = Object.create({ inherited: 1 });
o2.own = 2;
console.log(o2.inherited, o2.own);
console.log(Object.keys(o2));

Object.defineProperty(o2, "hidden", { value: 3, enumerable: false });
console.log(o2.hidden);
console.log(Object.keys(o2));

o2.hidden = 99;
console.log(o2.hidden);

// Answer: A getter (get full()) runs like a property read and a setter (set full(v)) runs on assignment, so obj.full gives "Arun Kumar". Assigning "Ravi Nair" calls the setter, which splits the string and uses destructuring to set first and last, so they become Ravi and Nair. Object.keys lists the object’s own enumerable properties, and full counts as one (accessor properties defined in an object literal are enumerable), so the keys are ['full', 'first', 'last'] in the order they were written. Object.create(proto) makes a new object whose prototype is the given object, so o2.inherited is 1 through the prototype chain, and o2.own is 2. Object.keys(o2) shows only own properties, so ['own']. Object.defineProperty creates hidden with enumerable: false, so it is readable (3) but not listed in Object.keys. Properties made this way are also writable: false by default, so o2.hidden = 99 is silently ignored in non-strict mode (it would throw a TypeError in strict mode), and o2.hidden is still 3.

// Output:

// Arun Kumar
// Ravi Nair
// [ 'full', 'first', 'last' ]
// 1 2
// [ 'own' ]
// 3
// [ 'own' ]
// 3