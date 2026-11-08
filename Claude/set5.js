
// Question 9: What will be the output of this code? 

const person = {
  name: "Arun",
  greet: function () {
    console.log(this.name);
  },
  arrowGreet: () => {
    console.log(this.name);
  },
};

person.greet();
person.arrowGreet();


// Answer: In a normal function, this depends on how the function is called. person.greet() is called on person, so this is person and it prints "Arun". Arrow functions do not have their own this; they take it from the surrounding scope. Here the surrounding scope is the top level (not inside any function), where this is not person. In a browser, this is window, and window.name is an empty string by default. In Node.js (CommonJS module), this is {} (module.exports), so this.name is undefined.

// Output (browser):

// Arun

// (the second line is an empty string)

// Output (Node.js):

// Arun
// undefined



// Question 10: What will be the output of this code?


function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();

const counter2 = outer();
counter2();


// Answer: This is a closure. The inner function remembers the variable count from the scope where it was created, even after outer has finished running. counter keeps its own count, so two calls print 1 and 2. Each call to outer() creates a fresh count, so counter2 starts from 0 again and prints 1.

// Output:

// 1
// 2
// 1