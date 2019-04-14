var massMark = 78;
var heightmark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? " + markHigherBMI); // true
