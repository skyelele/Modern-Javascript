const second = () => {
  setTimeout(() => {
    console.log("Async Hey There!");
  }, 2000);
};

const first = () => {
  console.log("Hey There!");
  second();
  console.log("The end");
};

first();

// example #2

const image = document.getElementById("img").scroll;

processLargeImage(image, () => {
  console.log("Image processed!");
});

// Allow asynchronous functions to run in the "background"
// We pass in callbacks that run once the function has finished its work
// Move on immediately: Non-blocking!

// The job of the event loop is to constantly monitor
// the Message Queue and the Execution Stack
// and to push the first callback function in line
// onto the Execution stack, as soon as the stack is
// empty.

// ES6 PROMISES FOR LIFE

// Object that keeps track about whether a certain
// event has happened already or not;

// Determines what happens after the event has happened;

// Implements the concept of a future value that we're
// expecting.

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 1500);
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        // func | timeout | parameter
        const recipe = { title: "Fresh tomato pasta", publisher: "Jonas" };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        // func | timeout | parameter
        const recipe = { title: "Italian Pizza", publisher: "Jonas" };
        resolve(`${pub}: ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

getIDs
  .then(ID => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then(recipe => {
    console.log(recipe);
    return getRelated("Jonas Schmedtmann");
  })
  .then(recipe => {
    console.log(recipe);
  })
  .catch(error => {
    console.log("Error!!");
  });
