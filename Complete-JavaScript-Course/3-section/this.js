calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}
// will console.log the window object

const john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    // logs john object
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

john.calculateAge();
// logs the "john" object
// logs year of birth

const mike = {
  name: "Mike",
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
