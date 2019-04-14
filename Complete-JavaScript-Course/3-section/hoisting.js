calculateAge(1990);

// function declarations are hoisted
function calculateAge(year) {
  console.log(2016 - year);
}

// returement(1956);

// function expressions are not hoisted
const calculateAge = function(year) {
  console.log(2016 - year);
};

// Scoping

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  // console.log(c) doesn't work because of
  // how you cannot use lexical scoping to
  // access variable c, as third()
  // is not defined within the function
  // where var c is being defined
  // You can call the third() function itself
  // due to how it is a function declaration
  // and it can be hoisted.
  console.log(a + d);
}
