/***** CONTROLLER SECTION *****************/
function showWeather(apiUrl) {
  getWeather(apiUrl).then((weather) => {
    console.log(weather);
    renderWeather(weather);
  });
}
showWeather(apiUrl);

function showEvents(jsonUrl) {
  getEvents(jsonUrl).then((events) => {
    console.log(events);
  });
}
showEvents(jsonUrl);
