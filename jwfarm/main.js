//object sample
//   observations: [
//     {
//       stationID: "KALHARTS33",
//       obsTimeUtc: "2022-11-11T04:08:00Z",
//       obsTimeLocal: "2022-11-10 22:08:00",
//       neighborhood: "Hartselle",
//       softwareType: null,
//       country: "US",
//       solarRadiation: 0.0,
//       lon: -86.983,
//       realtimeFrequency: null,
//       epoch: 1668139680,
//       lat: 34.408,
//       uv: 0.0,
//       winddir: 69,
//       humidity: 84,
//       qcStatus: 1,
//       imperial: {
//         temp: 67,
//         heatIndex: 67,
//         dewpt: 62,
//         windChill: 67,
//         windSpeed: 2,
//         windGust: 2,
//         pressure: 29.79,
//         precipRate: 0.0,
//         precipTotal: 0.01,
//         elev: 597,
//       },
//     },
//   ],
// };
// This will go in model - need to protect the apiKey
const apiKey = "24bf56ca08654dbfbf56ca0865adbf49";
const apiUrl = `https://api.weather.com/v2/pws/observations/current?stationId=KALHARTS33&format=json&units=e&apiKey=${apiKey}&numericPrecision=decimal`;

/************* Fetch API data *************
 * fetch returns string. json() method    *
 * resolves promise as JS object          *
 ******************************************/

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
  .catch(function (error) {
    console.log("Error: ", error);
  })
  .then((obj) => {
    console.log(obj.observations[0].imperial.temp);
    console.log(obj.observations[0].imperial.windChill);
    console.log(obj.observations[0].imperial.windSpeed);
    console.log(obj.observations[0].imperial.windGust);
    console.log(obj.observations[0].imperial.precipRate);
  });

// Now lets work on accessing local JW Farm JSON data
import events from "./farmEvent.json" assert { type: "JSON" };
console.log(events); //error

//This will go in controller
// function showCurrent(apiUrl) {
//   getJSON(apiUrl).then((data) => {
//     console.log({ data });
//     const conditions = data.results;
//     console.log({ conditions });
//   });
// }
// showCurrent(apiUrl);
