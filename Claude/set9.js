// Question 17: What will be the output of this code?


async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");

// Answer: JavaScript runs synchronous code first, so "3" prints first. Then test() is called and runs synchronously until the first await, so "1" prints. At the await, the function pauses and the rest of it (console.log("2")) is put in the microtask queue, and control goes back to the main code, which prints "4". After the main code finishes, the microtask runs and prints "2".

// Output:

// 3
// 1
// 4
// 2


// Question 18: What will be the output of this code?


const obj = {
  name: "Arun",
  regular: function () {
    return function () {
      console.log(this.name);
    };
  },
  arrow: function () {
    return () => {
      console.log(this.name);
    };
  },
};

obj.regular()();
obj.arrow()();

// Answer: In regular, the inner function is a normal function that is called on its own (not as obj.something()), so this is not obj. In non-strict mode this becomes the global object, so this.name is undefined (or an empty string in a browser, since window.name is ""). In arrow, the inner arrow function does not have its own this; it takes this from arrow, which was called as obj.arrow(), so this is obj and it prints "Arun".

// Output (Node.js):

// undefined
// Arun