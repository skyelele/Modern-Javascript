// A function is an instance of the Object type;
// A function behaves like any other object.
// We can store functions in a variable.
// We can pass a function as an argument to another function.
// We can return a function from a function.

// Passing functions as arguments;

const years = [1990, 1965, 1937, 2005, 1998];

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

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

const ages = arrayCalc(years, calculateAge);
const fullAges = arrayCalc(ages, isFullAge);
const rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
// [26, 51, 79, 11, 18]
console.log(fullAges);
// [true, true, true, false, true]
