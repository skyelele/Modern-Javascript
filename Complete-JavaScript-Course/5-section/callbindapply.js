// Bind, call, and apply

const john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          "and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm \" + this.name + \", I'm a " +
          this.job +
          "and I'm " +
          this.age +
          " yeares old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  }
};

const emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

john.presentation("formal", "morning");

// Method borrowing

// .call()
john.presentation.call(emily, "friendly", "afternoon");

// .apply()
john.presentation.apply(emily, ["friendly", "afternoon"]);

// bind();
const johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");

// currying <--
// Taking a function based on another function, but
// with some preset parameters.
// bind(); is extremely useful for taking a function based on
// another function, but with some preset parameters.

const emilyFormal = john.presentation.bind(emily, "formal");
fmilyFormal("afternoon");

////

const yeras = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  const arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

const ages = arrayCalc(years, calculateAge);
const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
