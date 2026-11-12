// Question 31: What will be the output of this code?


const fn = function () {
  return this;
};

console.log(fn.call(5) === 5);
console.log(typeof fn.call(5));

const strictFn = function () {
  "use strict";
  return this;
};

console.log(strictFn.call(5) === 5);
console.log(typeof strictFn.call(5));

const bound = function () {
  return this.x;
}.bind({ x: 10 });

console.log(bound());
console.log(bound.call({ x: 20 }));

// Answer: call lets you set this manually. In non-strict mode, a primitive value passed as this is wrapped into an object (5 becomes a Number object), so fn.call(5) === 5 is false and typeof gives "object". In strict mode, this stays exactly as passed, so strictFn.call(5) === 5 is true and typeof is "number". bind creates a new function with this permanently fixed, so bound() gives 10. Calling .call({ x: 20 }) on a bound function does not change this, because the binding cannot be overridden, so it still gives 10.

// Output:

// false
// object
// true
// number
// 10
// 10


// Question 32: What will be the output of this code?

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.type = "dog";
  }
  speak() {
    return super.speak() + " - Woof!";
  }
}

const d = new Dog("Tommy");
console.log(d.speak());
console.log(d instanceof Dog);
console.log(d instanceof Animal);
console.log(Object.getPrototypeOf(Dog) === Animal);
console.log(d.hasOwnProperty("speak"));

// Answer: Dog extends Animal, and super(name) calls the parent constructor to set this.name. In the speak method of Dog, super.speak() calls the parent’s version, and then " - Woof!" is added to the result. d is created from Dog, and Dog inherits from Animal, so instanceof is true for both. With extends, the Dog constructor function itself has Animal as its prototype (this is how static methods get inherited), so Object.getPrototypeOf(Dog) === Animal is true. The speak method is defined on Dog.prototype, not on the instance d, so hasOwnProperty("speak") is false.

// Output:

// Tommy makes a sound - Woof!
// true
// true
// true
// false