//Team1 W08 API Activity
//Star Wars API - fetching and displaying pagination

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
      parentDiv.innerText = "Waiting for response from server ...";
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
  getJSON(url).then((data) => {
    console.log({ data });
    const people = data.results;
    console.log({ people });
    const peopleListElement = document.querySelector("#parentDiv");
    console.log(peopleListElement);
    renderPeopleList(people, peopleListElement);
    if (data.next) {
      console.log(data.next);
    }
  });
}
showPeople();

/**** Person Details ****/
function getPersonDetails() {}

/*********** Views Code *********************
 * Renders data representation .
 * User Interface. Data collected by Model
 * Processed by Controller. Controller
 * sends all info to View to present it to UI
 *********************************************/

/***** Render People List *****/
function renderPeopleList(people, peopleListElement) {
  const list = peopleListElement;
  console.log({ list });
  list.innerHTML = "<h2>Star Wars Characters</h2>";
  people.forEach(function (person) {
    console.log(person);
    let listItem = document.createElement("p");
    listItem.innerHTML = `<a href="${person.url}">${person.name}</a>`;
    listItem.addEventListener("click", (e) => {
      e.preventDefault();
      getPersonDetails(person.url);
    });
    list.appendChild(listItem);
  });
}
