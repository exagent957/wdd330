import { getJSON, getLocation } from "./utilities.js";

const baseUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2017-01-01&endtime=2022-11-14";

async function testGetQuakesForLocation() {
  // call the getLocation function to get the lat/long
  let locResp = await getLocation();
  console.log(locResp.coords);
  const latitude = locResp.coords.latitude;
  const longitude = locResp.coords.longitude;
  const radius = 100;

  // use that information to build out the correct URL
  const geoUrl = `${baseUrl}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${radius}`;
  console.log({ geoUrl });
  // add location information here
  // use the url to request the correct quakes
  getJSON(geoUrl).then((quakes) => {
    console.log(quakes);
  });
  //log out the quakes for now.
}
//testGetQuakesForLocation();

let quakes = [];

// this function works...but is doing way too much. Large functions like this tend to be brittle and hard to maintain and test
// a function should do one thing and do it well. Not everything!
async function everything() {
  // get location
  let locResp = await getLocation();
  // take a look at where the information we need is in the returned object
  console.log(locResp);
  // we really only need the coords portion
  const location = locResp.coords;
  // build out the url with the location
  const radius = 100;
  const query =
    baseUrl +
    `&latitude=${location.latitude}&longitude=${location.longitude}&maxradiuskm=${radius}`;
  console.log(query);
  // fetch the data
  quakes = await getJSON(query);
  console.log({ quakes });
  // get the element we will render the list in
  const listElement = document.querySelector("#quakeList");
  // render the list of quakes
  // how did I know to look at quakes.features? I looked at the returned data from the fetch!
  const listHtml = quakes.features.map((quake) => {
    return `<li>
${quake.properties.title} 
${new Date(quake.properties.time)}</li>
`;
  });
  console.log(listHtml);
  listElement.innerHTML = listHtml.join("");
  // attach a listener to watch for a click on the quake. If it sees one then render out the details of the quake
  listElement.addEventListener("click", (event) => {
    console.log(event.currentTarget); // note the difference between target and currentTarget
    console.log(event.target);
    const quakeId = event.target.dataset.id;
    console.log({ quakeId });
    // find the quake with that ID
    const quake = quakes.features.find((item) => item.id === quakeId);

    // render details
    const detailsElement = document.querySelector("#quakeDetails");
    // our quake information is inside of an object called properties. Objects are sometimes hard to iterate over...below is a nice way to convert an object into an array.
    const quakeProperties = Object.entries(quake.properties);
    detailsElement.innerHTML = quakeProperties
      .map((item) => {
        if (item[0] === "time" || item[0] === "updated") {
          return `
${item[0]}: ${new Date(item[1])}
`;
        } else
          return `
${item[0]}: ${item[1]}
`;
      })
      .join("");
  });
}
everything();
