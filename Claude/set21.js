// Question 41: What will be the output of this code?


const obj = { a: 1, b: { c: 2 } };

console.log(Object.keys(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify({ a: undefined, b: () => {}, c: null, d: NaN }));
console.log(JSON.stringify([undefined, function () {}]));
console.log(JSON.parse('{"x": 1}').x);

const date = new Date(0);
console.log(JSON.stringify({ date }));

try {
  JSON.parse("{'x': 1}");
} catch (e) {
  console.log(e.name);
}

// Answer: Object.keys(obj) gives an array of the object’s own keys, so ['a', 'b']. JSON.stringify converts the object into a JSON string. When stringifying an object, properties whose values are undefined, functions, or symbols are skipped completely, while null stays as null and NaN becomes null (JSON has no NaN), so the result is {"c":null,"d":null}. Inside an array, those same values (undefined, functions) are not skipped; they are replaced with null to keep the positions, so we get [null,null]. JSON.parse('{"x": 1}').x gives 1. A Date object has a toJSON method that returns an ISO string, so new Date(0) becomes "1970-01-01T00:00:00.000Z". The last JSON.parse fails because JSON requires double quotes, and single quotes are invalid, so it throws a SyntaxError.

// Output:

// [ 'a', 'b' ]
// {"a":1,"b":{"c":2}}
// {"c":null,"d":null}
// [null,null]
// 1
// {"date":"1970-01-01T00:00:00.000Z"}
// SyntaxError



// Question 42: What will be the output of this code?


const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2);
console.log(sym1.toString());
console.log(sym1.description);

const user = {
  name: "Arun",
  [sym1]: 123,
};

console.log(user[sym1]);
console.log(Object.keys(user));
console.log(JSON.stringify(user));

for (const key in user) {
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(user).length);
console.log(Symbol.for("app") === Symbol.for("app"));

// Answer: Every Symbol() call creates a unique value, even with the same description, so sym1 === sym2 is false. toString() gives "Symbol(id)", and .description gives just the text "id". A symbol can be used as a property key by putting it in square brackets, and you read it back with user[sym1], which gives 123. Symbol keys are hidden from normal enumeration, so Object.keys, JSON.stringify, and for...in all ignore them. That is why Object.keys(user) is only ['name'], the JSON string has only name, and the loop prints only name. To get symbol keys, use Object.getOwnPropertySymbols, which returns an array of length 1. Symbol.for("app") looks up a shared global symbol registry, so calling it twice with the same key returns the same symbol, and the comparison is true.

// Output:

// false
// Symbol(id)
// id
// 123
// [ 'name' ]
// {"name":"Arun"}
// name
// 1
// true