var john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

john.calcBMI();

var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

mark.calcBMI();

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName = ' has a higher BMI of ' john.bmi);
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(mark.fullName + ' has a higher BMI of ' + john.bmi);
} else {
  console.log('They have the same BMI');
}