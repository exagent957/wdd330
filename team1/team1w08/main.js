//Team1 W08 API Activity
//Star Wars API - fetching and displaying pagination

const outputDiv = document.querySelector("#outputDiv");

/************ Model Code ******************
 * Should handle anything to do with data *
 * Usually connected to the database      *
 * Responds to the Controller             *
 ******************************************/
/************* Fetch API data *************
 * fetch returns string. json() method    *
 * resolves promise as JS object          *
 ******************************************/
function getJSON(url) {
  return fetch(url)
    .then((response) => {
      outputDiv.innerHTML = "Waiting for response from server ...";
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        console.log("Response with no error");
        return response.json();
      }
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

/************* Controller Code **************
 * Interconnection between Model and View   *
 * Handles no data logic.                   *
 * Tells Model what to do. Takes info       *
 * from Model, processes it, sends to View  *
 ********************************************/
/**** Show People  ******/
function showPeople(url = "https://swapi.dev/api/people/") {
  getJSON(url).then(function (data) {
    console.log({ data });
    const results = data.results;
    console.log({ results });
  });
}
showPeople();

/*********** Views Code *******************
 * Renders data representation .
 * User Interface. Data collected by Model
 * Processed by Controller. Controller
 * sends all info to View to present it to UI
 *********************************************/

/***** Render People List *****/
function renderPeopleList() {}
