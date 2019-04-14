// async function getWeatherAW(woeid) {
//   try {
//     const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/apilocation/${woeid}`);
//     const data = await result.json();
//     const tomorrow = data.consolidated_weather[1];
//     console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
//     return data;
//   } catch(error) {
//     alert(error);
//   }
// }

// getWeatherAW(2315132);

// let dataLondon;
// getWeatherAW(21392).then(data => {
//   dataLondon = data
//   console.log(data.London);
// })

// WOEID is a unique 32-bit reference identifier, originally defined by GeoPlanet and now assigned by Yahoo!, that identifies any feature on Earth.

async function getWeatherAW(woeid) {
  try {
    const result = await fetch(
      `https://crossorigin.me/https://www.metaweather.com/apilocation/${woeid}`
    );
    const data = await result.json();
    const tomorrow = data.consolidated_weather[1];
    console.log(
      `Temperatures tomorrow in ${data.title} stay between ${
        tomorrow.min_temp
      } and ${tomorrow.max_temp}`
    );
    return data;
  } catch (error) {
    alert(error);
  }
}

getWeatherAW(21329);

let dataLondon;
fetWeatherAW(21232).then(data => {
  dataLondon = data;
  console.log(data.London);
});
