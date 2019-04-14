(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
  
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };
  
  Question.prototype.checkAnswer = function(ans, callback) {
    function (ans) {
      const sc;

      if (ans === this.correct) {
        console.log('Correct answer!');
        sc = callback(true);
      } else {
        console.log('Wrong answer. Try again :)');
        sc = callback(false);
      }

      this.displayScore(sc);
    }
  }

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('---------------------------------');
  }
  
  const q1 = new Question(
    "Is JS the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );
  
  const q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Michael", "Jonas"],
    2
  );
  
  const q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tedious"],
    2
  );

  const questions = [q1, q2, q3];  

  function score() {
    const sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return score;
    }
  }

  const keepScore = score();

  function nextQuestion() {
    
    const n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    const answer = prompt("Please select the correct answer.");

    if(answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    }
  }

  nextQuestion();
  
})();

