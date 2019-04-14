// Object.create
const personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

// creates an object called john :)
const john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

const jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});

// Primitives vs objects

// Variables
const a = 23;
const b = b;
a = 46;
console.log(a);
// 46
console.log(b);
// 23

// Objects
const obj1 = {
  name: "John",
  age: 26
};

const obj2 = obj1;
obj.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// Both objects hold a reference that point to the exact same object in the memory.

// Functions
const age = 27;
const obj = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);

console.log(age);
// 27
console.log(obj.city);
// San Francisco
