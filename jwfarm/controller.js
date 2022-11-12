/***** CONTROLLER MODULE *****************/
import { getWeather, getEvents } from "./model.js";
import { renderWeather } from "./view.js";

const apiKey = "24bf56ca08654dbfbf56ca0865adbf49";
const apiUrl = `https://api.weather.com/v2/pws/observations/current?stationId=KALHARTS33&format=json&units=e&apiKey=${apiKey}&numericPrecision=decimal`;
const jsonUrl = "./farmEvents.json";

export function showWeather(apiUrl) {
  getWeather(apiUrl).then((weather) => {
    console.log(weather);
    renderWeather(weather);
  });
}
showWeather(apiUrl);

export function showEvents(jsonUrl) {
  getEvents(jsonUrl).then((events) => {
    console.log(events);
  });
}
showEvents(jsonUrl);
