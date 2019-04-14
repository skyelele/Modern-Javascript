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

// getIDs
//   .then(ID => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then(recipe => {
//     console.log(recipe);
//     return getRelated("Jonas Schmedtmann");
//   })
//   .then(recipe => {
//     console.log(recipe);
//   })
//   .catch(error => {
//     console.log("Error!!");
//   });

async function getRecipesAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const related = await getRelated("Jonas Schmedtmann");
  console.log(related);

  return recipe;
}
getRecipesAW().then(result => console.log(`${result} is the best ever!`));

function getWeather(woeid) {
  fetch(
    `https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}`
  )
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(data => {
      const today = data.consolidated_weather[0];
      console.log(
        `Temperatures in ${data.title} stay between ${today.min_temp} and ${
          today.max_temp
        }`
      );
    })
    .catch(error => console.log(error));
}

getWeather(44418);

function getWeather(woeid) {
  fetch(
    `https://crossorigin.me/https://www.metawetaher.com/api/location/${woeid}`
  )
    .then(result => {
      return result.json();
    })
    .then(data => {
      const today = data.consolidated_weather[0];
      console.log(
        `Temperatures in ${data.title} stay between ${today.min_temp} and ${
          today.max_temp
        }.`
      );
    })
    .catch(error => console.log(error));
}
getWeather(8257892);
