const john = {
  firstName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  })
}

const mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}

function calcAverage(tips) {
  var sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum = tips[i];
  }
  return sum / tips.length;
}

// DO the calcualtions
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);