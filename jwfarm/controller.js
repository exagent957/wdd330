/***** CONTROLLER MODULE *****************/
import { getWeather, getEvents } from "./model.js";
import { renderWeather, renderEvents } from "./view.js";

const apiKey = "24bf56ca08654dbfbf56ca0865adbf49";
const apiUrl = `https://api.weather.com/v2/pws/observations/current?stationId=KALHARTS51&format=json&units=e&apiKey=${apiKey}&numericPrecision=decimal`;
const jsonUrl = "./farmEvents.json";

/****** Show Weather ******/
export function showWeather(apiUrl) {
  getWeather(apiUrl).then((weather) => {
    console.log(weather);
    renderWeather(weather);
  });
}
showWeather(apiUrl);

/****** Show Events ******/
export function showEvents(jsonUrl) {
  getEvents(jsonUrl).then((events) => {
    console.log(events);
    const today = new Date();
    events.forEach((event) => {
      event.date = new Date(event.date);
    });

    const today90 = new Date(today.setDate(today.getDate() + 90));
    const eventsList = events.filter((event) => event.date <= today90);
    console.log(eventsList);

    eventsList.forEach((event) => {
      event.date = event.date.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
    });
    renderEvents(eventsList);
  });
}

showEvents(jsonUrl);
