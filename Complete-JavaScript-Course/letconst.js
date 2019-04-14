function driversLicense6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = "John";
  }
}

driversLicense6(true);

// Arrows

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});

console.log(ages6);

//////////

// Use arrow functions when you want to preserve the value
// of the this keyword! :) <3

const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      const str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};
box6.clickMe();
//////////////////////

function Person(name) {
  this.name = name;
}

// ES6
Person.prototype.myFriends6 = function(friends) {
  // mapping through friends array
  const arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr);
};

const friends = ["Bob", "Jane", "Mark"];

new Person("Mike").myFriends6(friends);

function Person(name) {
  this.name = name;
}

// ES6
Person.prototype.myFriends6 = function(friends) {
  const arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr);
};

const friends = ["Bob", "Jane", "Mark"];

new Person("Mike").myFriends6(friends);

// Destructuring

const [name, age] = ["John", 26];

const obj = {
  firstName: "John",
  lastName: "Smith"
};

const { firstName, lastName } = obj;

const { firstName: a, lastName: b } = obj;

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);

// Arrays in ES6

const boxes = document.querySelectorAll(".box");

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

// OR
Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

// CONTINUE

for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

///////////////////////
const ages = [12, 17, 8, 21, 14, 11];

// Find index of iteration that returns
// true when >= 18.
console.log(ages.findIndex(cur => cur >= 18));
// Find VALUE (not index) when value is
// >= 18
console.log(ages.find(cur => cur >= 18));

// Spread Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

const sum1 = addFourAges(18, 30, 12, 21);
// ES6
const sum3 = addFourAges(...ages);

// The spread operator returns EVERYTHING in an array.

// Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected,

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];

const bigFamily = [...familySmith, "Lily", ...familyMiller];
// Lily will be in the middle of the array :)
console.log(bigFamily);

////

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

// Creating an array of all separate iterations
// from the h1 and box elements
Array.from(all).forEach(cur => (cur.style.color = "purple"));

// Spread Operators! :) :D

// ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2016 - cur >= limit));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
