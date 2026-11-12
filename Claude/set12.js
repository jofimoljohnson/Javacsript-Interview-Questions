// Question 23: What will be the output of this code?


const user = {
  name: "Arun",
  address: null,
};

console.log(user.address?.city);
console.log(user.profile?.age);
console.log(user.address ?? "No address");
console.log(0 || "default");
console.log(0 ?? "default");

// Answer: Optional chaining ?. stops and returns undefined if the value before it is null or undefined, instead of throwing a TypeError. So user.address?.city gives undefined (without ?., it would throw an error because address is null), and user.profile?.age also gives undefined. The nullish coalescing operator ?? returns the right side only when the left side is null or undefined, so user.address ?? "No address" gives "No address". The || operator returns the right side for any falsy value (like 0, "", false), so 0 || "default" gives "default". But 0 ?? "default" gives 0, because 0 is not null or undefined.

// Output:

// undefined
// undefined
// No address
// default
// 0



// Question 24: What will be the output of this code?


const s = "hello";
s[0] = "H";
console.log(s);

const str = "JavaScript";
console.log(str.slice(-6, -2));
console.log(str.substring(4, 0));
console.log(str.at(-1));
console.log("abc".split("").reverse().join(""));

// Answer: Strings are immutable in JavaScript, so s[0] = "H" does nothing. In non-strict mode it fails silently, and s is still "hello". (In strict mode or inside a module it would throw a TypeError.) slice(-6, -2) counts from the end: "JavaScript" has 10 characters, so index -6 is S (position 4) and -2 is position 8, giving characters from position 4 up to but not including 8, which is "Scri". substring(4, 0) swaps the arguments if the first is bigger, so it works like substring(0, 4) and gives "Java". at(-1) returns the last character, "t". The last line splits the string into characters, reverses the array, and joins it back, giving "cba".

// Output:

// hello
// Scri
// Java
// t
// cba
