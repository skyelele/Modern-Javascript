// Function constructor

const john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

const john = new Person("John", 1990, "teacher");

john.calculateAge();

const jane = new Person("Jane", 1969, "designer");
const mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
