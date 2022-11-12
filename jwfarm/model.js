/************ MODEL **************************************/
const apiKey = "24bf56ca08654dbfbf56ca0865adbf49";
const apiUrl = `https://api.weather.com/v2/pws/observations/current?stationId=KALHARTS33&format=json&units=e&apiKey=${apiKey}&numericPrecision=decimal`;
const jsonUrl = "./farmEvents.json";

/************* Fetch API data *************
 * fetch returns string. json() method    *
 * resolves promise as JS object          *
 ******************************************/
function getWeather(apiUrl) {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

/************ Fetch Local JSON data ******/
function getEvents(jsonUrl) {
  return fetch(jsonUrl)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}
