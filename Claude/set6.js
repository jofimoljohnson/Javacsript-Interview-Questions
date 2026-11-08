// Question 11: What will be the output of this code?


console.log(hello());
console.log(typeof greet);

function hello() {
  return "Hello!";
}

var greet = function () {
  return "Hi!";
};


// Answer: Function declarations are hoisted completely, including their body, so hello() works even before the line where it is written. var greet is hoisted too, but only the variable is hoisted (as undefined), not the function assigned to it. So at the time of typeof greet, it is still undefined. If you tried to call greet() before the assignment, you would get TypeError: greet is not a function.

// Output:

// Hello!
// undefined


// Question 12: What will be the output of this code?


const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

const obj = { a: 1 };
obj.b = 2;
console.log(obj);

arr = [5, 6];
console.log(arr);

// Answer: const stops you from reassigning the variable, but it does not make the value immutable. So arr.push(4) and obj.b = 2 work fine, because they change the contents and not the variable itself. But arr = [5, 6] tries to reassign the const variable, which throws a TypeError, so the last console.log never runs.

// Output:

// [ 1, 2, 3, 4 ]
// { a: 1, b: 2 }
// TypeError: Assignment to constant variable.