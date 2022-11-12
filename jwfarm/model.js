/************ MODEL MODULE ******************************/

/************* Fetch API data *************
 * fetch returns string. json() method    *
 * resolves promise as JS object          *
 ******************************************/
export function getWeather(apiUrl) {
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
export function getEvents(jsonUrl) {
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
