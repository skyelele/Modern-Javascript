// Functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

const teacherQuestion = interviewQuestion("teacher");
const designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
// What subject do you teach, John?
designerQuestion("John");
// John, can you please explain what UX design is?
designerQuestion("Jane");
// Jane, can you please explain what UX design is?
designerQuestion("Mark");
// Mark, can you please explain what UX design is?
designerQuestion("Mike");
// Mike, can you please explain what UX design is?

interviewQuestion("teacher")("Mark");
