// Question 19: What will be the output of this code?


const original = {
  name: "Arun",
  address: { city: "Kochi" },
};

const shallow = { ...original };
shallow.name = "Ravi";
shallow.address.city = "Pune";

console.log(original.name);
console.log(original.address.city);

const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Delhi";
console.log(original.address.city);



// Answer: The spread operator makes only a shallow copy. Top-level properties like name are copied by value, so changing shallow.name does not affect original.name. But address is an object, so only its reference is copied, and shallow.address and original.address point to the same object. Changing shallow.address.city therefore changes the original too. JSON.parse(JSON.stringify(...)) creates a deep copy, so changing deep.address.city does not affect original, and it still prints "Pune". (You can also use structuredClone(original) for deep copying. The JSON method loses functions, undefined, and Date objects.)

// Output:

// Arun
// Pune
// Pune


// Question 20: What will be the output of this code?


console.log([] == false);
console.log(!![]);
console.log([] + []);
console.log(typeof NaN);

// Answer: With ==, false is converted to the number 0, and the empty array [] is converted to an empty string "" and then to 0, so [] == false is true. But !![] is true because every object, including an empty array, is truthy when converted to a boolean. So [] is equal to false loosely, yet still truthy. For [] + [], both arrays are converted to empty strings, so the result is an empty string "". typeof NaN is "number", because NaN is a special numeric value (Not-a-Number is still of type number).

// Output:

// true
// true

// number

// (the third line is an empty string)