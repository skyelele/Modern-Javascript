// Closures

function retirement(retirementAge) {
  const a = " years left until retirement.";
  return function(yearOfBirth) {
    const age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

const retirementUS = retirement(66);

retirementUS(1990);
// 40 yeras left until retirement
// 1990 gets sent as the "yearOfBirth" parameter
// in the nested function inside the "retirement"()
// function.

// Alternate way to call:

retirement(66)(1990);

// An inner function has always access to the varaibles and parameters of its outer function, even after the outer function has returned.
