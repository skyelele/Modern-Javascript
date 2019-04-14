// Maps

const question = new Map();

question.set(
  "question",
  "What is the official name of the latest major JS version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer! :D");
question.set(false, "Wrong, please try again!");

console.log(question.get("question"));
console.log(question.size);

// Deletes iteration of 4 from Map.set() value
question.delete(4);

if (question.has(4)) {
  question.delete(4);
}

// Clears out entire Map(); :)
question.clear();

for (let [key, value] of question.entries()) {
  console.log(`This is ${key}, and it's set to ${value}`);
}

// Alternate way of coding

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Write the correct answer"));

// If question.get(true) --> "Correct Answer! :D"
// If question.get(false) --> "False! Try again! :D"
console.log(question.get(ans === question.get("correct")));
