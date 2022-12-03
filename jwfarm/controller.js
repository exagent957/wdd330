/***** CONTROLLER MODULE *****************/
import { getJSON } from "./model.js";
import { renderWeather, renderEvents, renderWorklogs } from "./view.js";
import { getFromLS, setToLS, bindAction } from "./utils.js";

const apiKey = "24bf56ca08654dbfbf56ca0865adbf49";
const apiUrl = `https://api.weather.com/v2/pws/observations/current?stationId=KALHARTS51&format=json&units=e&apiKey=${apiKey}&numericPrecision=decimal`;
const localJSON = "./farmEvents.json";
let storedWorklogs = null;

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
  //private methods
  #addNewWorklog(date, value, key) {
    const newWorklog = {
      id: new Date(),
      worklogDate: date,
      content: value,
    };

    storedWorklogs.push(newWorklog);
    storedWorklogs.sort((a, b) => {
      let da = a.worklogDate;
      let db = b.worklogDate;
      if (da < db) {
        return -1;
      }
      if (da > db) {
        return 1;
      }
      return 0;
    });
    setToLS(key, storedWorklogs);
  }
  #getWorklogs(key) {
    if (storedWorklogs === null) {
      storedWorklogs = getFromLS(key) || [];
    }
    return storedWorklogs;
  }
  #deleteWorklog(key, listKey) {
    let newList = storedWorklogs.filter((li) => li.id != key);
    storedWorklogs = newList;
    setToLS(listKey, storedWorklogs);
  }
  #editWorklog(updatedDate, updatedContent, key) {
    const updatedWorklog = {
      id: new Date(),
      worklogDate: updatedDate,
      content: updatedContent,
    };
    storedWorklogs.push(updatedWorklog);
    setToLS(key, storedWorklogs);
  }
  //constructor
  constructor(listElement, key) {
    this.listElement = listElement;
    this.key = key;
    bindAction("#addNewWorklog", this.newWorklog.bind(this));
    this.listWorklogs();
  }
  //public methods
  listWorklogs() {
    renderWorklogs(this.#getWorklogs(this.key), this.listElement, this);
  }
  findWorklog(id) {
    let worklog = storedWorklogs.find((element) => {
      return element.id === id;
    });
    return worklog;
  }
  newWorklog() {
    const worklogDate = document.querySelector("#newWorklogDate");
    const worklogInput = document.querySelector("#newWorklogInput");
    this.#addNewWorklog(worklogDate.value, worklogInput.value, this.key);
    worklogDate.value = "";
    worklogInput.value = "";
    this.listWorklogs();
  }
  updateWorklog(id, updatedDate, updatedContent) {
    console.log(`${id} ${updatedDate} ${updatedContent} from updateWorklog`);
    let worklog = this.findWorklog(id);
    if (worklog) {
      this.#deleteWorklog(id, this.key);
    }
    this.#editWorklog(updatedDate, updatedContent, this.key);
    this.listWorklogs();
  }
  removeWorklog(id) {
    console.log(id + " worklog removed");
    let worklog = this.findWorklog(id);
    if (worklog) {
      this.#deleteWorklog(id, this.key);
      renderWorklogs(storedWorklogs, this.listElement, this);
    }
  }
}
const worklogsList = document.querySelector("#worklogsList");
const farmWorklogs = new Worklogs(worklogsList, "worklogs");
