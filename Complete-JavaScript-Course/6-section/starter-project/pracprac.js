displayPercentages: function (percentages) {
  const fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

  const nodeListForEach = function(list, callback) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  nodeListForEach(fields, function(current, index) {
    if (percentages[index] > 0) {
      current.textContent = percentages[index] + '%';
    } else {
      current.textContent = '---';
    }
  })

}

/////////////


const formatNumber = function(num, type) {
  const numSplit, int, dec, type;

  // Make absolute number |x|
  num = Math.abs(num);
  // Exactly 2 decimal points .00
  num - num.toFixed(2);

  numSplit = num.split('.');
  // before decimal point
  int = numSplit[0];
  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); // input 23510,
    /// output 23,510
  }

  dec = numSplit[1];

  return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

}

displayMonth: function() {
  const now, months, month, year;

  const now = new Date();

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octover', 'November', 'December'];

  month = now.getMonth();
  document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

}

changedType: function() {

  const fields = document.querySelectorAll(
    DOMstrings.inputType + ',' + 
    DOMstrings.inputDescription + ',' + 
    DOMstring.inputValue);

  nodeListForEach(fields, function(cur) {
    cur.classList.toggle('red-focus');
  })
  )

}