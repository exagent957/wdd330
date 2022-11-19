/***** CONTROLLER MODULE *****************/
import { getJSON } from "./model.js";
import { renderWeather, renderEvents } from "./view.js";
import { getFromLS, setToLS, bindClick } from "./utils.js";

const apiKey = "24bf56ca08654dbfbf56ca0865adbf49";
const apiUrl = `https://api.weather.com/v2/pws/observations/current?stationId=KALHARTS51&format=json&units=e&apiKey=${apiKey}&numericPrecision=decimal`;
const localJSON = "./farmEvents.json";
let storedWorklogs = [""];

/***** Weather Class ************************/
export default class Weather {
  constructor(apiKey, url) {
    this.apiKey = apiKey;
    this.url = url;
  }
  showWeather() {
    getJSON(this.url).then((weather) => {
      console.log(weather);
      renderWeather(weather);
    });
  }
}
const currentWeather = new Weather(apiKey, apiUrl);
currentWeather.showWeather();

/****** Events Class ************************/
class Events {
  constructor(url) {
    this.url = url;
  }
  showEvents() {
    getJSON(this.url).then((events) => {
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
}
const farmEvents = new Events(localJSON);
farmEvents.showEvents();

/***** Worklogs Class ***********************/
class Worklogs {
  #addNewWorklog(value, key) {
    const newWorklog = { id: new Date(), content: "test value" };
    console.log(newWorklog);
    storedWorklogs.push(newWorklog);
    setToLS(key, storedWorklogs);
  }
  constructor(listElement, key) {
    this.listElement = listElement;
    this.key = key;
  }
  listWorklogs() {
    renderWorklogs();
  }
  newWorklog() {
    const worklog = document.querySelector("#newWorklogInput");
    worklog.value = "this is a test string";
    console.log(worklog.value);
    this.#addNewWorklog(worklog.value, this.key);
    worklog.value = "";
    // this.listWorklogs();
  }
  editWorklog() {
    console.log("from editWorklog");
  }
  removeWorklog() {
    console.log("from removeWorklog");
  }
}
const worklogsList = document.querySelector("#worklogsList");
console.log(worklogsList);
const farmWorklogs = new Worklogs(worklogsList, "worklogs");
farmWorklogs.newWorklog();
farmWorklogs.editWorklog();
farmWorklogs.removeWorklog();
